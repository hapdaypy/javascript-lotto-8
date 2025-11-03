import { MissionUtils } from "@woowacourse/mission-utils";
import InputCash from "./input-output/inputCash.js";
import CaculateTryChance from "./calculate/caculateTryNumber.js";
import LottoNumber from "./makelotto/makeInputLottoAarry.js";
import inputWinningNumber from "./input-output/inputWinningNumber.js";
import caculateNumberOfMatch from "./calculate/caculateNumberOfMatched.js";
import caculateProfit from "./calculate/caculateTotalReturn.js";
import printUserCashRecord from "./input-output/outPutUserCash.js";
import printUserLottoNumber from "./input-output/outputUserLottoNumber.js";

class App {
  async run() {
    const userCash = await InputCash(); // 사용자 금액 입력
    const uesrLottoTryChance = CaculateTryChance(userCash); // 금액에 따른 랜덤 로또 가질 수 있는 개수
    const userLottoNumber = LottoNumber(uesrLottoTryChance); // 랜덤 로또 번호가 담긴 새로운 배열
    printUserLottoNumber(userLottoNumber, uesrLottoTryChance);

    const winningNumber = await inputWinningNumber(); // 로또 번호와 보너스 번호를 입력
    const caluatedUserGetCash = caculateNumberOfMatch(
      // 수익률을 계산
      uesrLottoTryChance,
      userLottoNumber,
      winningNumber
    );
    printUserCashRecord(caluatedUserGetCash);

    const solution = caculateProfit(caluatedUserGetCash, userCash);
    MissionUtils.Console.print(`총 수익률은 ${solution}%입니다.\n`);
  }
}

export default App;
