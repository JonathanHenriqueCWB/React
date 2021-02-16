import React, {cloneElement} from 'react'

const Familia = props => {
    return (
        <div>
            {/* {props.children} */}
            { /*React.cloneElement(props.children, props) */}
            {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            }
        </div>
    )
}

export default Familia