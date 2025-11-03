function ValidateInputBonusNumber(inputNumber) {
  const START = 1;
  const END = 45;

  const numberOnlyRegex = /^[0-9]+$/;

  if (!numberOnlyRegex.test(inputNumber)) {
    throw new Error(
      "[ERROR] 보너스 번호에 공백,숫자를 제외한 문자가 있으면 안 됩니다."
    );
  }
  const bonusNumber = Number(inputNumber);
  if (START > bonusNumber || END < bonusNumber) {
    throw new Error("[ERROR] 보너스 번호가 1부터 46사이의 수여야 합니다.");
  }

  return inputNumber;
}

export default ValidateInputBonusNumber;
