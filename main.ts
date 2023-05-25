input.onButtonPressed(Button.A, function () {
    stop = true
    posicao_alvo = randint(1, 11)
    basic.clearScreen()
    strip.clear()
    strip.showRainbow(1, 360)
    strip.show()
    basic.pause(1000)
    strip.clear()
    basic.pause(1000)
    strip.setPixelColor(posicao_alvo, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.showNumber(posicao_alvo)
    basic.pause(randint(1000, 5000))
    strip.clear()
    basic.clearScreen()
    stop = false
})
input.onButtonPressed(Button.B, function () {
    stop = true
    basic.showNumber(posicao)
    strip.clear()
    strip.setPixelColor(posicao, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(1000)
    if (posicao_alvo == posicao) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
let stop = false
let posicao_alvo = 0
let posicao = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
posicao = 0
posicao_alvo = 0
stop = true
strip.setBrightness(127)
strip.showRainbow(1, 360)
basic.forever(function () {
    while (!(stop)) {
        for (let índice = 0; índice <= 11; índice++) {
            if (stop) {
                break;
            }
            posicao = índice
            strip.setPixelColor(índice, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 50, 500))
            strip.clear()
        }
    }
})
