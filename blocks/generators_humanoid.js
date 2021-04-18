Blockly.JavaScript['block_type'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `#EXTINC
  #include "Adafruit_PWMServoDriver.h"
  Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();
  #define SERVOMIN  150
  #define SERVOMAX  600
  uint16_t pulsells1;
  uint16_t pulsells2;
  uint16_t pulsells3;
  uint16_t pulsells4;
  uint16_t pulselrs1;
  uint16_t pulselrs2;
  uint16_t pulselrs3;
  uint16_t pulselrs4;
  uint16_t pulsehls1;
  uint16_t pulsehls2;
  uint16_t pulsehls3;
  uint16_t pulsehrs1;
  uint16_t pulsehrs2;
  uint16_t pulsehrs3;
  #END
  #BLOCKSETUP
  pwm.begin();
  pwm.setPWMFreq(60);
  #END
  `;
  return code;
};
Blockly.JavaScript['showgyro'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code =  
  `
  #BLOCKSETUP
  pinMode(led,OUTPUT) ;

Wire.begin();

Serial.begin(38400);

Serial.println("Initialize MPU");

mpu.initialize();

Serial.println(mpu.testConnection() ? "Connected" : "Connection failed");
  #END
  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
  valx = map(ax, -17000, 17000, 0, 179); 
  valy = map(ay, -17000, 17000, 0, 179);
  valz = map(az, -17000, 17000, 0, 179);
  Serial.print("axis x = ") ; 
  Serial.print(valx) ; 
  Serial.print(" axis y = ") ; 
  Serial.print(valy) ; 
  Serial.print(" axis z = ") ; 
  Serial.println(valz) ; 
  delay(100);
  `;
  return code;
};
Blockly.JavaScript['gyro'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `#EXTINC
  #include "I2Cdev.h"
  #include "MPU6050.h"
  #include "Wire.h"
  MPU6050 mpu;
  int16_t ax, ay, az;
  int16_t gx, gy, gz;
  int valx , valy , valz;
  char rd;
  int prevVal;
  int led = 13 ;
  int pin11 = 11 , pin10 = 10 ;
  int val1 , val2 ;
  int valgy1 = 0 , valgy2 = 0;
  #END
  `;
  return code;
};
Blockly.JavaScript[`lls`] = function(block) {
  var lls1 = block.getFieldValue(`lls1`);
  var lls2 = block.getFieldValue(`lls2`);
  var lls3 = block.getFieldValue(`lls3`);
  var lls4 = block.getFieldValue(`lls4`);
  // TODO: Assemble JasvaScript into code variable.
  var code = 
  `
  

  pulsells1 = map(${lls1}, 0, 180, SERVOMIN, SERVOMAX);
  pulsells2 = map(${lls2}, 0, 180, SERVOMIN, SERVOMAX);
  pulsells3 = map(${lls3}, 0, 180, SERVOMIN, SERVOMAX);
  pulsells4 = map(${lls4}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(8,0,pulsells1);
  pwm.setPWM(9,0,pulsells2);
  pwm.setPWM(10,0,pulsells3);
  pwm.setPWM(11,0,pulsells4);`;
  return code;
};

Blockly.JavaScript[`lrs`] = function(block) {
  var lrs1 = block.getFieldValue(`lrs1`);
  var lrs2 = block.getFieldValue(`lrs2`);
  var lrs3 = block.getFieldValue(`lrs3`);
  var lrs4 = block.getFieldValue(`lrs4`);
  // TODO: Assemble JavaScript into code variable.
  var code = `
 

  pulselrs1 = map(${lrs1}, 0, 180, SERVOMIN, SERVOMAX);
  pulselrs2 = map(${lrs2}, 0, 180, SERVOMIN, SERVOMAX);
  pulselrs3 = map(${lrs3}, 0, 180, SERVOMIN, SERVOMAX);
  pulselrs4 = map(${lrs4}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(12,0,pulselrs1);
  pwm.setPWM(13,0,pulselrs2);
  pwm.setPWM(14,0,pulselrs3);
  pwm.setPWM(15,0,pulselrs4);
  `;
  return code;
};

