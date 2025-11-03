function ValidateInputNumber(inputNumber) {
  const lottoInputSize = 6;
  const STRAT = 1;
  const END = 45;
  const numberOnlyRegex = /^[0-9,]+$/;

  vadidateInputNumberFrame(inputNumber, numberOnlyRegex);
  const numbers = inputNumber.split(","); // 함수를 나누는 기준
  validateInputNumberComponent(numbers, STRAT, END, lottoInputSize);

  return inputNumber;
}

function vadidateInputNumberFrame(inputNumber, numberOnlyRegex) {
  if (inputNumber.includes(" ")) {
    throw new Error("[ERROR] 당첨 번호에 공백이 존재합니다.");
  }
  if (inputNumber.startsWith(",") || inputNumber.endsWith(",")) {
    throw new Error("[ERROR] 당첨 번호에는 처음 또는 끝에 ,(콤마)가 있습니다.");
  }
  if (!numberOnlyRegex.test(inputNumber)) {
    throw new Error("[ERROR] 당첨 번호에 , 이외의 문자가 있을 수 없습니다.");
  }
}

function validateInputNumberComponent(numbers, START, END, lottoInputSize) {
  for (const numStr of numbers) {
    if (isNaN(numStr) || numStr === "") {
      throw new Error(
        "[ERROR] 당첨 번호에는 숫자만 있어야 하며, 콤마(,)가 연속될 수 없습니다."
      );
    }
  }
  for (let index = 0; index < numbers.length; index++) {
    const num = Number(numbers[index]);
    if (num < START || num > END)
      throw new Error("[ERROR] 당첨 번호는 1부터 45까지 정수여야 합니다.");
  }
  if (numbers.length !== lottoInputSize) {
    throw new Error(`[ERROR] 당첨 번호는 ${lottoInputSize}자리여야 합니다.`);
  }
  if (hasDuplicates(numbers) == true)
    throw new Error("[ERROR] 당첨 번호에 중복되는 숫자가 있습니다.");
}

function hasDuplicates(arr) {
  const uniqueElements = new Set(arr);
  return arr.length !== uniqueElements.size;
}

export default ValidateInputNumber;
