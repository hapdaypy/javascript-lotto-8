import { Console } from "@woowacourse/mission-utils";
import ValidateInputWinningNumber from "../Validate/Validate-inputNumber.js";
import Lotto from "../Lotto/Lotto.js";

async function InputNumber() {
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

  inputWinningNumber.push(bonusNumber);
  return inputWinningNumber;
}

export default InputNumber;
