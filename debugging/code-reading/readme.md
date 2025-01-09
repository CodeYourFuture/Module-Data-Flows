# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    f1();
8    console.log(x);
```

Explain why line 5 and line 8 output different numbers.

Ans: The variable at line 5  is a globally declared as such it will return 1, while the variable at line 8 is a scope variable since is declared with the scope of the function.
      Therefore, when the function is called it will console the x variable declared in its scope.

## Question 2

Take a look at the following code:

```js
let x = 10;

function f1() {
  console.log(x);
  let y = 20;
}

console.log(f1());
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

Ans: The output will be 10 and undefined. This is because the y variable is declared within the scope of the function and therefore cannot be globally accessed.

## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

Ans: The output will be 9 and {x: 10}; This is due to the difference by which each of the 
variables are passed. The variable x in f1 is passed by value, so the function will not modify the actual value of the variable.
While in f2, the variable y is passed by reference, there manipulating the code in the function will result into modification of the value
of the variable y.
