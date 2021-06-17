import { Link } from "react-router-dom";
import "./topbar.css";

const TopBar = () => {
  const user = false;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fbHover fab fa-facebook-square"></i>
          <i className="topIcon instaHover fab fa-instagram-square"></i>
          <i className="topIcon twitHover fab fa-twitter-square"></i>
          <i className="topIcon youHover fab fa-youtube-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem">{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img
              className="topImg"
              src="https://img.pngio.com/boy-light-skin-tone-icon-noto-emoji-people-faces-iconset-google-face-boy-png-1024_1024.png"
              alt="Profile Pic"
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link loginHover" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link registerHover" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  );
};

export default TopBar;
