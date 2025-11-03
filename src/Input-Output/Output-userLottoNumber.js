import { MissionUtils } from "@woowacourse/mission-utils";

function printUserLottoNumber(userLottoNumber) {
  userLottoNumber.forEach((ticket) => {
    MissionUtils.Console.print(`[${ticket.lottoNumber.join(", ")}]`);
  });
}

export default printUserLottoNumber;
