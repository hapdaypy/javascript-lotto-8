import { MissionUtils } from "@woowacourse/mission-utils";

function printUserLottoNumber(userLottoNumber, uesrLottoTryChance) {
  MissionUtils.Console.print(`\n${uesrLottoTryChance}개를 구매했습니다.`);
  userLottoNumber.forEach((ticket) => {
    MissionUtils.Console.print(`[${ticket.lottoNumber.join(", ")}]`);
  });
}

export default printUserLottoNumber;
