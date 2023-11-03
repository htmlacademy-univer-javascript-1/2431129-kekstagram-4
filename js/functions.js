//function checkStringLength(string, length){
//  return string.length <= length;
//}

//function checkPalindrom (str) {
//  return str === str.split('').reverse().join('');
//}

const checkStringLength = (str, len) => str.length <= len;

const checkPalindrom = (str) => str === str.split('').reverse().join('');

checkStringLength('',0);
checkPalindrom('');
