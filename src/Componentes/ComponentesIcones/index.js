import React, { Component } from "react";
import styles from "./styles.module.css"

class Titulo extends Component {
  render() {
    return (
        <h1 className={styles.titulo}>{this.props.text}
        </h1>
    );
  }
}

class BotaoClicado extends Component {
  render() {
    return (
        <button 
        className={styles.botao} 
        onClick={this.props.onClick} 
        //disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

class Botao extends Component {
  render() {
    return (
        <button 
        className={styles.botao} 
        onClick={this.props.onClick} 
      >
        {this.props.text}
      </button>
    );
  }
}


class CaixaTexto extends Component {
  render() {
    return (
      <input
        className={styles.caixaTexto}
        placeholder={this.props.text}
      />
    );
  }
}

export { Titulo, Botao, BotaoClicado, CaixaTexto };
