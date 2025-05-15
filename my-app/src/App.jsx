import React from "react";
import x52351 from "./assets/5235.jpg";
import x58274 from "./assets/58274.jpg";
import grayLogo from "./assets/gray-logo.png";
import background from "./assets/6025905.jpg";
import "./App.css";

export default function Desktop() {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <img className="element" alt="Element" src={x52351} />
          <img className="img" alt="Element" src={x58274} />
          <p className="text-wrapper">
            eBarangay is a digital platform that simplifies interactions between
            local governments and residents. With a goal to enhance community
            engagement, this platform integrates essential barangay services
            into a single online system, reducing the time and effort required
            for residents to access services and stay informed.
          </p>
          <div className="text-wrapper-2">About eBarangay</div>
          <p className="a-partner-for-the">
            <span className="span">
              A Partner for the People
              <br />
            </span>
            <span className="text-wrapper-3">
              <br />
              At the heart of every government initiative is the people's
              welfare. With eBarangay, services are aligned with the essential
              needs of the community, offering avenues for residents to voice
              their concerns and engage with local governance. This platform
              promotes inclusivity and empowerment, ensuring that no resident is
              left behind.
              <br />
            </span>
            <span className="text-wrapper-4">
              <br />
              <br />
            </span>
          </p>
          <p className="a-one-stop-hub-for">
            <span className="span">
              A One-Stop Hub for Community Services
              <br />
            </span>
            <span className="text-wrapper-4">
              <br />
            </span>
            <span className="text-wrapper-3">
              Through eBarangay, residents can easily access a range of barangay
              services and information from a single digital platform. By
              integrating services from local government units (LGUs) and
              barangay offices, the platform exemplifies the shift towards a
              fully digitized government system, enhancing accessibility and
              convenience for every resident.
              <br />
            </span>
            <span className="text-wrapper-4">
              <br />
            </span>
          </p>
        </div>
        <div
          className="overlap-group"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="navbar">
            <img className="gray-logo" alt="Gray logo" src={grayLogo} />
            <div className="frame">
              <div className="text-wrapper-5">Home</div>
              <div className="text-wrapper-5">About</div>
              <div className="text-wrapper-5">Features</div>
            </div>
          </div>
          <div className="overlap-2">
            <p className="welcome-to-ebarangay">
              <span className="text-wrapper-6">Welcome to eBarangay!</span>
              <span className="text-wrapper-7"> <br /></span>
              <span className="text-wrapper-3">
                <br />
                Access government services quickly and easily with just a few
                clicks, making your experience more convenient and connected.
              </span>
            </p>
            <div className="frame-2">
              <div className="div-wrapper">
                <div className="text-wrapper-8">Login</div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-8">Signup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
