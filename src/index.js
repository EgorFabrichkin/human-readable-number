module.exports = function toReadable (number) {
    let arrNum = number.toString().split('');

    let arrFrom0to19 = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');

    let arrDozens = new Array('twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');

    if (number === 0) {
        return 'zero';
    } else if (number < 20) {
        return arrFrom0to19[number];
    } else if (number > 19 && number < 100) {   
        return arrDozens[arrNum[0] - 2] + ' ' + arrFrom0to19[arrNum[1]]; 
    } else if (number > 99 && number < 1000) {
        let numfrom10to19 = new String(arrNum[1] + arrNum [2]);
        if (parseInt(numfrom10to19) < 20) {
            return arrFrom0to19[arrNum[0]] + ' hundred ' + arrFrom0to19[parseInt(numfrom10to19)];
        } else {
            return arrFrom0to19[arrNum[0]] + ' hundred ' + arrDozens[arrNum[1] - 2] + ' ' + arrFrom0to19[arrNum[2]];
        }
    } 
}