export default function formateNumber(number) {
  const numberString = number.toString();
  const numberArray = numberString.split("");
  let j = 0;

  for (let i = numberArray.length; i >= 0; i--) {
    if (j === 3 && j !== 0) {
      numberArray.splice(i, 0, ",");
      i--;
      j = 2;
    } else {
      j++;
    }
  }

  return numberArray.join("");
}
