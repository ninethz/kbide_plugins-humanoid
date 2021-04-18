#include "Adafruit_PWMServoDriver.h"
Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();
#define SERVOMIN 150
#define SERVOMAX 600
uint16_t pulsells1;
uint16_t pulsells2;
uint16_t pulsells3;
uint16_t pulsells4;

void setup() {
  
  pwm.setPWMFreq(60);
  pwm.begin();
  
}
void loop() {
  pulsells1 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(0, 0, pulsells1);
  delay(500);
  pulsells1 = map(0, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(0, 0, pulsells1);
  delay(500);
}
