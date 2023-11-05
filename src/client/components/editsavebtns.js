"use client";
import React from "react";
import style from "@/styles/pages/reviewSelection.scss";
import { useRouter } from "next/navigation";

export const EditSaveBtns = () => {
  const router = useRouter();
  return (
    <div className="previous-next d-flex justify-content-center p-4">
      <div className="btn btn-edit" onClick={() => router.push("/questionier")}>
        EDIT
      </div>
      <div className="btn btn-save" onClick={() => router.push("/results")}>
        {" "}
        SAVE
      </div>
    </div>
  );
};
