import React from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

class Calculator extends React.Component {

    state = { ...initialState }

    render() {

        const clearMemori = () => this.setState({ ...initialState })

        const setOperation = operation => {
            if (this.state.current === 0) {
                this.setState({ operation, current: 1, clearDisplay: true })
            } else {
                const equals = operation === '='
                const currentOperation = this.state.operation

                const values = [...this.state.values]
                try {
                    values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                } catch (e) {
                    values[0] = this.state.values[0]
                }
                values[1] = 0

                this.setState({
                    displayValue: values[0],
                    operation: equals ? null : operation,
                    current: equals ? 0 : 1,
                    clearDisplay: !equals,
                    values
                })
            }
        }

        const addDigito = n => {

            // Verefica se ponto já foi digitado, se sim saira sem fazer nada
            if (n === '.' && this.state.displayValue.includes('.')) {
                return
            }

            // Caso so tenha zero no display limpara para não acumular zeros desnecessarios
            const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
            const currentValue = clearDisplay ? '' : this.state.displayValue
            const displayValue = currentValue + n

            this.setState({ displayValue, clearDisplay: false })

            if (n !== '.') {
                const i = this.state.current
                const newValue = parseFloat(displayValue)
                const values = [...this.state.values]
                values[i] = newValue
                this.setState({ values })

                console.log(values)

            }

        }

        return (
            <div className='calculator'>
                <>
                    <Display value={this.state.displayValue} />
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
                    <Button label='0' funcao={addDigito} double />
                    <Button label='.' funcao={addDigito} />
                    <Button label='=' funcao={setOperation} operation />
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