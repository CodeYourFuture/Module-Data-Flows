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
because on line 5 we show x, that was declared inside the f1 function, while on line 8 we show the global x variable

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
10
undefined

console.log inside f1 shows us the value of a global x. The y variable declared inside the f1 function only accessible inside f1, so when we try to show y variable outside of it, code can't find it

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
9
{ x:10 }
It occurs because y is passed by value, but since it is an object, the value is a reference to the original object. Therefore, modifying val.x changes the original object. However, x is a primitive, so only its value is copied, leaving the original unchanged
