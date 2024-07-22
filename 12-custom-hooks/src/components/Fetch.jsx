import { useFetch } from "../hooks/useFetch";

export default function Fetch() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    { method: "GET" }
  );

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Post List</h2>
      {data &&
        data.map((post) => (
          <ul key={post.id}>
            <li>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          </ul>
        ))}
    </div>
  );
}
