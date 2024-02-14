import React from "react";
import './About.css'
import teamMember1 from '../../assets/3D_Image/Member1.jpg'
import teamMember2 from '../../assets/3D_Image/Member2.jpg'
import teamMember3 from '../../assets/3D_Image/Member3.jpg'
import teamMember4 from '../../assets/3D_Image/Member4.jpg'
import teamMember5 from '../../assets/3D_Image/Member2.jpg'
function OurTeam() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] pt-44">
        <div className="text-6xl">Our team</div>
        <div className="w-[80%]">
          <div class="container">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-image">
                  <img
                    src={teamMember1}
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>
                    John Smith
                    <br />
                    <span class="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card">
                <div class="card-image">
                  <img
                    src={teamMember2}
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>
                    John Smith
                    <br />
                    <span class="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card">
                <div class="card-image">
                  <img
                    src={teamMember3}
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>
                    John Smith
                    <br />
                    <span class="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card">
                <div class="card-image">
                  <img
                    src={teamMember4}
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>
                    John Smith
                    <br />
                    <span class="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card">
                <div class="card-image">
                  <img
                    src={teamMember2}
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>
                    John Smith
                    <br />
                    <span class="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card">
                <div class="card-image">
                  <img
                    src={teamMember3}
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>
                    John Smith
                    <br />
                    <span class="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* <div class="card-wrapper">
              <div class="card">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>
                    John Smith
                    <br />
                    <span class="job-title">UI Developer</span>
                  </h2>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
