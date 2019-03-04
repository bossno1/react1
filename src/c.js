import React, {Component} from 'react'
class c extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0};
    }

    onClickButton(){
        this.setState({count: this.state.count + 1});
    }

    render(){
        return (
            <div>
                asdfasdf
            </div>
        )
    };
}

export default c;