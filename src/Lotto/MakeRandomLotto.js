import { MissionUtils } from "@woowacourse/mission-utils";

function MakeRandomVariable() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
}
export default MakeRandomVariable;
