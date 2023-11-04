import { Inter } from "next/font/google";
// import "@/styles/layout.css";
import "@/styles/global.scss";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        {children}
        <div class="container">
          <footer class="footer container p-0 d-flex flex-column">
                <div class="footer-top">
          <div class="row d-flex">
            <div
              class="footer-element col-3 d-flex flex-column align-items-center justify-content-center"
            >
              <a
                href=""
                class="d-flex flex-column align-items-center footer-link"
              >
                <img
                  src="../Icons/Home 1.png"
                  class="footer-btn-icon"
                  alt=""
                />
                <p class="footer-btn-text">Home</p>
              </a>
            </div>
            <div
              class="footer-element col-3 d-flex flex-column align-items-center justify-content-center"
            >
              <a
                href=""
                class="d-flex flex-column align-items-center footer-link"
              >
                <img
                  src="../Icons/My Matches.png"
                  class="footer-btn-icon-1"
                  alt=""
                />
                <p class="footer-btn-text">My Matches</p>
              </a>
            </div>
            <div
              class="footer-element col-3 d-flex flex-column align-items-center justify-content-center"
            >
              <a
                href=""
                class="d-flex flex-column align-items-center footer-link"
              >
                <img
                  src="../Icons/people.png"
                  class="footer-btn-icon"
                  alt=""
                />
                <p class="footer-btn-text">Refer & Earn</p>
              </a>
            </div>
            <div
              class="footer-element col-3 d-flex flex-column align-items-center justify-content-center"
            >
              <a
                href=""
                class="d-flex flex-column align-items-center footer-link"
              >
                <img
                  src="../Icons/Profile.png"
                  class="footer-btn-icon"
                  alt=""
                />
                <p class="footer-btn-text">Profile</p>
              </a>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="row">
              <div class="copy-right col-12"></div>
            </div>
          </div>
                </div>
              </footer>
        </div>
      </body>
    </html>
  );
}
