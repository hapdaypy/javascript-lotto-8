import { Console } from "@woowacourse/mission-utils";
import ValidateInputCash from "../Validate/Validate-InputCash.js";

async function InputUserCash() {
  const InputCash = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  ValidateInputCash(InputCash);
  return InputCash;
}

export default InputUserCash;
