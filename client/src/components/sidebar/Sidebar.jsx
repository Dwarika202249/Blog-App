import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://i.pinimg.com/564x/3c/e6/14/3ce614310f81715d261a3fe645703be5.jpg"
            alt="sidebar post"
          ></img>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fbHover fab fa-facebook-square"></i>
            <i className="sidebarIcon instaHover fab fa-instagram-square"></i>
            <i className="sidebarIcon twitHover fab fa-twitter-square"></i>
            <i className="sidebarIcon youHover fab fa-youtube-square"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
