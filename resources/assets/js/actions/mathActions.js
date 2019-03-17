export function Add(number) {
    return {
        type : 'Add',
        payload : number
    };
}

export function Multiply(number) {
    return {
        type : 'Multiply',
        payload : number
    };
}