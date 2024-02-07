radio.onReceivedNumber(function (receivedNumber) {
    list.push(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    total = 0
    for (let index = 0; index <= list.length - 1; index++) {
        total += total + list[index]
    }
    basic.showNumber(total)
    average = total / list.length
    basic.showNumber(average)
})
input.onButtonPressed(Button.B, function () {
    let value = 0
    for (let value of list) {
        basic.showNumber(value)
    }
    serial.writeLine("" + (value))
})
let average = 0
let total = 0
let list: number[] = []
list = []
radio.setGroup(1)
serial.redirectToUSB()
