import { Console } from "@woowacourse/mission-utils";
import ValidateInputWinningNumber from "../Validate/Validate-InputNumber.js";
import ValiaBonseNuber from "../Validate/Validate-InputBonus.js";
import Lotto from "../Lotto/Lotto.js";

async function InputLottoAndBonusNumber() {
  const WinningNumber = await Console.readLineAsync(
    "당첨 번호를 입력해 주세요.\n"
  );
  const inputWinningNumber = [];

  ValidateInputWinningNumber(WinningNumber);

  const stringArray = WinningNumber.split(",");
  const WinningNumberArray = stringArray.map(Number);
  inputWinningNumber.push(new Lotto(WinningNumberArray));

  const bonusNumber = await Console.readLineAsync(
    "보너스 번호를 입력해 주세요.\n"
  );

  ValiaBonseNuber(bonusNumber);

  inputWinningNumber.push(bonusNumber);

  return inputWinningNumber;
}

export default InputLottoAndBonusNumber;
