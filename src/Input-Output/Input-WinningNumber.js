import { Console } from "@woowacourse/mission-utils";
import ValidateInputWinningNumber from "../Validate/Validate-inputNumber.js";
import ValiadateBonseNuber from "../Validate/Validate-InputBonus.js";
import Lotto from "../Lotto/Lotto.js";

async function InputLottoAndBonusNumber() {
  while (true) {
    try {
      const WinningNumber = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
      const inputWinningNumber = [];

      ValidateInputWinningNumber(WinningNumber);

      const stringArray = WinningNumber.split(",");
      const WinningNumberArray = stringArray.map(Number);

      inputWinningNumber.push(new Lotto(WinningNumberArray));

      const bonusNumber = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );

      ValiadateBonseNuber(bonusNumber);

      inputWinningNumber.push(bonusNumber);

      return inputWinningNumber;
    } catch {
      error.message;
    }
  }
}

export default InputLottoAndBonusNumber;
