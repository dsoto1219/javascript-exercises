const fibonacci = function(n) {
    let N = parseInt(n);
    if (N < 0) return "OOPS";

    let arr = [0, 1];
    for (let i = 1; i < N; i++) {
        let next = arr[i] + arr[i-1];
        arr.push(next);
    }
    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
