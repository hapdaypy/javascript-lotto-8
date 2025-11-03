class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const lottoInputSize = 6;
    const STRAT = 1;
    const END = 45;
    const numberOnlyRegex = /^[0-9,]+$/;
    const stringNumber = String(numbers);
    vadidateInputNumberFrame(stringNumber, numberOnlyRegex);
    validateInputNumberComponent(numbers, STRAT, END, lottoInputSize);
  }

  get lottoNumber() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}
function vadidateInputNumberFrame(stringNumber, numberOnlyRegex) {
  if (stringNumber.includes(" ")) {
    throw new Error("[ERROR] 사용자 로또 번호에 공백이 존재합니다.");
  }
  if (stringNumber.startsWith(",") || stringNumber.endsWith(",")) {
    throw new Error(
      "[ERROR] 사용자 로또 번호에는 처음 또는 끝에 ,(콤마)가 있습니다."
    );
  }
  if (!numberOnlyRegex.test(stringNumber)) {
    throw new Error(
      "[ERROR] 사용자 로또 번호에 , 이외의 문자가 있을 수 없습니다."
    );
  }
}

function validateInputNumberComponent(numbers, START, END, lottoInputSize) {
  for (const numStr of numbers) {
    if (isNaN(numStr) || numStr === "") {
      throw new Error(
        "[ERROR] 사용자 로또 번호에는 숫자만 있어야 하며, 콤마(,)가 연속될 수 없습니다."
      );
    }
  }

  for (let index = 0; index < numbers.length; index++) {
    const num = Number(numbers[index]);
    if (num < START || num > END)
      throw new Error(
        "[ERROR] 사용자 로또 번호는 1부터 45까지 정수여야 합니다."
      );
  }
  if (numbers.length !== lottoInputSize) {
    throw new Error(
      `[ERROR] 사용자 로또번호는 ${lottoInputSize}자리여야 합니다.`
    );
  }
  if (hasDuplicates(numbers) == true)
    throw new Error("[ERROR] 사용자 로또 번호에 중복되는 숫자가 있습니다.");
}

function hasDuplicates(arr) {
  const uniqueElements = new Set(arr);
  return arr.length !== uniqueElements.size;
}

export default Lotto;
