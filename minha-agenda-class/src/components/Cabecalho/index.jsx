import React, { Component } from 'react';

class Cabecalho extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">{ this.props.titulo }</h1>
                <p className="lead">
                    { this.props.texto }
                </p>
            </div>
        );
    }
}

export default Cabecalho;