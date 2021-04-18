
Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup humanoid");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("setup all librery");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['showgyro'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Show gyro");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("show gyro in serial");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['gyro'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup gyro");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("setup libraly");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['lls'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leg move Left || Top")
        .appendField(new Blockly.FieldNumber(90), "lls1")
        .appendField("Middle")
        .appendField(new Blockly.FieldNumber(90), "lls2")
        .appendField("bot")
        .appendField(new Blockly.FieldNumber(90), "lls3")
        .appendField("Foot")
        .appendField(new Blockly.FieldNumber(90), "lls4");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("ขยับขาซ้ายของหุ่นยนต์ มากสุด 180 น้อยสุด 0");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lrs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leg move Right || Top")
        .appendField(new Blockly.FieldNumber(90), "lrs1")
        .appendField("Middle")
        .appendField(new Blockly.FieldNumber(90), "lrs2")
        .appendField("Bot")
        .appendField(new Blockly.FieldNumber(90), "lrs3")
        .appendField("Foot")
        .appendField(new Blockly.FieldNumber(90), "lrs4");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("ขยับขาขวาของหุ่นยนต์ มากสุด 180 น้อยสุด 0");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hls'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hand move Left || Top")
        .appendField(new Blockly.FieldNumber(90), "hls1")
        .appendField("Middle")
        .appendField(new Blockly.FieldNumber(90), "hls2")
        .appendField("Bot")
        .appendField(new Blockly.FieldNumber(90), "hls3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("ขยับแขนซ้ายของหุ่นยนต์ มากสุด 180 น้อยสุด 0");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hrs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hand move Right || Top")
        .appendField(new Blockly.FieldNumber(90), "hrs1")
        .appendField("Middle")
        .appendField(new Blockly.FieldNumber(90), "hrs2")
        .appendField("Bot")
        .appendField(new Blockly.FieldNumber(90), "hrs3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("ขยับแขนขวาของหุ่นยนต์ มากสุด 180 น้อยสุด 0");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['sv'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Servo move || no.")
        .appendField(new Blockly.FieldNumber(0), "pin")
        .appendField("Degree")
        .appendField(new Blockly.FieldNumber(90), "degree");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("1 จุด ของของหุ่นยนต์ มากสุด 180 น้อยสุด 0");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['asx'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read acceleration sensor X");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("ค่าความเอียง x");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['asy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read acceleration sensor Y");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("ค่าความเอียง y");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['asz'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read acceleration sensor Z");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("ค่าความเอียง z");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['walk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Walk one step");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("หุ่นยนต์ก้าวขาไปข้่างหน้า");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['stand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stand");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("ท่ายืน  defult ของหุ่นยนต์");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("setup all librery");
 this.setHelpUrl("");
  }
};