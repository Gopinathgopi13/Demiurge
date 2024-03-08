// import React from "react";
import "./About.css";
import teamMember1 from "../../assets/3D_Image/Member1.jpg";
import teamMember2 from "../../assets/3D_Image/Member2.jpg";
import teamMember3 from "../../assets/3D_Image/Member3.jpg";
import teamMember4 from "../../assets/3D_Image/Member4.jpg";
// import teamMember5 from '../../assets/3D_Image/Member2.jpg'
function OurTeam() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 lg:pb-20 pt-20">
        <div className="text-6xl font-bold primaryColor my-10">Our team</div>
        <div className="w-full">
          <div className="container">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={teamMember1} alt="profile one" className="h-full" />
                </div>

                <div className="details">
                  <h2>
                    John Smith
                    <br />
                    <span className="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={teamMember2} alt="profile one" className="h-full" />
                </div>

                <div className="details">
                  <h2>
                    John Smith
                    <br />
                    <span className="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={teamMember3} alt="profile one" className="h-full" />
                </div>

                <div className="details">
                  <h2>
                    John Smith
                    <br />
                    <span className="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={teamMember4} alt="profile one" className="h-full" />
                </div>

                <div className="details">
                  <h2>
                    John Smith
                    <br />
                    <span className="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={teamMember2} alt="profile one" className="h-full" />
                </div>

                <div className="details">
                  <h2>
                    John Smith
                    <br />
                    <span className="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={teamMember3} alt="profile one" className="h-full" />
                </div>

                <div className="details">
                  <h2>
                    John Smith
                    <br />
                    <span className="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img src={teamMember1} alt="profile one" className="h-full" />
                </div>

                <div className="details">
                  <h2>
                    John Smith
                    <br />
                    <span className="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
