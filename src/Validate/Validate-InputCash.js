function validateInputCash(inputCash) {
  const hasNonNumeric = inputCash.split("").some((char) => isNaN(char));

  if (hasNonNumeric == true)
    throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
  else if (isNaN(inputCash) == true)
    throw new Error("[ERROR] 구입금액이 숫자가 아닙니다.");
  else if (inputCash % 1000 != 0)
    throw new Error("[ERROR] 천원으로 나누어 떨어지지 않습니다.");
}

export default validateInputCash;
