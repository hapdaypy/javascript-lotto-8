const LOTTO_IMPORMATION = {
  MATHCH_COUNTER: {
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
  },
  LOTTO_RANKING_INDEX: {
    FIFTH: 0, // 5등
    FOURTH: 1,
    THIRD: 2,
    SECOND: 3,
    FIRST: 4, // 1등
  },
  Min_Mathch: 3,
  TOTAL_RANK: 5,
};

function CaculateUseWrGetCash(tryNumber, userLottoNumber, winningNumber) {
  let caculatedGetUserCash = new Array(5).fill(0);
  const winningNumberRead = winningNumber[0].lottoNumber; // 0에는 로또 정답이 들어있음
  const bonusNumberRead = Number(winningNumber[1]); // 1에는 보너스 번호가 담겨져 았  음

  for (let index = 0; index < tryNumber; index++) {
    const userLottoArray = userLottoNumber[index].lottoNumber;
    const userCorrecNumber = matchNumber(userLottoArray, winningNumberRead);
    const rankIndex = getRank(
      userLottoArray,
      userCorrecNumber,
      bonusNumberRead
    );

    if (rankIndex !== null) {
      caculatedGetUserCash[rankIndex] += 1;
    }
  }
  return caculatedGetUserCash;
}

function getRank(userLottoNumberArray, userCorrecNumber, bonusNumberRead) {
  if (userCorrecNumber < LOTTO_IMPORMATION.Min_Mathch) return null;

  if (userCorrecNumber === LOTTO_IMPORMATION.MATHCH_COUNTER.THREE)
    return LOTTO_IMPORMATION.LOTTO_RANKING_INDEX.FIFTH; // 5등
  if (userCorrecNumber === LOTTO_IMPORMATION.MATHCH_COUNTER.FOUR)
    return LOTTO_IMPORMATION.LOTTO_RANKING_INDEX.FOURTH; // 4등
  if (userCorrecNumber === LOTTO_IMPORMATION.MATHCH_COUNTER.SIX)
    return LOTTO_IMPORMATION.LOTTO_RANKING_INDEX.FIRST; // 1등
  if (userCorrecNumber === LOTTO_IMPORMATION.MATHCH_COUNTER.FIVE) {
    const hasBounus = userLottoNumberArray.includes(bonusNumberRead);
    if (hasBounus) {
      return LOTTO_IMPORMATION.LOTTO_RANKING_INDEX.SECOND; //2등
    }
    return LOTTO_IMPORMATION.LOTTO_RANKING_INDEX.THIRD; //3등
  }
  return null;
}

function matchNumber(userLottoNumber, winningNumber) {
  let set2 = new Set(userLottoNumber);
  let commonElements = winningNumber.filter((item) => set2.has(item));
  const correctNumber = commonElements.length;

  return correctNumber;
}

export default CaculateUseWrGetCash;
