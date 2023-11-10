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
        {activeTab == "myPicks" && (
          <>
            <Pick />
            <Pick />
            <Pickbtn />
          </>
        )}
        {activeTab == "leaderboard" && (
          <>
            <div className="grid grid-cols-4 container align-items-center gap-2 my-3">
              <h5 className="col-span-2">All Teams</h5>
              <h5>Points</h5>
              <h5>Rank</h5>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
                <>
                  <div className="d-flex gap-1 col-span-2 align-items-center">
                    <img
                      src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                      width={50}
                      height={50}
                      className="rounded-pill"
                      style={{ objectFit: "cover" }}
                    />
                    <span>Test Name</span>
                  </div>
                  <div>546</div>
                  <div>
                    #<b>{data}</b>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
