# Momentum
Javascript Practice (nomadcoders.co)

***
***
<br>

# Day 1

Use const and let only. DO NOT USE VAR <br> 
Use `"add: function(attributes) {}"` if you define inside from object. 

**Example)**
```javascript

const player = {
    printName: function(playerName) {
        console.log("Greetings, " + playerName)
    },
}

player.printName("lee")
```

<br><br><br>

# Day 2

Use `"==="` instead of `"=="`. <br>
`"==="` compares value and type of an object, but `"=="` only compares the value of an object. <br>

**Example)**

```javascript
console.log(1 === 1);  // Output: true
console.log('1' === 1);  // Output: false

console.log(1 == 1);  // Output: true
console.log('1' == 1);  // Output: true
```

Other operators are same from Clang (&&, ||)

***

**Warning!**

```javascript
title.addEventListener("click", handleTitleClick());
```

This code will immediately call the function `"handleTitleClick()"` because of the parentheses. <br>
If you want to pass a function as an argument to the `"addEventListener()"` you should not add the parentheses.

**Example)**

```javascript
title.addEventListener("click", handleTitleClick);
```
***

In VSC, use `"Command + Shift + L"` to select same text what I'm selecting.

<br><br><br>

# Day 3

Start making my own webpage. <br> Need to change:
1. Set background (auto-resizing)
1. login page
1. save user name 
1. login

**ISSUE <br> How to resize background?**

<br><br><br>

# Day 6

If you want to use validation in html input, you need to use **<code>form</code>** at the parent tag. <br>
**Example)**
```html
<form id="login-form"> <!-- use form -->
    <input 
    required 
    maxlength="15" 
    type="text" 
    placeholder="What is your name?"
    /> <!-- required needs form as a parent tag -->
    <button>Log In</button>
</form>
```
Despite using this, we cannot prevent user for summit a invaild value.

***

Javascirpt Formatting:
```javascript
const userName = "Lee";
const greetings = `Hello ${userName}`;

//greetings = "Hello Lee";
```

***

localStorage => hold data even the user refreshes the webpage.<br>
localStorage data is like python: have keys and values

**how to control localStorage**

```javascript
localStorage.setItem("key", "value"); // save item in localStorage
localStorage.getItem("key"); // get item from localStorage
localStorage.removeItem("key"); // remove item from localStorage 

```

***

== & === difference in comparing null:
```javascript
const nullVar = null;
const undefinedVar = undefined;

console.log(nullVar == undefinedVar) // this will be true
console.log(nullVar === undefinedVar) // this will be false
```

**So, be carful when using == and === in javascript.**

<br><br><br>


# Day 7

**<code>setInterval(function, time)</code>** <br>
The fucntion run at intervals of given time (attribute "time", in ms) <br><br>

**<code>setTimeout(function, time)</code>** <br>
The function run after given time passes (attribute "time, in ms) <br>

***

You can get time information with Date.
```javascript
const date = new Date();
const clock = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; // HH:MM:SS time in string
```
However you cannot get "01" because date.getSomething return "1" instead of "01" <br>

In this case, you can use **<code>String.padStart();</code>** to formatting the string. <br>
**Example)**
```javascript
const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
// padStart(num, String); num = standard length of string, String = if target string is shorter than num, add String to reach standard length.
clock.innerText = `${hours}:${minutes}:${seconds}`; 
// REAL HH:MM:SS 
```
You have **<code>String.padEnd();</code>** to add backwards
