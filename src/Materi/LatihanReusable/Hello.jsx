import React from "react";


export default class Hello extends React.Component{

    render(){
        return(
            <div>
                <h2>Hello {this.props.name}</h2>
            </div>
        )
    }
}