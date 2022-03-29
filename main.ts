radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 21) {
        a += 1
    }
    if (receivedNumber == 22) {
        b += 1
    }
    if (receivedNumber == 2) {
        if (bryter == 0) {
            bryter = 1
            radio.sendNumber(4)
        } else {
            bryter = 0
            radio.sendNumber(5)
        }
    }
})
let IR = 0
let b = 0
let a = 0
let bryter = 0
bryter = 0
radio.setGroup(73)
OLED.init(128, 64)
OLED.writeStringNewLine("Hola")
basic.forever(function () {
    if (a == 3 && b == 2) {
        OLED.clear()
        music.stopAllSounds()
        radio.sendNumber(8)
        a = 0
        b = 0
    }
    if (a > 3) {
        radio.sendNumber(9)
        a = 0
        b = 0
    }
    if (b > 2) {
        radio.sendNumber(9)
        a = 0
        b = 0
    }
    IR = pins.digitalReadPin(DigitalPin.P1)
    if (IR == 1 && bryter == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        radio.sendNumber(1)
        OLED.writeStringNewLine("ALARM!!!!!")
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
