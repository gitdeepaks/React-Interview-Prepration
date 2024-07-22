import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div
      className=""
      style={{
        height: 150,
        border: "1px solid white",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {/* <h2>{post.userId}</h2> */}
      <p>{post.id}</p>
      <h3 className="">{post.title}</h3>
      <h4 className="">{post.body}</h4>
      <Link to={`/posts/${post.id}`}>View Comments</Link>
    </div>
  );
}
