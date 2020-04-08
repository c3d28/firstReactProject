import React,{Component}  from "react";

class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            count:0
        }
    }

    incrementCount() {
        this.setState({
            count : this.state.count + 1
        });
    }

    removeCount() {
        this.setState({
            count : this.state.count - 1
        });
    }


    render(){
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                <p> Mon Compteur : {this.state.count}</p>
                <button onClick={() => this.incrementCount()}>Ajouter</button>
                <button onClick={ this.removeCount.bind(this)}>Retirer</button>

            </div>
        );
    }
}

export default Welcome;