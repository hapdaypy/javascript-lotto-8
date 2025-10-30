function CaculateTryChance(userCash) {
  let CopyUserCash = userCash;
  let userTryChance = 0;

  while (CopyUserCash > 0) {
    userTryChance += 1;
    CopyUserCash -= 1000;
  }
  return userTryChance;
}

export default CaculateTryChance;
