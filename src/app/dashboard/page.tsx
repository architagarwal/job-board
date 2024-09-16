"use client"
import React, {useState, useEffect} from "react";
import Board from "@/Components/Board";
import { JobList, Job } from "@/types/types";
import { getRemainingDaysFromToday } from "../utils/utils";


const Dashboard = () => {
  const [jobs, setJobs] = useState<JobList>({});
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('/api/getJobs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const jobs = await response.json();
      setJobs(jobs);
    }
    fetchJobs();
  },[]);

  const allJobs = Object.values(jobs);

  // Get only non-expired jobs
  const nonExpiredJobs = allJobs.map(job => {
    const daysToExpire = getRemainingDaysFromToday(job.expiry);
    if (daysToExpire >= 0) {
      return job;
    }
  }).filter(Boolean) as Job[];

  // Get most active jobs based on the number of total bids
  const activeJobs = !!nonExpiredJobs && nonExpiredJobs.length > 0 && nonExpiredJobs.sort((a,b) => b.totalBids - a.totalBids) || [];
  return (
    <div className="flex flex-row gap-14 pt-12 px-28 h-4/5">
      <Board
        jobs={nonExpiredJobs.toReversed().slice(0,10)} // display top 10 jobs
        textMaxLength={100}
        title="Recently Published Jobs"
      />
      <Board
        jobs={activeJobs.slice(0,10)} // display top 10 jobs
        textMaxLength={100}
        title="Most Active Jobs"
      />
    </div>
  );
}

export default Dashboard;