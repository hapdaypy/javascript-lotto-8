import { Console } from "@woowacourse/mission-utils";

// 로또 번호가 맞은게 얼마나 많은지 확인한 다음에 -> 순위들 인덱스에 저장하는 파일
// 5등이면 0에 저장되고 4등이면 1에 저장되는식임
// 값을 하드코딩하면 안 됨

const loTTo_inpormantion = {
  Match_Counter : {
    TREE : 3,
    FOUR : 4,
    FIVE : 5,
    SIX : 6,
  },
  
  }
}
function CaculateUseWrGetCash(tryNumber, userLottoNumber, winningNumber) {
  let caculatedGetUserCash = new Array(5).fill(0);
  const winningNumberRead = winningNumber[0].lottoNumber;
  const bonusNumberRead = Number(winningNumber[1]);
  for (let index = 0; index < tryNumber; index++) {
    const userCorrecNumber = matchNumber(
      userLottoNumber[index].lottoNumber,
      winningNumberRead
    );

    if (userCorrecNumber < 3) continue;
    else if (userCorrecNumber === 3) caculatedGetUserCash[0] += 1;
    else if (userCorrecNumber === 4) caculatedGetUserCash[1] += 1;
    else if (userCorrecNumber === 5) {
      checkInclueBonusNumber(
        userLottoNumber[index].lottoNumber,
        bonusNumberRead,
        caculatedGetUserCash
      );
    } else if (userCorrecNumber === 6) caculatedGetUserCash[4] += 1;
  }
  return caculatedGetUserCash;
}

function matchNumber(userLottoNumber, winningNumber) {
  let set2 = new Set(userLottoNumber);
  let commonElements = winningNumber.filter((item) => set2.has(item));
  const correctNumber = commonElements.length;
  return correctNumber;
}

function checkInclueBonusNumber(
  userLottoNumber,
  BonusNumber,
  caculatedGetUserCash
) {
  const tureOrFals = userLottoNumber.includes(BonusNumber);

  if (tureOrFals === false) caculatedGetUserCash[2] += 1;
  else if (tureOrFals === true) {
    caculatedGetUserCash[3] += 1;
  }
  return caculatedGetUserCash;
}

export default CaculateUseWrGetCash;
