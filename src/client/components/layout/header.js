import React from "react";
import style from "@/styles/layout/header.module.scss";
// import style from "@/styles/global/";


export const Header = () => {
  return (

    <header className={style.header}>
      <div className={`${style.header_top} container d-flex justify-content-center align-items-center px-2`}>
        <div className="site-logo-container p-1">
          <img
            className="site-logo"
            src="./Assets/Images/dream-logo-blue.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={`${style.header_bottom} container p-0 d-flex`}>
        <div className="col header-tab-new active d-flex justify-content-center align-items-center">
          Cricket
        </div>
        <div className="col header-tab-new d-flex justify-content-center align-items-center">
          Football
        </div>
        <div className="col header-tab-new d-flex justify-content-center align-items-center">
          Kabaddi
        </div>
      </div>
    </header>




    
    // <div className={style.header}>
    //   <div className={style.inner}> Header</div>
    // </div>
  );
};
