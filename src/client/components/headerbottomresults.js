"use client";

export const HeaderBottomResults = ({ activeTab, setActiveTab }) => {
  return (
    <div className="header_bottom hbResult container p-0 d-flex cursor_pointer">
      <div
        className={`col header_tab_new d-flex justify-content-center align-items-center ${
          activeTab == "contests" ? "active" : null
        }`}
        onClick={() => setActiveTab("contests")}
      >
        Contests
      </div>
      <div
        className={`col header_tab_new d-flex justify-content-center align-items-center ${
          activeTab == "leaderboard" ? "active" : null
        }`}
        onClick={() => setActiveTab("leaderboard")}
      >
        Leaderboard
      </div>
      <div
        className={`col header_tab_new d-flex justify-content-center align-items-center ${
          activeTab == "myPicks" ? "active" : null
        }`}
        onClick={() => setActiveTab("myPicks")}
      >
        my Picks
      </div>
    </div>
  );
};
