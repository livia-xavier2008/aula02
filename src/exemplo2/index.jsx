import { useEffect, useState } from "react";

export default function App() {
  
  const [lista,setlista] = useState([]);

  useEffect(() => { 
    const buscarUsuario  = async () => {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
    const dados = await resposta.json();
        setFotos(dados);
    }
    buscarUsuario();
  },[]);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {lista.map(produto =>
          <li key={produto.id}>
          </li>
          )}
      </ul>
    </>
  );
 }
