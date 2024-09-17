"use client"
import React, { useState } from "react";
import { FormEvent, LoginState } from "@/types/types";
// import bcrypt from 'bcrypt';
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

/**
 * Login feature is work in progress
 */
const LoginForm = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginState>({email: "", password: ""});
  const {email, password} = loginData;

  const updateState = (key: keyof LoginState, value: string) => {
    const newLoginData = {...loginData};
    newLoginData[key] = value;
    setLoginData(newLoginData);
  }

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    // const hashedPassword = await bcrypt.hash(password, 10);
    const response = await fetch('/api/postLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
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
      <div className="container max-w-3xl mx-auto border-2 border-[#C5C4DC] rounded-lg overflow-y-scroll">
        <div className="mx-auto p-4">
          <form onSubmit={submitForm}>
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded text-gray-700"
                value={password}
                onChange={(e) => updateState("password", e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
