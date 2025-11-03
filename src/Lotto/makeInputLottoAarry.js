import MakeRandomVariable from "./makeRandomVariable.js";
import Lotto from "./Lotto.js";

function MakeLottoArray(uesrLottoTryChance) {
  const lottoTikets = [];
  for (let index = 0; index < uesrLottoTryChance; index++) {
    const number = MakeRandomVariable();
    number.sort((a, b) => a - b);
    lottoTikets.push(new Lotto(number));
  }

  return lottoTikets;
}

export default MakeLottoArray;
