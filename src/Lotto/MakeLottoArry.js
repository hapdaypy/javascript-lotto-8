import MakeRandomVariable from "../Lotto/MakeRandomLotto.js";
import Lotto from "../Lotto/Lotto.js";

function MakeLottoArry(uesrLottoTryChance) {
  const lottoTikets = [];
  for (let index = 0; index < uesrLottoTryChance; index++) {
    const number = MakeRandomVariable();
    number.sort((a, b) => a - b);

    lottoTikets.push(number);
  }

  return lottoTikets;
}

export default MakeLottoArry;
