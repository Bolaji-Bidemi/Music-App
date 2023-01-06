/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import LoginNavbar from "../../Components/Navbar/LoginNavbar/LoginNavbar";
import BrowseDetailcss from "../BrowseDetails/BrowseDetails.module.css";
import Artists from "../../Components/BrowseDetails/Artists";
import Playlists from "../../Components/BrowseDetails/Playlists";
import AllMusic from "../../Components/AllMusicUser/AllUserMusic";
// import Artist from "../../Components/Artists/Artist";
// import styles from "./UserDashBoard.module.css";
// import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Newrelease from "../new-release/Newrelease.module.css";
import lp5 from "../../assets/new-release/lp5.png";
import numb from "../../assets/new-release/numb.png";
import honk from "../../assets/new-release/honk.png";
import drip from "../../assets/new-release/drip.png";
import ghetto from "../../assets/new-release/ghettobaby.png";
import Notwaving from "../../assets/new-release/no-waving.png";
import DashboardCss from "./UserDashboard.module.css";
import { Link } from "react-router-dom";
import Genres from "../../Components/Browse/Genres";
import Podcast from "../../Components/Browse/Podcast";
import RecentlyPlayed from "../../Components/recentlyPlayed/recentlyPlayed";
import FlowSection from "../../Components/flowsection/FlowSection";
import PlayerBar from "../../Components/Playerbar/Playerbar";
// import BrowseDetails from "../../Components/BrowseDetails/styles/BrowseDetails.module.css";
// import { Dashboard } from "@mui/icons-material";
// import BrowseCss from "../Browse/Browse.module.css";

const UserDashBoard = () => {
  const [activeLoad, setActiveLoad] = useState("forward");
  const handleLoadData = (e: React.SetStateAction<string>) => {
    console.log(e);
    setActiveLoad(e);
  };

  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <LoginNavbar openModal={undefined} openLoginModal={undefined} />
        <FlowSection />
      </div>

      {/* Recently played section */}

      <RecentlyPlayed />

      {/* Genres section */}

      <div className={BrowseDetailcss.container}>
        <div id={"PLAYLISTS"} className={BrowseDetailcss.header}>
          <span className={BrowseDetailcss.header}>Genres</span>
          <Link to={"/browse"}>
            {" "}
            <span className={BrowseDetailcss.Browseviewall}>VIEW ALL</span>
          </Link>
        </div>
        <Genres />
      </div>

      {/* ALl music section */}

      <div className={BrowseDetailcss.container}>
        <div id={"PLAYLISTS"} className={BrowseDetailcss.header}>
          <span className={BrowseDetailcss.header}>All Music</span>
          <Link to={"/allmusic"}>
            {" "}
            <span className={BrowseDetailcss.Browseviewall}>VIEW ALL</span>
          </Link>
        </div>
        <AllMusic />
      </div>

      {/* Podcast Section   */}

      <div className={BrowseDetailcss.container}>
        <div className={BrowseDetailcss.header}>
          <div className={BrowseDetailcss.header}>Podcasts</div>
          <div className={BrowseDetailcss.Browseviewall}>
            <Link to="/podcast">VIEW ALL</Link>
          </div>
        </div>
        <p className={DashboardCss.musicInfoDescription}>
          Explore by categories and popularity
        </p>
        <div className={BrowseDetailcss.container}>
          <Link to={"/podcast"}>
            <Podcast />
          </Link>
        </div>
      </div>

      {/* Playlist Section */}

      <div className={BrowseDetailcss.container}>
        <div id={"PLAYLISTS"} className={BrowseDetailcss.header}>
          <span className={BrowseDetailcss.header}>Playlist picks</span>
          <Link to={"/playlist"}>
            {" "}
            <span className={BrowseDetailcss.Browseviewall}>VIEW ALL</span>
          </Link>
        </div>
        <p className={DashboardCss.musicInfoDescription}>
          ESelected for you based on your recent activity
        </p>

        <Playlists />
      </div>

      <div className={BrowseDetailcss.container}>
        <div className={BrowseDetailcss.header}>
          <div className={BrowseDetailcss.header}>New releases for you</div>
          <div className={BrowseDetailcss.Browseviewall}>
            <Link to="/new-release">VIEW ALL</Link>
          </div>
        </div>

        <div className={Newrelease.musicContainer}>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={lp5} alt="lp5" />
              <div className={Newrelease.description}>LP5</div>
              <div className={Newrelease.artists}>Apparat</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={numb} alt="numb" />
              <div className={Newrelease.description}>Numb Numb Love</div>
              <div className={Newrelease.artists}>SchoolBoy Q</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={drip} alt="drip" />
              <div className={Newrelease.description}>Drip Or Down 2</div>
              <div className={Newrelease.artists}>Gunna</div>
            </div>
          </div>
          <div className={Newrelease.music}>
            <div className={Newrelease.musicImg}>
              <img src={honk} alt="honk" />
              <div className={Newrelease.description}> Honk(Deluxe)</div>
              <div className={Newrelease.artists}> The Rolling Stones</div>
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

      <div className={BrowseDetailcss.container}>
        <div id={"ARTISTS"} className={BrowseDetailcss.header}>
          <span className={BrowseDetailcss.header}>
            You might like these artists
          </span>
          <span className={BrowseDetailcss.Browseviewall}>
            <span
              id={BrowseDetailcss.Browseviewall1}
              onClick={() => handleLoadData("backward")}
              className={
                activeLoad === "backward" && BrowseDetailcss.activeLoad
              }
            >
              &#60;
            </span>
            <span
              id={BrowseDetailcss.Browseviewall1}
              onClick={() => handleLoadData("forward")}
              className={activeLoad === "forward" && BrowseDetailcss.activeLoad}
            >
              &gt;
            </span>
          </span>
          {/* <Link to={"/artist"}>
							{" "}
							<span className={BrowseDetailcss.Browseviewall}>VIEW ALL</span>
						</Link> */}
        </div>
        <Artists />
        {/* <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            padding: "0",
            left: "0",
            zIndex:200000,
            backgroundColor:"red"
          }}
        >
          <PlayerBar />
        </div> */}
      </div>
      <PlayerBar />
    </div>
  );
};

export default UserDashBoard;
