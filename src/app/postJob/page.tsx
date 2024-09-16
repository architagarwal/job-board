"use client";
import React, {useState} from "react";
import { formatDate } from "../utils/utils";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

interface JobState {
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
  name: string;
  email: string;
  expiry: string;
}

const PostJob = () => {
  const router = useRouter();
  const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;
  const minExpiry = formatDate(new Date(Date.now() + DAY_IN_SECONDS));
  const [jobState, setJobState] = useState<JobState>({
    title: "",
    company: "",
    location: "",
    description: "",
    requirements: "",
    name: "",
    email: "",
    expiry: minExpiry,
  });
  
  const {
    title,
    company,
    location,
    description,
    requirements,
    name,
    email,
    expiry
  } = jobState;

  const updateState = (key: keyof JobState, value: string) => {
    const newJobState = {...jobState};
    newJobState[key] = value;
    setJobState(newJobState);
  }

  const onSubmit = async (e:any) => {
    e.preventDefault();
    const response = await fetch('/api/postJob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobState)
    });

    const result = await response.json();
    if(response.ok) {
      toast.success(result.message);
      router.push("/dashboard");
    } else {
      toast.error("Something went wrong! Please try again.");
    }
  }

  return (
    <div className="flex flex-col px-4 py-8 items-center">
      <div className="text-blue-400 text-xl font-bold">New Job</div>
      <div className="container max-w-3xl mx-auto border-2 border-[#C5C4DC] rounded-lg overflow-y-scroll">
        <div className="mx-auto p-4">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded text-gray-700"
                value={name}
                onChange={(e) => updateState("name", e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded text-gray-700"
                value={email}
                onChange={(e) => updateState("email", e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-3 py-2 border rounded text-gray-700"
                value={company}
                onChange={(e) => updateState("company", e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full px-3 py-2 border rounded text-gray-700"
                value={location}
                onChange={(e) => updateState("location", e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 border rounded text-gray-700"
                value={title}
                onChange={(e) => updateState("title", e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiry">
                Expiration Date
              </label>
              <input
                type="date"
                id="expiry"
                className="w-full px-3 py-2 border rounded text-gray-700"
                value={expiry}
                onChange={(e) => updateState("expiry", e.target.value)}
                min={minExpiry}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Job Description
              </label>
              <textarea
                id="description"
                className="w-full px-3 py-2 border rounded text-gray-700"
                value={description}
                onChange={(e) => updateState("description", e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirements">
                Job Requirements
              </label>
              <textarea
                id="requirements"
                className="w-full px-3 py-2 border rounded text-gray-700"
                value={requirements}
                onChange={(e) => updateState("requirements", e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostJob;