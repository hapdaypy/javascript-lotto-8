import { Console } from "@woowacourse/mission-utils";

async function InputUserCash() {
  const InputCash = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  if (InputCash % 1000 != 0)
    throw new Error("[ERROR] 천원으로 나누어 떨어지지 않습니다.");
  return InputCash;
}

// 천원 단위로 나눠지지 않는다면

export default InputUserCash;
