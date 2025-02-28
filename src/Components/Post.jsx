import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import HashTags from "./HashTags";

const Post = ({ postItem }) => {
  const { deletePost } = useContext(PostListContext);
  // {
  //   console.log(postItem);
  // }
  return (
    <div className="card m-2 w-75 shadow-sm">
      <div className="card-body">
        <button
          className="btn badge bg-info text-dark position-absolute top-0 end-0"
          onClick={() => deletePost(postItem.id)}
        >
          <i className="bx bx-trash p-0"></i>
        </button>

        <h6 className="card-subtitle mb-2 text-muted">
          User - {postItem.userId}
        </h6>
        <h5 className="card-title">{postItem.title}</h5>
        <p className="card-text">{postItem.body}</p>
        <HashTags tags={postItem.tags}></HashTags>

        <div className="d-flex justify-content-around mt-2">
          <button className="btn btn-secondary rounded-pill fs-6">
            DISLIKE - <span>{postItem.reactions.dislikes}</span>
          </button>
          <button className="btn btn-primary rounded-pill fs-6">
            LIKE - <span>{postItem.reactions.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
