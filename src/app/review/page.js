import { EditSaveBtns } from "@/client/components/editsavebtns";
import{HeaderSecond} from "@/client/components/headersecond"
import { ReviewSelection } from "@/client/components/reviewSelection";




export default function Review() {
  return (
    <main>
      <HeaderSecond />
      <div className="app-content">
       <ReviewSelection />
       <EditSaveBtns />
      </div>
    </main>
  );
}
