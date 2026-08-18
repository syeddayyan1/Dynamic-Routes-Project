"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center flex-col w-8xl">
      <h1 className=" mt-10 text-5xl font-bold">Something went wrong!</h1>
    
      <p className=" mt-4 text-4xl font-semibold text-red-600 mb-5">Failed to load products.</p>

      <button onClick={() => reset()}
      className="bg-amber-300  text-black border border-10 rounded-4xl p-4 w-2xl  ">
        Try Again
      </button>
    </div>
  );
}