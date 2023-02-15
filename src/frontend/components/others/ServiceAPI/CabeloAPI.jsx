import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3001/Cabelo";

export default function CabeloAPI() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h2>{post.nome}</h2>
      <p>{post.valor}</p>
      <span>${post.tempo}</span>
    </div>
  );
}