// function fib
let num;
num = parseInt(prompt("write number for calculation"));  
 fib = (num) => {
    if (num <= 1) {
        return num
    }
    else {
        return fib(num - 1) + fib(num-2)
    }
};

alert(fib(num));