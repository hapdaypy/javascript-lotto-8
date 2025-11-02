function validateInputCash(inputCash) {
  const numberOnlyRegex = /^[0-9]+$/;
  const standardCash = 1000;
  const zero = 0;
  if (!numberOnlyRegex.test(inputCash)) {
    throw new Error(
      "[ERROR] 구입은 공백, 문자, 소주점 없이 오직 숫자만 입력되야 합니다."
    );
  }
  const cashAmout = Number(inputCash);
  if (cashAmout < standardCash) {
    throw new Error("[ERROR] 구입 금액은 1,000원 이상이여야 합니다.");
  }
  if (cashAmout % standardCash !== zero) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
  }
  return cashAmout;
}
// if 문이 과연 정답일까 ?

export default validateInputCash;
