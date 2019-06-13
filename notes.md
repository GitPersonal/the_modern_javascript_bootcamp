# The Modern JavaScript Bootcamp

## Terminal notes

open `terminal`

`clear` clears the console

`pwd` print working directory. Directory you are issuing commands from.

`cd` change directory. switch folder

`..` gets you to the parent directory

`ls` lists out the contents in the folder

## VS Code notes


`shift + 9` opens and closes parenthesis

To run the javascript file run the `node` command in `terminal`

```
node file_name.js
```

command line prints

```
Hello World!
```

## Challenge


1. use variables, strings and string concatination

1. use these for variables `city, country, location is combination of the two`

## Data Types

1. Strings
1. Numbers
1.


## Variables notes

You can't define a variable more than once

You can reassign a variable by reassigning it.

```javascript
//* wrong way to reassign a variable
let car = "Ford";

let car = "Chevy";

//* correct way to reassign a variable
let car = "Ford";

car = "Chevy";
```

## Boolean


`=== equality operator`

`!== no equal operator`

`< less than operator`

`> greater than operator`

`<= less than or equal to operator`

`>= greater than or equal to operator`


```javascript

let temp = 31;

let isFreezing = temp !== 32;

console.log(isFreezing);
```

**for numbers**

```javascript
let temp = 31;

let isFreezing = temp < 32;

console.log(isFreezing); //true
```

```javascript
let temp = 32;

let isFreezing = temp < 32;

console.log(isFreezing); //false
```

```javascript
let temp = 100;

let isFreezing = temp > 32;

console.log(isFreezing); //true
```

```javascript
let temp = 32;

let isFreezing = temp <= 32;

console.log(isFreezing); //true
```
