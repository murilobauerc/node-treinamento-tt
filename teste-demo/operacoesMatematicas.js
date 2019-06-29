
const sum = (a,b) => {
    return a + b
}

const sub = (a,b) => {
    return a - b
}

const division = async (a,b,err) => {
    if(b <= 0) console.error(err)
    return a / b
}

const multiply = (a,b) => {
    return a * b
}


module.exports = {
    sum,
    sub,
    division,
    multiply
}