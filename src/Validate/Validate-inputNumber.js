function ValidateInputNumber(inputNumber) {
  if (inputNumber.includes(" ")) {
    throw new Error("[ERROR] 당첨 번호에 공백이 존재합니다.");
  }

  if (inputNumber.startsWith(",") || inputNumber.endsWith(",")) {
    throw new Error("[ERROR] 당첨 번호에는 처음 또는 끝에 ,(콤마)가 있습니다.");
  }

  const numbers = inputNumber.split(",");

  if (numbers.length !== 6) {
    throw new Error("[ERROR] 당첨 번호는 6자리여야 합니다.");
  }

  for (const numStr of numbers) {
    if (isNaN(numStr) || numStr === "") {
      throw new Error(
        "[ERROR] 당첨 번호에는 숫자만 있어야 하며, 콤마(,)가 연속될 수 없습니다."
      );
    }
  }

  return inputNumber;
}

export default ValidateInputNumber;
