import { MissionUtils } from "@woowacourse/mission-utils";
import InputCash from "./Input-Output/Input-Cash.js";
import CaculateTryChance from "./Caculate/Caculate-TryNumber.js";
import LottoNumber from "./Lotto/MakeLottoArry.js";
import inputWinningNumber from "./Input-Output/Input-WinningNumber.js";
class App {
  async run() {
    const userCash = await InputCash();
    const uesrLottoTryChance = CaculateTryChance(userCash);
    MissionUtils.Console.print(`${uesrLottoTryChance}개를 구매했습니다.`);

    const userLottoNumber = LottoNumber(uesrLottoTryChance); // 로또 번호가 담긴 새로운 배열

    userLottoNumber.forEach((ticket) => {
      const numbers = ticket;
      MissionUtils.Console.print(`[${numbers.join(", ")}]`);
    });

    const winningNunber = inputWinningNumber();
  }
}

export default App;
