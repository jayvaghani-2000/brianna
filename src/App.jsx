import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";


function App() {
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  console.log("### ==>", city);

  // Fetch the user's location
  useEffect(() => {
    const apiKey = "2c484445662ebaba8410f4ce3ee9cfad0557e2eead9fe9e4f6a2e3e0";

    fetch(`https://api.ipdata.co?api-key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        let city = data.city;

        setRegion(data.country_name); // Assumes regionNames is defined and imported
        setCity(city);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="landing-container">
      {" "}
      {/* Image Background */}
      <img
        src="https://i.ibb.co/QmDZgXX/image-2024-10-24-T013201-775.jpg"
        alt="Background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="container">
        <a className="header-logo" href="https://onlyfans.com/lanahixx">
          <div className="onlyfans"> </div>{" "}
        </a>{" "}
        <img
          src="https://i.ibb.co/gP66yVt/Foto-10-10-24-12-12-41-a-m-modified.png"
          alt="Header Image"
          className="header-image"
        />
        <div className="textContainer">
          <section>
            <div className="username">
              {" "}
              <strong> Lana💘 </strong>
            </div>
            <div className="useraccountname"> @lanahixx </div>
            <div id="user-status" className="user-status">
              <div className="status"> </div>{" "}
              <div id="available">
                {" "}
                <strong> Available now </strong>
              </div>
              <div className="separator"> </div> <div className="clock"> </div>{" "}
              <div className="respond-time">
                {" "}
                <strong> Responds in 2 minutes </strong>
              </div>
            </div>{" "}
          </section>{" "}
        </div>
        <div className="textContainer">
          <div className="location"> </div>{" "}
          <span id="location-name">
            <strong> {city ? `${city}, ${region}` : "<3"} </strong>
          </span>
        </div>
        <div className="textContainer2">
          <div className="time-in-current-location">
            <strong>
              {" "}
              My name is Lana.I love to travel the world i&apos;m looking for
              content partners in {city || "your city "}.❤️{" "}
            </strong>{" "}
          </div>{" "}
        </div>
        <div className="textContainer3">
          <a href="https://onlyfans.com/lanahixx" id="customButton">
            <div className="onlyfans"> </div>
            Message Me Here{" "}
          </a>{" "}
        </div>
        <Analytics />
      </div>{" "}
    </div>
  );
}

export default App;
