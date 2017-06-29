import React, { Component } from "react"
import { connect } from 'react-redux'
import { submitText, showText, hideText } from "../actions/Text"

class testRedux extends Component {
    render() {
        const { flag, text, number } = this.props;
        console.log(this.props.text);
        return (
            <div>
                <div className={(flag ? "" : "hide")}>
                    {this.props.text.text}
                </div>
                <div>
                    <span>{number}</span> 文字
                </div>
                <input type="text" ref="inputText" />
                <button onClick={e => this.submitButtonClicked(e)}>submit</button>
                <button onClick={e => this.showButtonClicked(e)}>show</button>
                <button onClick={e => this.hideButtonClicked(e)}>hide</button>
            </div>
        )
    }

    submitButtonClicked(e) {
        const inputText = this.refs.inputText.value;
        // this.setState({submitText: inputText});
        this.props.submitText(inputText);
    }

    showButtonClicked(e) {
        // dispatch(showText());
        this.props.showText();
    }

    hideButtonClicked(e) {
        // dispatch(hideText());
        this.props.hideText();
    }
}

function mapStateToProps(state) {
    const { flag, text, number } = state;
    return {
        flag,
        text,
        number
    }
}


export default connect(mapStateToProps, {submitText, showText, hideText})(testRedux)
