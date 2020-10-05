// Add your functions here
function map(src, cb) {
    let result = []

    for (let i = 0; i < src.length; i++) {
        let element = src[i]
        result.push(cb(element))
    }

    return result;
}

function reduce(src, cb, starting) {
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1

    for (; i < src.length; i++) {
        r = cb(src[i], r)
    }

    return r;
}