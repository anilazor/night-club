"use client";
import { Caption } from "../typography";
import { FaTwitter } from "react-icons/fa";
const RecentTweets = ({ text, date }) => {
  return (
    <>
      <FaTwitter size={30} className="ml-5 text-accent" />
      <div className="flex flex-col gap-1">
        <Caption text={text} />
        <Caption text={date} color="pink" />
      </div>
    </>
  );
};

export default RecentTweets;
