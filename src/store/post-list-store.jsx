import { createContext, useReducer } from "react";

const DEFAULT_DATA = [
  {
    userId: "user-3",
    postId: "2",
    title: "Card title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, iure?",
    hashTags: ["#hi", "#awsom", "#superb"],
    rections: 12,
  },
  {
    userId: "user-3",
    postId: "3",
    title: "Card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    hashTags: ["#hi", "#awsom", "#superb"],
    rections: 12,
  },
];
export const PostListContext = createContext({
  posts: [],
  deletePost: () => {},
  addPost: () => {},
});

const postsReducer = (current, action) => {
  let newPostList = current;
  if (action.type === "ADD_POST") {
    // userId, postId, title, description, hashTags, reactions
    const userId = action.payload.userId;
    const postId = Date.now();
    const title = action.payload.title;
    const description = action.payload.description;
    const temp = action.payload.hashTags.trim().split(" ");
    let hashTags = temp.map((item) => `#${item}`);
    const reactions = 0;

    newPostList = [
      { userId, postId, title, description, hashTags, reactions },
      ...current,
    ];
  } else if (action.type === "DELETE_POST") {
    newPostList = current.filter(
      (item) => action.payload.postId !== item.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(postsReducer, DEFAULT_DATA);

  const deletePost = (postId) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPosts(deletePostAction);
  };

  const addPost = (userId, title, description, hashTags) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        userId,
        title,
        description,
        hashTags,
      },
    };
    dispatchPosts(addPostAction);
  };

  return (
    <PostListContext.Provider value={{ posts, deletePost, addPost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
