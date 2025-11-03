import { MissionUtils } from "@woowacourse/mission-utils";

function printUserLottoNumber(userLottoNumber) {
  userLottoNumber.forEach((ticket) => {
    MissionUtils.Console.print(`[${ticket.lottoNumber}]`);
  });
}

export default printUserLottoNumber;
