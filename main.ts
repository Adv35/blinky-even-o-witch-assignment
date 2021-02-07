let counter = 78
basic.forever(function () {
    basic.pause(1000)
    counter += -1
    if (counter == 16) {
        counter += 0
    } else {
        if (counter % 2 == 0) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else if (counter % 2 == 1) {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        }
    }
})
