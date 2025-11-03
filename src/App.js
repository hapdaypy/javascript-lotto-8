import { MissionUtils } from "@woowacourse/mission-utils";
import InputCash from "./input-output/inputCash.js";
import CalculateTryChance from "./calculate/calculateTryNumber.js";
import LottoNumber from "./makelotto/makeInputLottoArray.js";
import inputWinningNumber from "./input-output/inputWinningNumber.js";
import calculateNumberOfMatch from "./calculate/calculateNumberOfMatched.js";
import calculateProfit from "./calculate/calculateTotalReturn.js";
import printUserCashRecord from "./input-output/outputUserCash.js";
import printUserLottoNumber from "./input-output/outputUserLottoNumber.js";

class App {
  async run() {
    const userCash = await InputCash(); // 사용자 금액 입력
    const uesrLottoTryChance = CalculateTryChance(userCash); // 금액에 따른 랜덤 로또 가질 수 있는 개수
    const userLottoNumber = LottoNumber(uesrLottoTryChance); // 랜덤 로또 번호가 담긴 새로운 배열
    printUserLottoNumber(userLottoNumber, uesrLottoTryChance);

    const winningNumber = await inputWinningNumber(); // 로또 번호와 보너스 번호를 입력
    const caluatedUserGetCash = calculateNumberOfMatch(
      // 수익률을 계산
      uesrLottoTryChance,
      userLottoNumber,
      winningNumber
    );
    printUserCashRecord(caluatedUserGetCash);

    const solution = calculateProfit(caluatedUserGetCash, userCash);
    MissionUtils.Console.print(`총 수익률은 ${solution}%입니다.\n`);
  }
}

export default App;
