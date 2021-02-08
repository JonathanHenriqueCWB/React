import React from 'react'

class Noticia extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.noticia.titulo}</h3>
                <p>{this.props.noticia.texto}</p>
                <small>{this.props.noticia.autor}</small>
            </div>
        )
    }
}

export default Noticia