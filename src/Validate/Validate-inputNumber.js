function ValidateInputNumber(inputNumber) {
  const hasNonNumeric = inputNumber.split(",").some((char) => isNaN(char));
  if (splitLottoNumber() > 5)
    throw new Error("[ERROR] 당첨 번호는 6자리여야 합니다.");

  if (hasNonNumeric == true)
    throw new Error("[ERROR] 당첨 번호에는 숫자만 있어야 합니다.");
  if (inputNumber.at(0) == "," || inputNumber.at(-1) == ",")
    throw new Error("[ERROR] 당첨 번호에는 처음 또는 끝에 ,(콤마)가 있습니다.");
  if (inputNumber.includes(" "))
    throw new Error("[ERROR] 당첨 번호에 공백이 존재합니다.");

  c;

  return inputNumber;
}

function splitLottoNumber(inputNumber) {
  const splitLotto = inputNumber.split(",");
  return (lottoNumberLength = splitLotto.length);
}

/*
1. 당첨 번호 앞 뒤에 , 로 나 끝나면 안 됨
2. 문자가 , 외에 문자가 있으면 안 됨
3. , 사이에 공백이 없어야함
4. 1~46까지의 숫자여야함
5. 


*/

export default ValidateInputNumber;
