import { MissionUtils } from "@woowacourse/mission-utils";

function printUserLottoNumber(userLottoNumber) {
  userLottoNumber.forEach((ticket) => {
    MissionUtils.Console.print(`총 수익률은 [${ticket.lottoNumber}]%입니다.`);
  });
}

export default printUserLottoNumber;
