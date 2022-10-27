/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = new Array(amount + 1);
  const dp = (amount) => {
    if (amount < 0) return -1;
    if (amount == 0) return 0;
    if (memo[amount]) return memo[amount];
    let minCount = Infinity;
    for (coin of coins) {
      let subProblem = dp(amount - coin);
      if (subProblem === -1) continue;
      minCount = Math.min(subProblem + 1, minCount);
    }
    memo[amount] = minCount === Infinity ? -1 : minCount;
    return memo[amount];
  };
  const res = dp(amount);
  return res === Infinity ? -1 : res;
};
