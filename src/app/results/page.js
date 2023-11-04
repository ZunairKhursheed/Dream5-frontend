import React from "react";
import{HeaderSecond} from "@/client/components/headersecond"
import {Pick} from "@/client/components/pick"
import {Pickbtn} from "@/client/components/pickbutton"

import { HeaderBottomResults } from "@/client/components/headerbottomresults";



export default function Results() {
  return (
  <main>
    <HeaderSecond >
      <HeaderBottomResults/>
    </HeaderSecond>
    <div className="app-content pt-150">
       <Pick />
       <Pick />
       <Pickbtn />
    </div>

  </main>
  );
}
