import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://i.pinimg.com/originals/a6/5f/fe/a65ffebf40ed3a3f47074842436454ce.jpg"
          alt=""
        ></img>
      </div>
    </>
  );
};

export default Header;
