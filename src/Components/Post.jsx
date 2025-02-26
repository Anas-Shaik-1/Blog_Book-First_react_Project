import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ postItem }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card m-2 w-75">
      <div className="card-body">
        <button
          className="btn badge bg-info text-dark position-absolute top-0 end-0"
          onClick={() => deletePost(postItem.postId)}
        >
          <i className="bx bx-trash p-0"></i>
        </button>

        <h5 className="card-title">{postItem.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{postItem.userId}</h6>
        <p className="card-text">{postItem.description}</p>
        <div className="alert alert-light p-1">
          {postItem.hashTags.map((item) => (
            <a
              href="#"
              key={item}
              className="card-link text-danger text-decoration-none"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="text-end">
          <button className="like btn btn-success rounded-pill">
            <i className="bx bx-heart "></i>
            <span>{postItem.rections}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
