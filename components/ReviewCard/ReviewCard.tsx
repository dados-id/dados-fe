import { Body, Chip, Header } from "@components";
import { Tag } from "@chakra-ui/react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type CardProps = {
  reviewData: {
    forCredit: number;
    attendance: string;
    wouldTakeAgain: string;
    grade: string;
    textBook: number;
    onlineClass: boolean;
    rating: number;
    difficulty: number;
    courseCode: string;
  },
  className?: string;

}

export const ReviewCard = () => {
  return (
    <div className="flex flex-row gap-6 w-full rounded-xl p-4 border  border-grey-200">
      <div className="h-36 w-36 bg-mariana rounded-xl">
      </div>
      <div className="flex flex-col w-1/3">
        <div className="flex flex-row justify-between items-center">
          <Body preset="p2" className="">
            For Credit
          </Body>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Body preset="p2" className="">
            Attendance
          </Body>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Body preset="p2" className="">
            Would Take Again
          </Body>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Body preset="p2" className="">
            Grade
          </Body>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Body preset="p2" className="">
            Textbook
          </Body>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Body preset="p2" className="">
            Online Class
          </Body>
        </div>
      </div>
      <div className="flex flex-col justify-between w-max">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row gap-2">
            <Tag size="lg" variant="outline" colorScheme="violet">
              <Body preset="p2" className="font-bold">
                CSCM603142
              </Body>
            </Tag>
            <Chip icon={AcademicCapIcon}></Chip>
          </div>
          <Body preset="p2">22 June 2023</Body>
        </div>
        <Body preset="p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue id justo vulputate cursus. Ut sed dignissim nisl, ut iaculis tellus. Nunc luctus ligula eu ex gravida euismod. Aliquam eros arcu, iaculis vitae turpis et, vehicula ultrices erat. Nulla id aliquam sapien.
        </Body>

        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row gap-2">
            <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              <Body preset="p2">0</Body>
            </div>
            <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
              </svg>
              <Body preset="p2">0</Body>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
          </svg>

        </div>
      </div>
    </div>
  )
}
