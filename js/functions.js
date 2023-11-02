function checkStringLength(string, length){
  return string.length <= length;
}

function checkPalindrom (str) {
  return str === str.split('').reverse().join('');
}
