export default props => {

    // Pegando componente filho (Else)
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if (props.teste) {
        return ifChildren
    } else if (elseChild) {
        return elseChild
    } else {
        return false
    }
}

export const Else = props => props.children