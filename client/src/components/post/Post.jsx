import "./post.css";

const Post = () => {
  return (
    <>
      <div className="post">
        <img
          className="postImg"
          src="https://cdn.statically.io/img/img.freepik.com/free-photo/blurred-tropical-forest-background_23-2147904702.jpg?size=626&ext=jpg"
          alt="post"
        ></img>
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">This is Post Title</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>
    </>
  );
};

export default Post;
