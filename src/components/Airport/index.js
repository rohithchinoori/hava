import "./index.css";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Popup from "reactjs-popup";

const Airport = () => {
  const location = useLocation();
  const { airportName } = location.state || {};
  const overlayStyles = {
    background: "rgba(0, 0, 0, 0.5)", // Adjust the opacity here
  };

  return (
    <>
      <Navbar />
      <div className="home-bg">
        <Sidebar />
        <div className="right">
          <h1 className="airport-path">
            Airport{" "}
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.98195 4.406L5.98095 4.405L2.35995 0.783C2.20241 0.625461 1.98874 0.536957 1.76595 0.536957C1.54315 0.536957 1.32948 0.625461 1.17195 0.783C1.01441 0.940538 0.925903 1.15421 0.925903 1.377C0.925903 1.59979 1.01441 1.81346 1.17195 1.971L4.20195 5L1.17195 8.03C1.02486 8.18954 0.945221 8.39982 0.949718 8.61678C0.954215 8.83373 1.0425 9.04052 1.19607 9.19384C1.34964 9.34715 1.55658 9.43509 1.77355 9.43922C1.99051 9.44335 2.20065 9.36336 2.35995 9.216L5.98095 5.594H5.98195C6.06026 5.51596 6.12239 5.42323 6.16479 5.32113C6.20718 5.21902 6.22901 5.10956 6.22901 4.999C6.22901 4.88844 6.20718 4.77898 6.16479 4.67687C6.12239 4.57477 6.06026 4.48204 5.98195 4.404V4.406Z"
                fill="#464646"
              />
            </svg>
            <span>{airportName}</span>
          </h1>
          <h1 className="airport-head">{airportName}</h1>
          <ul className="tabs">
            <li>Terminals</li>
            <li>Transport</li>
            <li>Contact details</li>
          </ul>
          <hr />
          <div className="card-cont">
            <div className="card">
              <img
                src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                alt="img"
                className="terminal-img"
              />
              <div>
                <p>
                  Terminal 1{" "}
                  <svg
                    width="16"
                    height="4"
                    viewBox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.89998 3.79999C8.83886 3.79999 9.59998 3.03888 9.59998 2.09999C9.59998 1.16111 8.83886 0.399994 7.89998 0.399994C6.96109 0.399994 6.19998 1.16111 6.19998 2.09999C6.19998 3.03888 6.96109 3.79999 7.89998 3.79999Z"
                      fill="#464646"
                    />
                    <path
                      d="M13.75 3.79999C14.6889 3.79999 15.45 3.03888 15.45 2.09999C15.45 1.16111 14.6889 0.399994 13.75 0.399994C12.8111 0.399994 12.05 1.16111 12.05 2.09999C12.05 3.03888 12.8111 3.79999 13.75 3.79999Z"
                      fill="#464646"
                    />
                    <path
                      d="M2.04998 3.79999C2.98886 3.79999 3.74998 3.03888 3.74998 2.09999C3.74998 1.16111 2.98886 0.399994 2.04998 0.399994C1.11109 0.399994 0.349976 1.16111 0.349976 2.09999C0.349976 3.03888 1.11109 3.79999 2.04998 3.79999Z"
                      fill="#464646"
                    />
                  </svg>
                </p>
                <p>Optional metadata should be two lines.</p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                alt="img"
                className="terminal-img"
              />
              <div>
                <p>
                  Terminal 2{" "}
                  <svg
                    width="16"
                    height="4"
                    viewBox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.89998 3.79999C8.83886 3.79999 9.59998 3.03888 9.59998 2.09999C9.59998 1.16111 8.83886 0.399994 7.89998 0.399994C6.96109 0.399994 6.19998 1.16111 6.19998 2.09999C6.19998 3.03888 6.96109 3.79999 7.89998 3.79999Z"
                      fill="#464646"
                    />
                    <path
                      d="M13.75 3.79999C14.6889 3.79999 15.45 3.03888 15.45 2.09999C15.45 1.16111 14.6889 0.399994 13.75 0.399994C12.8111 0.399994 12.05 1.16111 12.05 2.09999C12.05 3.03888 12.8111 3.79999 13.75 3.79999Z"
                      fill="#464646"
                    />
                    <path
                      d="M2.04998 3.79999C2.98886 3.79999 3.74998 3.03888 3.74998 2.09999C3.74998 1.16111 2.98886 0.399994 2.04998 0.399994C1.11109 0.399994 0.349976 1.16111 0.349976 2.09999C0.349976 3.03888 1.11109 3.79999 2.04998 3.79999Z"
                      fill="#464646"
                    />
                  </svg>
                </p>
                <p>Optional metadata should be two lines.</p>
              </div>
            </div>
            <Popup
              modal
              trigger={<button className="add-ter">+Add terminal</button>}
              overlayStyle={overlayStyles}
            >
              <div className="card-but">
                <input
                  type="text"
                  placeholder="Terminal Title"
                  className="title"
                />
                <hr />
                <input type="text" placeholder="description" className="desc" />
                <div className="but-cont">
                  <button>Upload image</button>
                  <button>cancel</button>
                  <button>Submit</button>
                </div>
              </div>
            </Popup>
          </div>
          <h1 className="airport-path">Services</h1>
          <p>Lost & found</p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Airport;
