import { MissionUtils } from "@woowacourse/mission-utils";
import InputCash from "./Input-Cash.js";

class App {
  async run() {
    const UserCash = await InputCash();
    MissionUtils.Console.print(UserCash);
  }
}

export default App;
