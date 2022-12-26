# momentum
Javascript Practice (nomadcoders.co)

<h2>Day 1</h2> 

> Use const and let only. DO NOT USE VAR <br> 
Use "add: function(attributes) {}" if you define inside from object. 
<br>EX)

```javascript

const player = {
    printName: function(playerName) {
        console.log("Greetings, " + playerName)
    },
}

player.printName("lee")
```

<h2>Day 2</h2>

>use "===" instead of "==". <br>
"===" compares value and type of an object, but "==" only compares the value of an object. <br>
EX)

```javascript
console.log(1 === 1);  // Output: true
console.log('1' === 1);  // Output: false

console.log(1 == 1);  // Output: true
console.log('1' == 1);  // Output: true
```

> And operators are same from Clang (&&, ||)
