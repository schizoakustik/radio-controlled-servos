radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        angle += -5
    } else if (receivedNumber == 2) {
        angle += 5
    } else if (receivedNumber == 3) {
        go = 0
    } else {
        angle = 90
        go = 1
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
let go = 0
let angle = 0
radio.setGroup(1)
angle = 90
go = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        radio.sendNumber(2)
    }
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        radio.sendNumber(3)
    }
    if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        radio.sendNumber(0)
    }
    pins.digitalWritePin(DigitalPin.P2, go)
    servos.P0.setAngle(angle)
})
