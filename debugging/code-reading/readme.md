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

Because of the scoop variable as we called f1() in line 7 then inside the function we declare a variable x and assign a value to it then we log this value. For line 8 we are logging the value of x in line 1

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

Calling console.log(f1()) runs f1(), which logs 10 (the global x) and returns undefined, so undefined is printed. Then, console.log(y) causes a ReferenceError because y is block-scoped inside f1() and not accessible outside.   


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

The first console.log(x) outputs 9 because primitives are passed by value, so x outside the function remains unchanged. The second console.log(y) outputs { x: 10 } because objects are passed by reference, so modifying val.x changes the original object.