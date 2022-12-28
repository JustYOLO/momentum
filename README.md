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

**ISSUE <br> <ol> How to resize background?**