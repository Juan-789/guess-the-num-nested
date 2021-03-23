input.onButtonPressed(Button.A, function () {
    num += 1
})
input.onButtonPressed(Button.B, function () {
    num += -1
})
input.onGesture(Gesture.Shake, function () {
    if (guess <= 20) {
        if (guess < num) {
            basic.showString("Lower")
        }
        if (guess > num) {
            basic.showString("Higher")
        }
    }
})
// This block asks you to gues a number
let guess = 0
let num = 0
basic.showString("Guess the number")
num = randint(0, 20)
// This block shows your guess and tells you if your guess is higher or lower of the mysterious number.
basic.forever(function () {
    basic.showNumber(guess)
})
