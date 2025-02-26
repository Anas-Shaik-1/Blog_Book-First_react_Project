import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AddPost from "./Components/AddPost";
import PostsList from "./Components/PostsList";
import PostListProvider from "./store/post-list-store";

const App = () => {
  // const [selectedTab, setSelectedTab] = useState("ADD_POST");
  const [selectedTab, setSelectedTab] = useState("HOME");

  return (
    <>
      <PostListProvider>
        <Header
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Header>

        <main className="mt-5 pt-5">
          {selectedTab === "HOME" && (
            <PostsList setSelectedTab={setSelectedTab}></PostsList>
          )}
          {selectedTab === "ADD_POST" && <AddPost></AddPost>}
        </main>

        <Footer></Footer>
      </PostListProvider>
    </>
  );
};

export default App;
