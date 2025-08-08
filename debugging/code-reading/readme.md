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

-They output different numbers because line 5 logs the value of x within the function scope and line 8 logs the value of x in the global scope.

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

-The first console.log(f1()) will print 10 because x is global and accessible inside f1(). The second console.log(y) throws a ReferenceError because y is declared with let inside the function, making it impossible to access from outside the function's scope.

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

-The output of console.log(x) is 9 because x stores a primitive number. f1(x) only gets a copy of the variable and doesn't change the original.
The output of console.log(y) is  { x: 10 } because f2(y) has access to the actual object by reference and increments x by 1.
