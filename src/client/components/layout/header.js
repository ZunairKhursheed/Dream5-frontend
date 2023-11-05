import style from "@/styles/layout/header.module.scss";

export const Header = ({ setActiveTab, activeTab }) => {
  return (
    <header className="header">
      <div className="header_top container d-flex justify-content-center align-items-center px-2">
        <div className="site-logo-container p-1">
          <img
            className={style.site_logo}
            src="/images/dream-logo-blue.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="header_bottom container p-0 d-flex cursor_pointer">
        <div
          className={`col header_tab_new  d-flex justify-content-center align-items-center ${
            activeTab == "cricket" ? "active" : null
          }`}
          onClick={() => setActiveTab("cricket")}
        >
          Cricket
        </div>
        <div
          className={`col header_tab_new  d-flex justify-content-center align-items-center ${
            activeTab == "football" ? "active" : null
          }`}
          onClick={() => setActiveTab("football")}
        >
          Football
        </div>
        <div
          className={`col header_tab_new  d-flex justify-content-center align-items-center ${
            activeTab == "kabaddi" ? "active" : null
          }`}
          onClick={() => setActiveTab("kabaddi")}
        >
          Kabaddi
        </div>
      </div>
    </header>
  );
};
