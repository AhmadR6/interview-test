import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/Button";
import Greetings from "./components/Greetings";
import Posts from "./pages/Posts";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const postElements = posts.map((post) => {
    return <Posts key={post.id} title={post.title} body={post.body} />;
  });

  return (
    <>
      <h2>Level One</h2>
      <Button lable={"button 1"} style={"primary"} text={"button 1"} />
      <Button lable={"button 2"} style={"secondary"} text={"button 2"} />

      <h2>Level two</h2>
      <Greetings />

      <h2>Level there</h2>
      <div className="cardContanier">{postElements}</div>
    </>
  );
}

export default App;
