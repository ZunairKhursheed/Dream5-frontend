import React from "react";
import style from "@/styles/pages/results.scss";
import Link from "next/link";

export const Pickbtn = () => {
  return (
    <div className="pick-btn-container d-flex justify-content-center">
      <Link href={"/review"} className="btn-make-your-picks text-center my-2">
        MAKE YOUR PICKS
      </Link>
    </div>
  );
};
