import { MissionUtils } from "@woowacourse/mission-utils";
function outPutUserCashRecord(caluatedUserGetCash) {
  const outputLines = [
    "당첨 통계",
    "---",
    `3개 일치 (5,000원) - ${caluatedUserGetCash[0]}개`,
    `4개 일치 (50,000원) - ${caluatedUserGetCash[1]}개`,
    `5개 일치 (1,500,000원) - ${caluatedUserGetCash[2]}개`,
    `5개 일치, 보너스 볼 일치(30,000,000원) - ${caluatedUserGetCash[3]}개`,
    `6개 일치 (2,000,000,000원) - ${caluatedUserGetCash[4]}개`,
  ];

  MissionUtils.Console.print(outputLines.join("\n"));
}

export default outPutUserCashRecord;
