var result; // 输入的数值
var operator; // 运算符
var pressKey = false; // 记录是否按下"="号;

// 数字键事件
function connectionDigital(control) {
  var txt = document.getElementById('sum');
  // 判断是否进行过计算，以清空数值
  if (pressKey) {
    txt.value = "";
    pressKey = false;
  }

  // 判断是否输入过小数点
  if (txt.value.indexOf('.') > -1 && control.value == '.') {
    return false;
  }else if (txt.value == 0 && control.value == '.') {
    txt.value = '0';
    txt.value += control.value;
    return false;
  }

  // 如果值为0，则不能在输入0
  if (txt.value == '0' && control.value == '0' ) {
    return false;
  }

  // 将数值赋值给数值输入框
  if (txt.value == '0') {
    txt.value = '';
    txt.value += control.value;
  } else {
    txt.value += control.value;
  }
}

// del键事件
function backspace() {
  var txt = document.getElementById('sum');
  txt.value = txt.value.substring(0, txt.value.length - 1);
}

// AC键事件
function clearAll() {
  document.getElementById('sum').value = '0';
  result = '';
  operator = '';
}

// 运算符事件
function calculation(control) {
  operator = control.value;
  var txt = document.getElementById('sum');
  if (txt.value == '') {
    return false;
  }
  result = txt.value;
  txt.value = '';
}

function math(control) {
  var opValue = '';
  var operator = control.value;
  var txt = document.getElementById('sum');
  opValue = txt.value;
  if (operator == 'sin') {
    opValue = Math.sin(opValue*Math.PI/180);
    opValue = parseFloat(opValue.toFixed(8));
  }else if (operator == 'cos') {
    opValue = Math.cos(opValue*Math.PI/180);
    opValue = parseFloat(opValue.toFixed(8));
  } else if (operator == 'tan') {
    opValue = Math.tan(opValue*Math.PI/180);
    opValue = parseFloat(opValue.toFixed(8));
  }else if(operator == '√'){
    opValue = Math.sqrt(opValue);
    opValue = parseFloat(opValue.toFixed(8));
  }else if(operator == 'log'){
    opValue = Math.log(opValue);
    opValue = parseFloat(opValue.toFixed(8));
  }else{
    opValue = '无法计算';
    return false;
  }
  txt.value = opValue;
  pressKey = true;
  result = '';
  opValue = '';
}


//计算结果
function getResult() {
  var opValue = '';

  var sourseValue = parseFloat(result);
  var txt = document.getElementById('sum');
  if (operator == '×') {
    opValue = sourseValue * parseFloat(txt.value);
    opValue = parseFloat(opValue.toFixed(8));
  } else if (operator == '÷') {
    // 当除数为0的时候
    if (txt.value == 0) {
      alert('除数不能为0');
    }
    opValue = sourseValue / parseFloat(txt.value);
    opValue = parseFloat(opValue.toFixed(8));
  } else if (operator == '+') {
    opValue = sourseValue + parseFloat(txt.value);
    opValue = parseFloat(opValue.toFixed(8));
  } else if (operator == '-') {
    opValue = sourseValue - parseFloat(txt.value);
    opValue = parseFloat(opValue.toFixed(8));
  } else if (operator == '%') {
    opValue = sourseValue / 100;
    opValue = parseFloat(opValue.toFixed(8));
  } else if (operator != '+' && operator != '-' && operator != '÷' && operator != '×' && txt.value == '') {
    opValue = "请输入数字";
  } else{
    opValue = txt.value;
  }
  txt.value = opValue;
  pressKey = true;
  result = '';
  opValue = '';
}
