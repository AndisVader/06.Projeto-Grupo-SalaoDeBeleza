import axios from "axios";
import React from "react";
import './CabeloAPI.css'

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
      <section className="cards">
        <div className="card">
          <h2 className="nome">{post.nome}</h2>
          <p className="valor">{post.valor}</p>
          <span className="tempo">{post.tempo}</span>
          <div>
            <img src={post.img} />
          </div>
        </div>
      </section>
    );
  })

  return (
    <section className="cards">
      {arr}
    </section>
  );
}