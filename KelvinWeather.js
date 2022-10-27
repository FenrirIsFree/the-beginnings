// baseline value for project
const kelvin = 0;

// celsius is calculated by subtracting 273 from kelvin
let celsius = kelvin - 273;

// fahrenheit is calculated by multiplying celsius by 9/5 then adding 32
let fahrenheit = celsius * (9/5) + 32;

// round down fahrenheit to keep it as an integer
fahrenheit = Math.floor(fahrenheit);

// newton is celsius multiplied by 33/100 and add .floor to keep it an integer
let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`Also it is ${newton} degrees Newton`);
