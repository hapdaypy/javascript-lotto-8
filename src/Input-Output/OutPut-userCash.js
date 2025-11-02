import { MissionUtils } from "@woowacourse/mission-utils";
function outPutUserCashRecord(caluatedUserGetCash) {
  MissionUtils.Console.print(
    `3개 일치 (5,000원) - ${caluatedUserGetCash[0]}개`
  );
  MissionUtils.Console.print(
    `4개 일치 (50,000원) - ${caluatedUserGetCash[1]}개`
  );
  MissionUtils.Console.print(
    `5개 일치 (1,500,000원) - ${caluatedUserGetCash[2]}개`
  );
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치(30,000,000원) - ${caluatedUserGetCash[3]}개`
  );
  MissionUtils.Console.print(
    `6개 일치 (2,000,000,000원) - ${caluatedUserGetCash[4]}개`
  );
}

export default outPutUserCashRecord;
