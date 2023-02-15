import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3001/Cabelo";

export default function CabeloAPI() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!"

  const arr = post.map((post, index) => {
    return (
      <div>
        <h2>{post.nome}</h2>
        <p>{post.valor}</p>
        <span>{post.tempo}</span>
        <div>
          <img src={post.img} />
        </div>
      </div>
    );
  })

  return (
    <div>
      {arr}
    </div>
  );
}