function calculateTotalReturn(caluatedUserGetCash, userCash) {
  const prizes = [5000, 50000, 1500000, 30000000, 2000000000];
  const HUNDRED = 100;
  const ZERO = 0;
  let totalSum = sumUserCash(caluatedUserGetCash, prizes);
  if (totalSum === ZERO) return "0.0";

  const rate = (totalSum / userCash) * HUNDRED;

  return rate.toFixed(1);
}

function sumUserCash(caluatedUserGetCash, prizes) {
  let sum = 0;
  for (let index = 0; index < 5; index++) {
    sum += caluatedUserGetCash[index] * prizes[index];
  }
  return sum;
}
export default calculateTotalReturn;
