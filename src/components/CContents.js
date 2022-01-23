import React, {Component} from 'react';
class CContents extends Component{

    constructor(){
        super()
        this.state= {msg: 'Witaj użytkowniku. Kliknij przycisk, aby poznać wiadomość'}
    }





render(){
    return (
        <div>
            <h1>
                {this.state.msg}
            </h1>
        </div>
    )
}
}

export default CContents;