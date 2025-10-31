function ValidateInputNumber(inputNumber) {
  const hasNonNumeric = inputNumber.split(",").some((char) => isNaN(char));
  if (hasNonNumeric == true)
    throw new Error("[ERROR] 당첨 번호에는 숫자만 재야합니다.");

  return inputNumber;
}

export default ValidateInputNumber;
