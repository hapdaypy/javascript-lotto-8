import { MissionUtils } from "@woowacourse/mission-utils";

function printUserLottoNumber(userLottoNumber) {
  userLottoNumber.forEach((ticket) => {
    // 파일로 관리
    MissionUtils.Console.print(`[${ticket.lottoNumber}]`);
  });
}

export default printUserLottoNumber;
