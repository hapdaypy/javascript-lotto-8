import { Console } from "@woowacourse/mission-utils";

// 로또 번호가 맞은게 얼마나 많은지 확인한 다음에 -> 순위들 인덱스에 저장하는 파일
// 5등이면 0에 저장되고 4등이면 1에 저장되는식임
// 값을 하드코딩하면 안 됨

const lotto_inpormantion = {
  Match_Counter: {
    TREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
  },
  Lotto_Rankin_Index: {
    FIFTH: 0, // 5등
    FOURTH: 1,
    THIRTH: 2,
    SECOND: 3,
    FIRST: 4, // 1등
  },
  Min_Mathch: 3,
  Total_Rank: 5,
};

function getRank(userLottoNumberArray, userCorrecNumber, bonusNumberRead) {
  if (userCorrecNumber < lotto_inpormantion.Min_Mathch) return null;
  if (userCorrecNumber === lotto_inpormantion.TREE)
    // 5등
    return lotto_inpormantion.Lotto_Rankin_Index.FIFTH;
  if (userCorrecNumber === lotto_inpormantion.Match_Counter.FOUR)
    // 4등
    return lotto_inpormantion.Lotto_Rankin_Index.FOURTH;
  if (userCorrecNumber === lotto_inpormantion.Match_Counter.SIX)
    // 1등 6개 맞춤
    return lotto_inpormantion.Lotto_Rankin_Index.FIRST;
  if (userCorrecNumber === lotto_inpormantion.Match_Counter.FIVE) {
    const hasBounus = userLottoNumberArray.includes(bonusNumberRead);
    if (hasBounus) {
      return lotto_inpormantion.Lotto_Rankin_Index.SECOND;
    }
    return lotto_inpormantion.Lotto_Rankin_Index.THIRTH;
  }
  return null;
}

function CaculateUseWrGetCash(tryNumber, userLottoNumber, winningNumber) {
  let caculatedGetUserCash = new Array(5).fill(0);
  const winningNumberRead = winningNumber[0].lottoNumber;
  const bonusNumberRead = Number(winningNumber[1]);

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

function matchNumber(userLottoNumber, winningNumber) {
  let set2 = new Set(userLottoNumber);
  let commonElements = winningNumber.filter((item) => set2.has(item));
  const correctNumber = commonElements.length;
  return correctNumber;
}

export default CaculateUseWrGetCash;
