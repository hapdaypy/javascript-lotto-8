import { Console } from "@woowacourse/mission-utils";

async function InputUserCash() {
  const InputCash = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  return InputCash;
}

export default InputUserCash;
