import React from "react";

class HeaderClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }
    handleOnchange = (e) =>{
        this.setState({
            inputText: e.target.value,
        })
        return this.props.onText(this.state.inputText);
    }
    render() {
        return <header>
            <div className="logo">Logo</div>
            <input  onChange={(e) => this.handleOnchange(e)}/>
        </header>
    }
}
export default HeaderClass;
