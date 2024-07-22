import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const { data: posts } = useLoaderData();
  // https://jsonplaceholder.typicode.com/posts

  // const [posts, setposts] = useState([]);
  // const [loading, setloading] = useState(false);

  // async function fetchPosts() {
  //   setloading(true);
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setposts(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   setloading(false);
  // }

  // useEffect(function () {
  //   fetchPosts();
  // }, []);
  return (
    <div>
      {posts.map((post) => (
        <div className="" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export async function postLoader() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return res;
}
