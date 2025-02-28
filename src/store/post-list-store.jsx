import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  posts: [],
  deletePost: () => {},
  addPost: () => {},
  addInitialPosts: () => {},
});

const postsReducer = (current, action) => {
  let newPostList = current;
  if (action.type === "ADD_POST") {
    // userId, id, title, body, tags, reactions
    const userId = action.payload.userId;
    const id = Date.now();
    const title = action.payload.title;
    const body = action.payload.body;
    let tags = action.payload.tags.trim().split(" ");
    const reactions = {
      likes: 0,
      dislikes: 0,
    };

    newPostList = [{ userId, id, title, body, tags, reactions }, ...current];
  } else if (action.type === "DELETE_POST") {
    newPostList = current.filter((item) => action.payload.id !== item.id);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(postsReducer, []);

  const deletePost = (id) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        id,
      },
    };
    dispatchPosts(deletePostAction);
  };

  const addPost = (userId, title, body, tags) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        userId,
        title,
        body,
        tags,
      },
    };
    dispatchPosts(addPostAction);
  };
  const addInitialPosts = (posts) => {
    const addInitialPostsAction = {
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    };
    dispatchPosts(addInitialPostsAction);
  };
  return (
    <PostListContext.Provider
      value={{ posts, deletePost, addPost, addInitialPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
