import { Inter } from "next/font/google";
// import "@/styles/layout.css";
import "@/styles/global.scss";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="container">
          <footer className="footer container p-0 d-flex flex-column">
            <div className="footer-top">
              <div className="row d-flex">
                <div className="footer-element col-3 d-flex flex-column align-items-center justify-content-center">
                  <Link
                    href="/"
                    className="d-flex flex-column align-items-center footer-link"
                  >
                    <img
                      src="/icons/Home 1.png"
                      className="footer-btn-icon"
                      alt=""
                    />
                    <p className="footer-btn-text">Home</p>
                  </Link>
                </div>
                <div className="footer-element col-3 d-flex flex-column align-items-center justify-content-center">
                  <Link
                    href="/questionier"
                    className="d-flex flex-column align-items-center footer-link"
                  >
                    <img
                      src="/icons/My Matches.png"
                      className="footer-btn-icon-1"
                      alt=""
                    />
                    <p className="footer-btn-text">My Matches</p>
                  </Link>
                </div>
                <div className="footer-element col-3 d-flex flex-column align-items-center justify-content-center">
                  <Link
                    href="/review"
                    className="d-flex flex-column align-items-center footer-link"
                  >
                    <img
                      src="/icons/people.png"
                      className="footer-btn-icon"
                      alt=""
                    />
                    <p className="footer-btn-text">Refer & Earn</p>
                  </Link>
                </div>
                <div className="footer-element col-3 d-flex flex-column align-items-center justify-content-center">
                  <Link
                    href="/results"
                    className="d-flex flex-column align-items-center footer-link"
                  >
                    <img
                      src="/icons/Profile.png"
                      className="footer-btn-icon"
                      alt=""
                    />
                    <p className="footer-btn-text">Profile</p>
                  </Link>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row">
                  <div className="copy-right col-12"></div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
