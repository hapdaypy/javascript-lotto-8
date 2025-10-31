import { MissionUtils } from "@woowacourse/mission-utils";
import InputCash from "./Input-Output/Input-Cash.js";
import CaculateTryChance from "./Caculate/Caculate-TryNumber.js";
import LottoNumber from "./Lotto/MakeLottoArry.js";
import inputWinningNumber from "./Input-Output/Input-WinningNumber.js";
import caculateNumberOfMatch from "./Caculate/Caculate-NumberOfMatched.js";
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

    caluatedUserGetCash.forEach((item) => {
      MissionUtils.Console.print(`[${item}]`);
    });
  }
}

export default App;
