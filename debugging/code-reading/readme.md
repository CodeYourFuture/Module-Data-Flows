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
It happens because of the local and global scope being different, line 5 is 2 and line 8 is 1.
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
f1 does not return anything, so console.log is undefined, line 33 will be an error because of the local scope of y.

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
f1(x) does not print, 9 because of the x being passeed by value
console.log(y) prints { x: 10 } because object is referenced and changed

f1(x) doesn’t print, so console.log(x) will still prints 9
Because objects are passed by reference, f2(y) changes the property and line 62 will print {x:10}.