Blockly.JavaScript[`hls`] = function(block) {
  var hls1 = block.getFieldValue(`hls1`);
  var hls2 = block.getFieldValue(`hls2`);
  var hls3 = block.getFieldValue(`hls3`);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  
   pulsehls1 = map(${hls1}, 0, 180, SERVOMIN, SERVOMAX);
   pulsehls2 = map(${hls2}, 0, 180, SERVOMIN, SERVOMAX);
   pulsehls3 = map(${hls3}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(1,0,pulsehls1);
  pwm.setPWM(2,0,pulsehls2);
  pwm.setPWM(3,0,pulsehls3);`
  ;
  return code;
};
Blockly.JavaScript[`hrs`] = function(block) {
  var  hrs1= block.getFieldValue(`hrs1`);
  var  hrs2= block.getFieldValue(`hrs2`);
  var  hrs3= block.getFieldValue(`hrs3`);
  // TODO: Assemble JavaScript into code variable.
  var code = `
   pulsehrs1 = map(${hrs1}, 0, 180, SERVOMIN, SERVOMAX);
   pulsehrs2 = map(${hrs2}, 0, 180, SERVOMIN, SERVOMAX);
   pulsehrs3 = map(${hrs3}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(4,0,pulsehrs1);
  pwm.setPWM(5,0,pulsehrs2);
  pwm.setPWM(6,0,pulsehrs3);`;
  return code;
};
Blockly.JavaScript[`sv`] = function(block) {
  var pin = block.getFieldValue(`pin`);
  var degree = block.getFieldValue(`degree`);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  #EXTINC
  uint16_t pin;
  uint16_t degree;
  uint16_t pulsesv;
  #END
  pulsesv = map(${degree}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(${pin},0,pulsesv);`
  ;
  return code;
};


Blockly.JavaScript['asx'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `valx`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['asy'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `valy`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['asz'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `valz`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['walk'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `
  #EXTINC
uint16_t move00;
uint16_t move01;
uint16_t move02;
uint16_t move03;
uint16_t move04;
uint16_t move05;
uint16_t move06;
uint16_t move07;
uint16_t move08;
uint16_t move09;
uint16_t move10;
uint16_t move11;
uint16_t move12;
  #END
  for(int i=90, j=90 ,k=90 ,l=90; i>40 || j>40 || k<140 ||l<140 ;i--,j--,k++,l++)
  {
     move00 = map(i, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(9, 0,move00);
     move01 = map(j, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(10, 0,move01);
     move02 = map(k, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(4,0,move02);
     move09 = map(l, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(0,0,move09);
     delay(25);                                                     
    }
    for(int i=40, j=40 ,k=140, l=140; i<90 || j<90 || k>90 || l>90 ;i++,j++,k--,l--)
  {
     move00 = map(i, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(9, 0,move00);
     move01 = map(j, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(10, 0,move01);
     move02 = map(k, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(4,0,move02);
     move10 = map(l, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(0,0,move10);
     delay(25);                                                     
    }
    for(int i=90, j=90 ,k=90 ,l=90; i<140 || j<140 || k>40 || l>40 ;i++,j++,k--,l--)
  {
     move03 = map(i, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(13, 0,move03);
     move04 = map(j, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(14, 0,move04);
     move05 = map(k, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(1,0,move05);
     move11 = map(l, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(0,0,move11);
     delay(25);                                                     
    }
    for(int i=140, j=140 ,k=40,l=40; i>90 || j>90 || k<90 || l<90 ;i--,j--,k++,l++)
  {
     move06 = map(i, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(13, 0,move06);
     move07 = map(j, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(14, 0,move07);
     move08 = map(k, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(1,0,move08);
      move12 = map(l, 0, 180, SERVOMIN, SERVOMAX);
     pwm.setPWM(0,0,move12);
     delay(25);                                                     
    }`
  ;
  return code;
};
Blockly.JavaScript['stand'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `#EXTINC
  uint16_t move00;
  uint16_t move01;
  uint16_t move02;
  uint16_t move03;
  uint16_t move04;
  uint16_t move05;
  uint16_t move06;
  #END
  move00 = map(40, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(9, 0,move00);
  move01 = map(40, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(10, 0,move01);                                                             
  move03 = map(160, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(13, 0,move03);
  move04 = map(140, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(14, 0,move04);
  move05 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(15, 0,move05);
  move06 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(11, 0,move06);`;
  return code;
};
Blockly.JavaScript['clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `pulsells1 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pulsells2 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pulsells3 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pulsells4 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(8, 0, pulsells1);
  pwm.setPWM(9, 0, pulsells2);
  pwm.setPWM(10, 0, pulsells3);
  pwm.setPWM(11, 0, pulsells4);
  pulselrs1 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pulselrs2 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pulselrs3 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pulselrs4 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(12, 0, pulselrs1);
  pwm.setPWM(13, 0, pulselrs2);
  pwm.setPWM(14, 0, pulselrs3);
  pwm.setPWM(15, 0, pulselrs4);
  pulsehls1 = map(90, 0, 180, SERVOMIN, SERVOMAX);
   pulsehls2 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pulsehls3 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(1, 0, pulsehls1);
  pwm.setPWM(2, 0, pulsehls2);
  pwm.setPWM(3, 0, pulsehls3);
  uint16_t pulsehrs1 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  uint16_t pulsehrs2 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  uint16_t pulsehrs3 = map(90, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(4, 0, pulsehrs1);
  pwm.setPWM(5, 0, pulsehrs2);
  pwm.setPWM(6, 0, pulsehrs3);
  `;
  return code;
};