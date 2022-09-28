radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        angle += -5
    } else if (receivedNumber == 2) {
        angle += 5
    } else {
        angle = 90
    }
    servos.P0.setAngle(angle)
})
let angle = 0
radio.setGroup(1)
angle = 90
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        radio.sendNumber(0)
    }
})
