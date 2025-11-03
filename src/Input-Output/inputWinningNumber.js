import { Console } from "@woowacourse/mission-utils";
import useValidateInputWinningNumber from "../validate/validateInputNumber.js";
import useValidateBonusNumber from "../validate/validateInputBonus.js";
import Lotto from "../makelotto/Lotto.js";

async function InputLottoAndBonusNumber() {
  while (true) {
    try {
      const WinningNumber = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
      const inputWinningNumber = [];

      useValidateInputWinningNumber(WinningNumber);

      const stringArray = WinningNumber.split(",");
      const WinningNumberArray = stringArray.map(Number);

      inputWinningNumber.push(new Lotto(WinningNumberArray));
      const bonusNumber = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );

      useValidateBonusNumber(bonusNumber);

      inputWinningNumber.push(bonusNumber);

      return inputWinningNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default InputLottoAndBonusNumber;
