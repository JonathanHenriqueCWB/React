import React from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

class Calculator extends React.Component {
    render() {

        const clearMemori = () => console.log('limpar')
        const setOperation = op => console.log(op)
        const addDigito = digito => console.log(digito)

        return (
            <div className='calculator'>
                <>
                    <Display value='100' />
                </>
                <>
                    <Button label='AC' funcao={clearMemori} triple />
                    <Button label='/' funcao={setOperation} operation />
                    <Button label='7' funcao={addDigito} />
                    <Button label='8' funcao={addDigito} />
                    <Button label='9' funcao={addDigito} />
                    <Button label='*' funcao={setOperation} operation />
                    <Button label='4' funcao={addDigito} />
                    <Button label='5' funcao={addDigito} />
                    <Button label='6' funcao={addDigito} />
                    <Button label='-' funcao={setOperation} operation />
                    <Button label='1' funcao={addDigito} />
                    <Button label='2' funcao={addDigito} />
                    <Button label='3' funcao={addDigito} />
                    <Button label='+' funcao={setOperation} operation />
                    <Button label='0' funcao={addDigito} double/>
                    <Button label='.' funcao={addDigito} />
                    <Button label='=' funcao={setOperation} operation/>
                </>
            </div>
        )
    }
}
export default Calculator

/*  PROPRIEDADES NOS BOTOES

    label: valor a ser mostrado no Componente Display
    funcao: irá passar uma das tres função conforme o btn
    tiple double ou operation: propriedade que será usada para definir estilo btn
*/

/* FUNÇÕES

    clearMemory: limpara o display
    setOperation: passará umas das operações par o display (+ - * /)
    addDigito: passará o valor do label para o display
 */