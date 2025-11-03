import { MissionUtils } from "@woowacourse/mission-utils";
import InputCash from "./Input-Output/Input-Cash.js";
import CaculateTryChance from "./Caculate/Caculate-TryNumber.js";
import LottoNumber from "./Lotto/MakeLottoArry.js";
import inputWinningNumber from "./Input-Output/Input-WinningNumber.js";
import caculateNumberOfMatch from "./Caculate/Caculate-NumberOfMatched.js";
import caculateProfit from "./Caculate/Caculate-TotalReturn.js";
import printUserCashRecord from "./Input-Output/OutPut-userCash.js";
import printUserLottoNumber from "./Input-Output/Output-userLottoNumber.js";

class App {
  async run() {
    const userCash = await InputCash(); // 사용자 금액 입력

    const uesrLottoTryChance = CaculateTryChance(userCash); // 금액에 따른 랜덤 로또 가질 수 있는 개수
    MissionUtils.Console.print(`${uesrLottoTryChance}개를 구매했습니다.`);

    const userLottoNumber = LottoNumber(uesrLottoTryChance); // 랜덤 로또 번호가 담긴 새로운 배열
    printUserLottoNumber(userLottoNumber);

    const winningNumber = await inputWinningNumber(); // 로또 번호와 보너스 번호를 입력

    const caluatedUserGetCash = caculateNumberOfMatch(
      // 수익률을 계산
      uesrLottoTryChance,
      userLottoNumber,
      winningNumber
    );

    printUserCashRecord(caluatedUserGetCash);

    const solution = caculateProfit(caluatedUserGetCash, userCash);

    MissionUtils.Console.print(solution);
  }
}

export default App;
