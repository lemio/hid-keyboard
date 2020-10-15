bluetooth.startKeyboardService()
basic.forever(function () {
    bluetooth.keyboardSendText("")
})
