
let temp = 55

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise

//* if (temp >= 60 && temp <= 90) {
//*     console.log("Its pretty nice outside")
//* }

//* if (temp <= 0 || temp >= 120) {
//*     console.log("Do not go outside")
//* }

// could do else if

//* if (temp >= 60 && temp <= 90) {
//*     console.log("Its pretty nice outside")
//* } else if (temp <= 0 || temp >= 120) {
//*     console.log("Do not go outside")
//* } else {
//*     console.log("Eh. Do what you want")
//* }

// Challenge area

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up vegan options.
// Else, Offer up anything on the menu

// let isGuestOneVegan = true
// let isGuestTwoVegan = false

// if (isGuestOneVegan && isGuestTwoVegan) {
//     console.log('Here is the vegan menu')
// } else if (isGuestOneVegan || isGuestTwoVegan) {
//     console.log("Here are some vegan options") // true and false
// } else {
//     console.log("Here is the full menu")
// }

// ============================================================

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up vegan options.
// Else, Offer up anything on the menu

// let isGuestOneVegan = true
// let isGuestTwoVegan = true

// if (isGuestOneVegan && isGuestTwoVegan) {
//     console.log('Here is the vegan menu') // true and true
// } else if (isGuestOneVegan || isGuestTwoVegan) {
//     console.log("Here are some vegan options")
// } else {
//     console.log("Here is the full menu")
// }

// ============================================================

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Here is the vegan menu')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Here are some vegan options")
} else {
    console.log("Here is the full menu") // false and false
}


