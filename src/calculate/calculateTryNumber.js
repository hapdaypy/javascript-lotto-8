function CalculateTryChance(userCash) {
  const CACULATION_TOOL = {
    ZERO: 0,
    ONETHOUSAN: 1000,
    ONE: 1,
  };

  let CopyUserCash = userCash;
  let userTryChance = CACULATION_TOOL.ZERO;

  while (CopyUserCash > CACULATION_TOOL.ZERO) {
    userTryChance += CACULATION_TOOL.ONE;
    CopyUserCash -= CACULATION_TOOL.ONETHOUSAN;
  }
  return userTryChance;
}

export default CalculateTryChance;
