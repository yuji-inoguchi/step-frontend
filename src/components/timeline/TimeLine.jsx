import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./TimeLine.css";
// import { Posts } from "../../dummyData";

export default function TimeLine({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const responce = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/6329d7b8cb54c0fa33ba2db5");
      console.log(responce);
      setPosts(responce.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
