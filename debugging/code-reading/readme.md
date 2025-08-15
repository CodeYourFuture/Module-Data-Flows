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

--> Line 5 outputs 2 because the variable x declared inside f1 (let x = 2) is used, as it is scoped to the function.
--> Line 8 outputs 1 because the x declared globally (let x = 1) is used. The inner declaration of x in f1 does not affect the global x.

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

Output:
10
undefined
ReferenceError: y is not defined.

--> f1 logs the value of x, which is 10 (from the outer scope).
--> The console.log(f1()) prints undefined because f1 does not return anything.
--> The console.log(y) throws a ReferenceError because y is block-scoped to f1 and cannot be accessed outside of it.

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

Output:
9
{ x: 10 }

--> x is a number, which is a primitive type in JavaScript.
- When f1(x) is called, the value of x (which is 9) is copied and passed into the function.
- Inside f1, the parameter val is increased by 1, but this change only affects the local variable val. The original x remains unchanged because JavaScript passes primitive values by value. When console.log(x) runs, it still shows 9.

--> y is an object, which is a reference type in JavaScript.
- When f2(y) is called, a reference to the object y is passed into the function. This means the function works with the same object that y refers to.
- Inside f2, the property x of the object is updated from 9 to 10. This change affects the original object because objects are passed by reference. When console.log(y) runs, it shows { x: 10 }.
