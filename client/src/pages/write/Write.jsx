import "./write.css";

const Write = () => {
  return (
    <>
      <div className="write">
        <img
          className="writeImg"
          src="https://thumbs.dreamstime.com/z/beautiful-blur-greenery-leaf-forest-nature-background-ideas-concepts-134024471.jpg"
          alt="writeimg"
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Write Your Blog..."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>

          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
};

export default Write;
