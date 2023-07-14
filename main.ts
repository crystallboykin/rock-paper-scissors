let RPS = 0
input.onGesture(Gesture.Shake, function () {
    RPS = randint(1, 3)
    if (RPS == 1) {
        basic.showString("R")
    } else if (RPS == 2) {
        basic.showString("P")
    } else if (RPS == 3) {
        basic.showString("S")
    }
})
