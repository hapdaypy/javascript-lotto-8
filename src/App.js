import { MissionUtils } from "@woowacourse/mission-utils";
import InputCash from "./Input-Output/inputCash.js";
import CaculateTryChance from "./Caculate/caculateTryNumber.js";
import LottoNumber from "./Lotto/makeInputLottoAarry.js";
import inputWinningNumber from "./Input-Output/inputWinningNumber.js";
import caculateNumberOfMatch from "./Caculate/caculateNumberOfMatched.js";
import caculateProfit from "./Caculate/caculateTotalReturn.js";
import printUserCashRecord from "./Input-Output/outPutUserCash.js";
import printUserLottoNumber from "./Input-Output/outputUserLottoNumber.js";

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
