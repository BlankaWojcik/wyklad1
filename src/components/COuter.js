import React, { Component } from 'react'
import CInner from './CInner'

export default class COuter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            st: "Początek"
        }
        console.log('COuter - konstruktor');
    }
    static getDerivedStateFromProps(props, state){
        console.log("COuter - getDerivedStateFromProps()")
        return null
    }
    componentDidMount(){
        console.log("COuter - componentDidMount()")
    }
    render() {
        console.log("COuter - render()")
        return (
            <div>
                <h2>Komponent zewnętrzny</h2>
                <button onClick={this.stateChange}>Zmiana stanu</button>
                <CInner/>
            </div>
        )
    }
    stateChange = () => {
        this.setState({st:"Klik"})
    }



}

