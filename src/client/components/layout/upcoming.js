import style from "@/styles/pages/home.module.scss";
import { VscardNoAdd } from "../cards/vsCardNoAdd";
import { Vscard } from "../cards/vsCards";

export const Upcoming = () => {
  return (
    <>
      <div className="container mt-3">
        <h4 className={style.upcoming_heading}>Upcoming Match</h4>
      </div>
      <Vscard />
      <VscardNoAdd />
      <Vscard />
    </>
  );
};
