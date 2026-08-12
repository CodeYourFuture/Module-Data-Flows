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

## Answer 1

Line 5 outputs `2` and line 8 outputs `1` because of scope. The `x` declared inside `f1` on line 4 is a separate variable that only exists within that function. It shadows the outer `x`. When `f1` finishes, the inner `x` is gone, so line 8 reads the outer `x` which is still `1`.

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

## Answer 2

The output is:
```
10
undefined
ReferenceError: y is not defined
```
`f1()` logs `10` (the outer `x`) but returns `undefined` since there is no return statement, so `console.log(f1())` prints `undefined`. Then `console.log(y)` throws a `ReferenceError` because `y` is declared inside `f1` and not accessible outside it.

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

## Answer 3

The output is:
```
9
{ x: 10 }
```
Primitives like numbers are passed by value, so `f1` cannot change the original `x`. Objects are passed by reference, so `f2` mutates the original `y` object directly, changing `y.x` from `9` to `10`.
