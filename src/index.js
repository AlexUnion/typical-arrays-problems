
exports.min = function min (array = []) {
    return array.length && array.reduce((current, min) => (
        current < min ? current : min
    ));
}

exports.max = function max (array = []) {
    return array.length && array.reduce((current, max) => (
        current > max ? current : max
    ));
}

exports.avg = function avg (array = []) {
    return array.length && array.reduce((current, acum) => (
      acum + current
    )) / array.length;
}
