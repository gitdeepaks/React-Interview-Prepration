import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostComments() {
  const [comment, setcomment] = useState([]);
  const [post, setpost] = useState(null);
  const [loading, setloading] = useState(false);

  const { postId } = useParams();

  const navigate = useNavigate();

  async function fetchData(params) {
    setloading(true);
    try {
      const [postResponse, commentResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        ),
      ]);

      setpost(postResponse.data);
      setcomment(commentResponse.data);
    } catch (error) {
      console.error("Error fetching", error.message);
    }
    setloading(false);
  }
  useEffect(function () {
    fetchData();
  }, []);

  return (
    <div className="">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {post && (
            <div className="">
              <h2>{post.title}</h2>
              <p>{post.bosy}</p>
            </div>
          )}

          <h2>Comment</h2>

          <ul>
            {comment.map((cmnt) => (
              <li key={cmnt.id}>
                <strong>{cmnt.name}</strong>:{cmnt.body}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
