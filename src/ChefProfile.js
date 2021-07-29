import React from "react";
import chef1 from "./img/chef1.jpg";
import chef2 from "./img/chef2.jpg";
import chef3 from "./img/chef3.jpg";
import chefprofilebg from "./img/chefprofilebg.jpg";
import { useParams } from "react-router";
import "./Sass/ChefProfile.scss";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { ParallaxProvider } from "react-scroll-parallax";
import PagesHero from "./PagesHero";
import StarIcon from "@material-ui/icons/Star";

function ChefProfile(props) {
  const history = useHistory();
  const { handle } = useParams();

  const chefDetails = [
    {
      chefname: "Ricardo Ramiro",
      chefimg: chef1,
      chefID: "1",
    },
    {
      chefname: "Marco Spezzani",
      chefimg: chef2,
      chefID: "2",
    },
    {
      chefname: "Maria Roletto",
      chefimg: chef3,
      chefID: "3",
    },
  ];
  var chefID = new URLSearchParams(window.location.search).get("ID");
  const chefItem = chefDetails.find((chef) => chef.chefID == chefID);

  return (
    <div className="chef-profile">
      <Fade duration="1210">
        <PagesHero phimg={chefprofilebg} phheader="Chefs" />
        <div className="chef-profile-flex">
          <div className="chef-left">
            <div className="chef-top">
              <img src={chefItem.chefimg} alt="" />
            </div>
            <div className="chef-description">
              <h2>{chefItem.chefname}</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                ultrices neque ornare aenean. Interdum consectetur libero id
                faucibus nisl tincidunt eget nullam non. Ut placerat orci nulla
                pellentesque. Id semper risus in hendrerit gravida rutrum
                quisque non. Netus et malesuada fames ac. Ultricies mi quis
                hendrerit dolor magna. Morbi enim nunc faucibus a pellentesque
                sit. Ultrices vitae auctor eu augue ut lectus arcu bibendum at.
                Penatibus et magnis dis parturient montes. Pellentesque
                adipiscing commodo elit at imperdiet dui accumsan sit amet.
                Pellentesque id nibh tortor id aliquet lectus proin nibh. Mus
                mauris vitae ultricies leo integer malesuada. At volutpat diam
                ut venenatis tellus in metus vulputate eu. Morbi tristique
                senectus et netus. Pharetra magna ac placerat vestibulum lectus
                mauris ultrices. Nam at lectus urna duis convallis convallis.
                Elit scelerisque mauris pellentesque pulvinar pellentesque
                habitant.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                ultrices neque ornare aenean. Interdum consectetur libero id
                faucibus nisl tincidunt eget nullam non. Ut placerat orci nulla
                pellentesque. Id semper risus in hendrerit gravida rutrum
                quisque non. Netus et malesuada fames ac. Ultricies mi quis
                hendrerit dolor magna. Morbi enim nunc faucibus a pellentesque
                sit. Ultrices vitae auctor eu augue ut lectus arcu bibendum at.{" "}
              </p>
            </div>
            <div className="chef-review">
              <form>
                <h3>Leave a Comment</h3>
                <div className="form-group-flex">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      aria-label="name"
                      aria-required="true"
                      placeholder="Name"
                      className="ip1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      aria-label="phone"
                      aria-required="true"
                      placeholder="Phone"
                      className="ip2"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    type="text"
                    name="message"
                    aria-label="message"
                    aria-required="true"
                    placeholder="Message"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="chef-sidebar">
            <div className="chef-sidebar-item mr-10">
              <div className="chef-sidebar-profile">
                <a href="/ChefProfile?ID=1">
                  <img src={chef1} alt="chef" />
                  
                </a>  
                <div className="stars">

                <p>Ricardo Ramiro</p>
                <div className="star-icons">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                </div>
              </div>
            </div>
            <div className="chef-sidebar-item ml-10">
              <div className="chef-sidebar-profile">
                <a href="/ChefProfile?ID=2">
                  <img src={chef2} alt="chef" />
                </a>
                <div className="stars">
                <p>Marco Spezzani</p>
                <div className="star-icons">
                <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  </div>
                  </div>
              </div>
            </div>
            <div className="chef-sidebar-item">
              <div className="chef-sidebar-profile">
                <a href="/ChefProfile?ID=3">
                  <img src={chef3} alt="chef" />
                </a>
                <div className="stars">
                <p>Maria Roletto</p>
                <div className="star-icons">
                <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ChefProfile;
