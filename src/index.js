module.exports = function toReadable (number) {
    let arrNum = number.toString().split('');

    let arrFrom0to19 = new Array('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');

    let arrDozens = new Array('twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');

    if (number < 20) {
        return arrFrom0to19[number];
    } else if (number > 19 && number < 100) {  
        if (number === 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90) {
            return arrDozens[arrNum[0] - 2];
        } else {
            return arrDozens[arrNum[0] - 2] + ' ' + arrFrom0to19[arrNum[1]]; 
        }
    } else {
        let numfrom10to19 = new String(arrNum[1] + arrNum [2]);
        let tmp = parseInt(numfrom10to19);
        if (number === 100 || number === 200 || number === 300 || number === 400 || number === 500 || number === 600 || number === 700 || number === 800 || number === 900) {
            return arrFrom0to19[arrNum[0]] + ' hundred';
        } else if (tmp === 20 || tmp === 30 || tmp === 40 || tmp === 50 || tmp === 60 || tmp === 70 || tmp === 80 || tmp === 90) {
            return arrFrom0to19[arrNum[0]] + ' hundred ' + arrDozens[arrNum[1] - 2];
        } else if (tmp < 20) {
            return arrFrom0to19[arrNum[0]] + ' hundred ' + arrFrom0to19[parseInt(numfrom10to19)];
        } else {
            return arrFrom0to19[arrNum[0]] + ' hundred ' + arrDozens[arrNum[1] - 2] + ' ' + arrFrom0to19[arrNum[2]];
        }
    } 
}