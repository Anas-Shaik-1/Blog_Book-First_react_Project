import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import EmptyMessage from "./EmptyMessage";

const PostsList = () => {
  const { posts } = useContext(PostListContext);

  if (posts.length == 0) {
    return <EmptyMessage></EmptyMessage>;
  } else {
    return (
      <div className="container d-flex flex-wrap justify-content-center">
        {posts.map((item) => (
          <Post key={item.postId} postItem={item}></Post>
        ))}
      </div>
    );
  }
};

export default PostsList;
