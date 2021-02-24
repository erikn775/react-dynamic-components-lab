import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  renderColorBox(){
    if(this.props.opacity >= .2){
      return <ColorBox opacity={this.props.opacity - .1}/>
    }
  }

  render() {
    return (

      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.renderColorBox()}
      </div>
    )
  }

}

