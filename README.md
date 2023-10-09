
# Education & Training Event Management

live site at-https://education-training-react.web.app/



## Features

- My project has home,login,registration,event routes in the navbar

- where the home login and registration page is available for everyone 

- the other route event which is a private route a user must login or create a account to access those

- resources route is also same you need to register first or login first if you already have an account 

- as it has a login an registration page and it was validated also it can easily create a user also make one user to login also to logout

- also if someone has to see the services of this system they need to login first.








##### ques ans #######




###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`


#### Answer: 
```
Reference error will occur as the name declared and the name mentioned below aren't same.case sensitive is js.
```

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
```
it will concatinate the the value will be c which is 12

```

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

```
    A: `['🍕', '🍫', '🥑', '🍔']` ans cause the original array will stay the same. i changed the value of a property which is in the info that doesn't change the real array
```

#### Answer: ?

```
answer
```

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

```


```

#### Answer: ?

```
B: `Hi there, undefined` ans .cause no value was passed
```

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

```

```

#### Answer: ?

```
C: 3 in js non falsy value is zero so it would just count to 3
```


