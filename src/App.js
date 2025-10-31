import { MissionUtils } from "@woowacourse/mission-utils";
import InputCash from "./Input-Output/Input-Cash.js";
import CaculateTryChance from "./Caculate/Caculate-TryNumber.js";
import LottoNumber from "./Lotto/MakeLottoArry.js";
import inputWinningNumber from "./Input-Output/Input-WinningNumber.js";
import caculateNumberOfMatch from "./Caculate/Caculate-NumberOfMatched.js";
import caculateProfit from "./Caculate/Caculate-TotalReturn.js";
class App {
  async run() {
    const userCash = await InputCash();
    const uesrLottoTryChance = CaculateTryChance(userCash);
    MissionUtils.Console.print(`${uesrLottoTryChance}개를 구매했습니다.`);

    const userLottoNumber = LottoNumber(uesrLottoTryChance); // 로또 번호가 담긴 새로운 배열
    userLottoNumber.forEach((ticket) => {
      MissionUtils.Console.print(`[${ticket.lottoNumber}]`);
    });

    const winningNumber = await inputWinningNumber(); // 로또 번호와 보너스 번호를 입력 받음

    const caluatedUserGetCash = caculateNumberOfMatch(
      // 수익률을 계산하기 위한
      uesrLottoTryChance,
      userLottoNumber,
      winningNumber
    );

    MissionUtils.Console.print(
      `3개 일치 (5,000원) - [${caluatedUserGetCash[0]}]개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - [${caluatedUserGetCash[1]}]개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - [${caluatedUserGetCash[2]}]개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치(30,000,000원) - [${caluatedUserGetCash[3]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - [${caluatedUserGetCash[4]}]개`
    );
    const solution = caculateProfit(caluatedUserGetCash, userCash);
    MissionUtils.Console.print(solution);
  }
}

export default App;
