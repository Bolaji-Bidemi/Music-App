/* eslint-disable prettier/prettier */
// import { duration } from "@mui/material/styles/createTransitions";
import React from "react";
// import { AiTwotoneHeart } from "react-icons/ai";
import lemonade from "../../assets/new-release/lemonade.png";
import lizzo from "../../assets/new-release/lizzo.png";
import honk from "../../assets/new-release/honk.png";
import lostplanet from "../../assets/new-release/lost planet.png";
import ghetto from "../../assets/new-release/ghettobaby.png";
import Notwaving from "../../assets/new-release/no-waving.png";
import Newrelease from "./Newrelease.module.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import newlem from "../../assets/new-release/newlem.png";
import newBowie from "../../assets/new-release/newBowie.png";
import powerwolf from "../../assets/new-release/powerwolf.png";
import newHook from "../../assets/new-release/newHook.png";
import newFleet from "../../assets/new-release/newFleet.png";
import sunlight from "../../assets/new-release/sunlight.png";
import LoginNavbar from "../../Components/Navbar/LoginNavbar/LoginNavbar";
import Playerbar from "../../Components/Playerbar/Playerbar";
import { Link } from "react-router-dom";

const NewRelease = () => {
  return (
    <React.Fragment>
      <LoginNavbar openModal={undefined} openLoginModal={undefined} />
      <div>
        <div className={Newrelease.title}>
          <div className={Newrelease.playlist}>This month's top releases</div>
          <div className={Newrelease.playlist2}>
            <AiOutlineLeft />
            <AiOutlineRight />
          </div>
        </div>

        <div className={Newrelease.musicContainer}>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={lemonade} alt="lemonade" />
              <div className={Newrelease.description}>Lemonade</div>
              <div className={Newrelease.artists}>Beyonce</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={lizzo} alt="lizzo" />
              <div className={Newrelease.description}>Cuz I luv you</div>
              <div className={Newrelease.artists}>Lizzo</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={honk} alt="honk" />
              <div className={Newrelease.description}>Honk(Deluxe)</div>
              <div className={Newrelease.artists}>The Rolling Stones</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={lostplanet} alt="lostplanet" />
              <div className={Newrelease.description}>Lost Planet</div>
              <div className={Newrelease.artists}>SmokePurpp</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={ghetto} alt="ghetto" />
              <div className={Newrelease.description}>GhettoBaby</div>
              <div className={Newrelease.artists}>Kevin Abstract</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={Notwaving} alt="Notwaving" />
              <div className={Newrelease.description}>
                Not Waving, But Drowning
              </div>
              <div className={Newrelease.artists}> Loyle Carner </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={Newrelease.title2}>
          <div className={Newrelease.playlist}>Rock new release</div>
          <div className={Newrelease.playlist3}>
            <Link to="#">VIEW ALL</Link>
          </div>
        </div>

        <div className={Newrelease.musicContainer}>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={newlem} alt="newlem" />
              <div className={Newrelease.description}>V</div>
              <div className={Newrelease.artists}>Vagabonds</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={powerwolf} alt="powerwolf" />
              <div className={Newrelease.description}>Powerwolf</div>
              <div className={Newrelease.artists}>Metallum Nostrum</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={newBowie} alt="newBowie" />
              <div className={Newrelease.description}>
                Glastonbury 2000(Live)
              </div>
              <div className={Newrelease.artists}>The Rolling Stones</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={newHook} alt="newHook" />
              <div className={Newrelease.description}>Of Death And Sin</div>
              <div className={Newrelease.artists}>Final Breath</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={newFleet} alt="newFleet" />
              <div className={Newrelease.description}>50 Years- Don't Stop</div>
              <div className={Newrelease.artists}>Fleetwood Mac</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={sunlight} alt="Notwaving" />
              <div className={Newrelease.description}>Sunlight Tonight</div>
              <div className={Newrelease.artists}>Parker Gispert</div>
            </div>
          </div>
        </div>
      </div>
      <Playerbar />
    </React.Fragment>
  );
};

export default NewRelease;
