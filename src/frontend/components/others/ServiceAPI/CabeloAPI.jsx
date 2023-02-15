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

  const arr = post.map((post, index) =>{
    return (
      <tr>
        <td>{post.nome}</td>
        <td>{post.valor}</td>
        <td>{post.tempo}</td>
        <td>{post.img}</td>
      </tr>
    );
  })

  return (
    <div>
      <tr>
        <td>Nome</td>
        <td>Valor</td>
        <td>Tempo</td>
        <td>Imagem</td>
      </tr>
      {arr}
    </div>
  );
}