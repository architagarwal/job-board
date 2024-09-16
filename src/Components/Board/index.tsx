import React from "react";
import Card from "../Card";
import { Job } from "@/types/types";
import Link from "next/link";

interface BoardProps {
  jobs: Job[];
  textMaxLength?: number;
  title: string;
}

const Board = ({jobs, textMaxLength, title}: BoardProps) => {
  return (
    <div className="flex flex-col">
      <div data-testid="board-title" className="text-blue-400 text-xl font-bold">{title}</div>
      <div className="container mx-auto px-4 py-8 border-2 border-[#C5C4DC] rounded-lg overflow-y-scroll">
        <div className="flex flex-col gap-6">
          {jobs?.map((job, index) => {
            const {id, title, description, company, expiry} = job;
            let truncatedDescription = description;
            if (textMaxLength && description.length > textMaxLength) {
              truncatedDescription = `${description.substring(0, textMaxLength)}...`;
            }
            return (
              <Link key={index} href={`../jobDetails?jobId=${id}`} target="_blank">
                <Card
                  title={title}
                  description={truncatedDescription}
                  company={company}
                  expiry={expiry}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Board;