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

The variable at line 5 is global, so it returns 1, while the variable at line 8 is local to the function. Thus, when the function is called, it logs the x variable from its scope.

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

The output will be 10 and undefined, as the y variable is scoped within the function and can't be accessed globally.

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

The output will be 9 and {x: 10} because of the different ways the variables are passed. In f1, x is passed by value, so the function doesn't alter its original value. In f2, y is passed by reference, so changes within the function modify the original value of y.
