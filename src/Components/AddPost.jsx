import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
const AddPost = () => {
  const userId = useRef();
  const postTitle = useRef();
  const postDescription = useRef();
  const hashTags = useRef();

  const { addPost } = useContext(PostListContext);

  const handlePostButton = (event) => {
    event.preventDefault();
    addPost(
      userId.current.value,
      postTitle.current.value,
      postDescription.current.value,
      hashTags.current.value
    );
    userId.current.value = "";
    postTitle.current.value = "";
    postDescription.current.value = "";
    hashTags.current.value = "";
  };
  return (
    <div className="container w-75">
      <h2 className="text-center p-3">Add New Post</h2>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="user-id" className="form-label">
            User Id
          </label>
          <input
            type="text"
            placeholder="Enter Your Id"
            id="user-id"
            className="form-control col-3"
            ref={userId}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="post-title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            id="post-title"
            className="form-control"
            placeholder="How You Feel"
            ref={postTitle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="post-title" className="form-label">
            Post Description
          </label>
          <textarea
            htmlFor="post-title"
            className="form-control"
            placeholder="Let Everyone Know About It"
            rows={3}
            ref={postDescription}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="hash-tags" className="form-label">
            Use Tags
          </label>
          <input
            type="text"
            id="hash-tags"
            className="form-control"
            placeholder="#Feelings"
            ref={hashTags}
          />
        </div>

        <div className="d-flex">
          <button
            type="submit"
            className="btn btn-primary ms-auto"
            onClick={handlePostButton}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
