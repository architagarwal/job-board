"use client"
import React, {useState, useEffect, useCallback} from "react";
import { useSearchParams } from 'next/navigation';
import { Job, ChangeEvent } from "@/types/types";
import DisplayText from "@/Components/DisplayText";
import { getRemainingDaysFromToday } from "../utils/utils";
import { toast } from 'react-toastify';

const JobDetails = () => {
  const [job, setJob] = useState<Job>({
    id: 0,
    title: "",
    company: "",
    location: "",
    description: "",
    requirements: "",
    name: "",
    email: "",
    totalBids: 0,
    minBid: 0,
    maxBid: 0,
    publishDate: 0,
    expiry: 0
  });
  const [bid, setBid] = useState<string>("");
  const searchParams = useSearchParams();
  const jobId = searchParams?.get('jobId');

  useEffect(() => {
    const fetchJob = async () => {
      const response = await fetch(`/api/getJob?jobId=${jobId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const jobs = await response.json();
      setJob(jobs);
    }
    fetchJob();
  },[]);
  
  const addBid = (e: ChangeEvent) => {
    const value = e.target.value;
    const validNumber = /^\d*(\.\d{0,2})?$/;
    
    if (validNumber.test(value)) {
      setBid(value);
    }
  }

  const updateBid = async () => {
    const response = await fetch('/api/postBid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jobId,
        bid
      })
    });
    
    if(response.ok) {
      const result = await response.json();
      toast.success('Bid submitted successfully!');
      setJob(result);
    } else {
      toast.error('Something went wrong! Please try again.');
    }
  }

  const {title, company, description, requirements, totalBids, minBid, expiry} = job;

  return (
    <div className="flex flex-col px-4 py-8 items-center">
      <div className="text-blue-400 text-xl font-bold">Job Details</div>
      <div className="container max-w-3xl mx-auto border-2 border-[#C5C4DC] rounded-lg overflow-y-scroll">
        <div className="mx-auto p-4">
          <div className="mb-4">
            <div className="flex flex-row justify-between">
              <h3 className="text-xl font-bold mb-2 text-gray-700">{title}</h3>
              <div className="flex flex-row gap-6">
                <input 
                  type="text"
                  id="bid"
                  className="max-w-16 border rounded text-gray-700"
                  value={bid}
                  onChange={addBid}
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={updateBid}
                >
                  Bid Now
                </button>
              </div>
            </div>
            <h4 className="text-lg font-medium text-gray-600">{company}</h4>
            <h4 className="text-lg font-semibold text-gray-600 mt-5">Job Description</h4>
            <DisplayText text={description}/>
            <h4 className="text-lg font-semibold text-gray-600 mt-5">Job Responsibilities</h4>
            <DisplayText text={requirements}/>
            {totalBids > 0 && <p className="text-sm font-semibold text-gray-600 mt-5">Lowest Bid: <span>${minBid}/hr</span></p>}
            <p className="text-sm font-semibold text-gray-600 mt-5">Total Bids: <span>{totalBids}</span></p>
            <p className="text-sm font-semibold text-gray-600 mt-5">Expires: <span>{new Date(expiry).toLocaleDateString()}</span></p>
            <p className="text-sm font-semibold text-gray-600 mt-5">Time Remaining: {getRemainingDaysFromToday(expiry)} days</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default JobDetails;