var a = 1;
var b = "3";

if(typeof b == "string") {
    b = parseInt(b); //täisarvuks teisendamine. vt ka parseFloat
}
var c = a + b;

c=c.toString(); //tekstiks teisendamine

