/**
 * 最大连续为1的个数
 */

var longestOnes = function (arr, k) {
  let len = arr.length;
  let maxOneLength = 0;
  let r = 0;
  let l = 0;
  let miK = k; // 剩余K
  while (r < len) {
    if (arr[r] === 0) {
      if (miK > 0) {
        r++;
        miK--;
      } else {
        if (arr[l] === 0) {
          miK++;
        }
        l++;
        continue;
      }
    } else {
      r++;
    }
    maxOneLength = Math.max(maxOneLength, r - l);
  }
  return maxOneLength;
};

var longestOnes1 = function (nums, k) {
  const n = nums.length;
  let left = 0,
    lsum = 0,
    rsum = 0;
  let ans = 0;
  for (let right = 0; right < n; ++right) {
    rsum += 1 - nums[right];
    while (lsum < rsum - k) {
      lsum += 1 - nums[left];
      ++left;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

const arr = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
const k = 3;

console.log(longestOnes1(arr, k));
