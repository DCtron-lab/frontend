//1
is_array = function(input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//2

array_Clone = function(ar1) {
    return ar1.slice(0);

};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//3
first = function(arr, n) { //function first(input,n)
    if (arr == null)
        return void 0;
    if (n == null)
        return arr[0];
    if (n < 0)
        return [];
    return arr.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

//4
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));