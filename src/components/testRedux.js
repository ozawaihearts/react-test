import React, { Component } from "react"
import { connect } from 'react-redux'
import { submitText, showText, hideText } from "../actions/index"

class Text extends Component {
    render() {
        // mapStateToProps で紐付けしていることに注意
        const { flag, text, number } = this.props;
        // ココらへんは Redux じゃなくて React (JSX) の書き方
        return (
            <div>
                <div className={(flag ? "" : "hide")}>
                    {text}
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
        // input の値を取得
        // action 内ではできない事をここで処理する
        const inputText = this.refs.inputText.getDOMNode().value;
        dispatch(submitText(inputText));
    }

    showButtonClicked(e) {
        dispatch(showText());
    }

    hideButtonClicked(e) {
        dispatch(hideText());
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

// react-redux にある connect 関数を使うと state と Text の this.props をひも付けできる
// 前述したとおり、 store.subscribe() を呼ばなくても良くなる
export default connect(mapStateToProps)(Text)
