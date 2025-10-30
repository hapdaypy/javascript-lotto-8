import Lotto from "../Lotto/Lotto.js";

function ValidateInputNumber(inputNumber) {
  const hasNonNumeric = inputNumber.split(",").some((char) => isNaN(char));
  if (hasNonNumeric == true)
    throw new Error("[ERROR] 당첨 번호에는 숫자만 재야합니다.");

  inputWinningNumber = new Lotto(inputnumber);
  return inputWinningNumber;
}

export default ValidateInputNumber;
