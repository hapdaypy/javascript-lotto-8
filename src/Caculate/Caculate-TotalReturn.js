function caculateTotalRetun(caluatedUserGetCash, userCash) {
  const prizes = [5000, 50000, 1500000, 30000000, 2000000000];
  const hundred = 100;

  let totalSum = sumUserCash(caluatedUserGetCash, prizes);
  if (totalSum === 0) return "0.0";

  const rate = (totalSum / userCash) * hundred;

  return rate.toFixed(1);
}

function sumUserCash(caluatedUserGetCash, prizes) {
  let sum = 0;
  for (let index = 0; index < 5; index++) {
    sum += caluatedUserGetCash[index] * prizes[index];
  }
  return sum;
}
export default caculateTotalRetun;
