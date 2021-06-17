import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

const Settings = () => {
  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://thumbs.dreamstime.com/z/beautiful-blur-greenery-leaf-forest-nature-background-ideas-concepts-134024471.jpg"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="John123" />
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Settings;
