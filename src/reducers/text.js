// 初期値の設定
const initialState = {
    flag: true,
    text: "入力してください",
    number: 0
}

// action で受け取った値を state に適用して更新する
export default function text(state = initialState, action) {
    const { flag, text, number } = action;
    switch (action.type) {
        case "SUBMIT":
            // 今回ここでは状態の更新だけだが、action の値によってさらに別な値も変えたりするなど
            return Object.assign({}, state, {
                text: text,
                number: number
            });
        case "SHOW":
            return Object.assign({}, state, {
                flag: true
            });
        case "HIDE":
            return Object.assign({}, state, {
                flag: false
            });
        default:
           return state;
    }
}
