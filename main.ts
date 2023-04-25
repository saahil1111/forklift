function ForkUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
radio.onReceivedNumber(function (receivedNumber) {
    Action = receivedNumber
})
function ForkDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function Reverse () {
    wuKong.setAllMotor(-20, -20)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
let Action = 0
joystickbit.initJoystickBit()
radio.setGroup(25)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
