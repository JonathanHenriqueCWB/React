import React from 'react'

export const data = {
    number: 123,
    text: 'Context API..'
}

// Criando e exportando um contexto a partir dos dados acima
const DataContext = React.createContext(data)
export default DataContext