import { reducer } from './reducers'

const initialState = {
    number: 0,
    cart: [],
    products: [],
    user: null
}

export {
    reducer,
    initialState
}


/**
 *  1 - Criar uma pasta chamada store
 *  2 - Criar um arquivo  Config ou index.js dentro da pasta
 *  3 - Criar o initialState dentro do arquivo
 *  4 - Exportar o initialState
 *  5 - Criar a função reducer dentro do arquivo
 *  6 - Exportar a função
 *  7 - Importar o arquivo criado Config ou index.js
 *  8 - Criar a pasta das actions dentro da pasta store
 *  9 - Criar um arquivo.js com uma função para cada atributo do initialState
 *  10  - Exportar as funções
 *
 */
