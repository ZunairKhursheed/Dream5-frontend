"use client";
import { HeaderSecond } from "@/client/components/headersecond";
import { Pick } from "@/client/components/pick";
import { Pickbtn } from "@/client/components/pickbutton";
import { useState } from "react";

import { HeaderBottomResults } from "@/client/components/headerbottomresults";

export default function Results() {
  const [activeTab, setActiveTab] = useState("myPicks");

  return (
    <main>
      <HeaderSecond>
        <HeaderBottomResults
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </HeaderSecond>
      <div className="app-content pt-150">
        <Pick />
        <Pick />
        <Pickbtn />
      </div>
    </main>
  );
}
