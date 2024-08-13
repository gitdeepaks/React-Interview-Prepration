import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [{ response, error, isLoading }, dofetch] = useFetch(
    "https://api.github.com/users/deepaksankhyan"
  );

  console.log(response);

  useEffect(() => {
    dofetch({});
  }, [dofetch]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      {response && (
        <div>
          <h1>{response.login}</h1>
          <img src={response.avatar_url} alt="avatar" width="100" />
          <p>ID: {response.id}</p>
          <p>
            URL: <a href={response.html_url}>{response.html_url}</a>
          </p>
          <p>Public Repos: {response.public_repos}</p>
          <p>Followers: {response.followers}</p>
          <p>Following: {response.following}</p>
          <p>
            Created At: {new Date(response.created_at).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
