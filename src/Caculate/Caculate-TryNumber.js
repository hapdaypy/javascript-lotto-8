CACULATION_TOOL = {
  ZERO: 0,
  ONETHOUSAN: 1000,
  ONE: 1,
};

function CaculateTryChance(userCash) {
  let CopyUserCash = userCash;
  let userTryChance = ZERO;

  while (CopyUserCash > ZERO) {
    userTryChance += ONE;
    CopyUserCash -= ONETHOUSAN;
  }
  return userTryChance;
}

export default CaculateTryChance;
