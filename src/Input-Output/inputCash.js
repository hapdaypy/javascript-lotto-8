import { Console } from "@woowacourse/mission-utils";
import ValidateInputCash from "../validate/validateInputCash.js";

async function InputUserCash() {
  while (true) {
    try {
      const InputCash = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      ValidateInputCash(InputCash);
      return InputCash;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default InputUserCash;
