export function submitText(text) {
    return {
        type: "SUBMIT",
        text: text,
        number: text.length
    };
}

export function showText(text) {
    return {
        type: "SHOW"
    };
}

export function hideText(text) {
    return {
        type: "HIDE"
    };
}
