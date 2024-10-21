import { useEffect, useState } from "react";

export default function App() {
  
  const [lista,setlista] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
         setlista (dados)  
    }
    buscarUsuario()
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {lista.map(produto =>
        <li key={produto.id}>

        </li>
          )}
      </ul>
    </>
  );
}
