const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM3',{ baudRate: 9600 });

const parser = port.pipe(new Readline({ delimiter: '\n' }));

var quantidade = 0;

// Read the port data
port.on("open", () => {
  console.log('serial port open');
});

parser.on('data', data =>{
  if (data[0]=="0") {	
     quantidade++;
  } else {
	 quantidade--;
  }
  console.log("Quantidade de Pessoas :"+quantidade);
});

