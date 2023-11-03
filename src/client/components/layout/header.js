import React from "react";
import style from "@/styles/layout/header.module.scss";



export const Header = () => {
  return (

    <header className={style.header}>
      <div className={`${style.header_top} container d-flex justify-content-center align-items-center px-2`}>
        <div className="site-logo-container p-1">
          <img
            className={style.site_logo}
            src="../Images/dream-logo-blue.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={`${style.header_bottom} container p-0 d-flex`}>
        <div className={`col ${style.header_tab_new} active d-flex justify-content-center align-items-center`}>
          Cricket
        </div>
        <div className={`col ${style.header_tab_new} d-flex justify-content-center align-items-center`}>
          Football
        </div>
        <div className={`col ${style.header_tab_new} d-flex justify-content-center align-items-center`}>
          Kabaddi
        </div>
      </div>
    </header>




    
    // <div className={style.header}>
    //   <div className={style.inner}> Header</div>
    // </div>
  );
};
