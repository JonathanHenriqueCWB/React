import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const noticias = [
  { id: 0, titulo: 'Covid 19', texto: 'O covide 19 no brasil', autor: 'José Carlos' },
  { id: 1, titulo: 'Bolsa de Valores', texto: 'Queda na bolsa', autor: 'Bianca Nunes' },
  { id: 2, titulo: 'Politica', texto: 'Votação na camera', autor: 'Ricardo Pereira' },
]
const texto = 'Somente outra propriedade!!!'

ReactDOM.render(
  <React.StrictMode>
    <App n={noticias} texto={texto} />
  </React.StrictMode>,
  document.getElementById('root')
);