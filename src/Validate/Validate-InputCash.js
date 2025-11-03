function validateInputCash(inputCash) {
  const numberOnlyRegex = /^[0-9]+$/;
  const standardCash = 1000;
  const zero = 0;

  if (!numberOnlyRegex.test(inputCash)) {
    // 정수형태만 파악
    throw new Error("[ERROR] 구입 금액에 숫자 외의 문자가 있으면 안됩니다.");
  }
  if (inputCash[0] === "0") {
    // 앞에 0 이 있으면 안 됨
    throw new Error("[ERROR] 구입 금액은 올바른 정수 형태여야 합니다.");
  }
  const cashAmout = Number(inputCash);

  if (cashAmout < standardCash) {
    throw new Error("[ERROR] 구입 금액은 1,000원 이상이여야 합니다.");
  }
  const mod = cashAmout % standardCash; //
  if (mod !== zero) {
    throw new Error("[ERROR] 구입 금액이 1,000단위가 아닙니다.");
  }
  return cashAmout;
}

export default validateInputCash;
