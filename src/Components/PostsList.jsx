import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import EmptyMessage from "./EmptyMessage";

const PostsList = () => {
  const { posts, addInitialPosts } = useContext(PostListContext);

  const handleGetPostClick = () => {
    const data = fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };
  if (posts.length == 0) {
    return <EmptyMessage onFetchClick={handleGetPostClick}></EmptyMessage>;
  } else {
    return (
      <div className="container d-flex flex-wrap justify-content-center">
        {posts.map((item) => (
          <Post key={item.id} postItem={item}></Post>
        ))}
      </div>
    );
  }
};

export default PostsList;
