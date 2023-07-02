
function fizzbuzz(start, end, callback) {
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            callback("FizzBuzz");
        } else if (i % 3 === 0) {
            callback("Fizz");
        } else if (i % 5 === 0) {
            callback("Buzz");
        } else {
            callback(i.toString());
        }
    }
}
