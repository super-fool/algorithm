/**
 * 串联所有单词的子串
 * 1. 每个单词长度相同
 * 2. 找出连续单词子串
 * 3. 子串中的单词不可重复
 * 1. 该如何匹配单词？
 */
var findSubString = function (s = "", words = []) {
  const res = [];
  const m = words.length; // 单词组长度
  n = words[0].length; // 单词长度
  ls = s.length;
  for (let i = 0; i < n; i++) {
    if (i + m * n > ls) {
      break;
    }
    const differ = new Map(); // 窗口中单词频次 和 words的单词频次之差。
    
    for (let j = 0; j < m; j++) { // 将s使用长度n进行分解
      // 记录单词的频率
      const word = s.substring(i + j * n, i + (j + 1) * n);
      differ.set(word, (differ.get(word) || 0) + 1);
    }

    for (const word of words) {
      differ.set(word, (differ.get(word) || 0) - 1);
      if (differ.get(word) === 0) {
        differ.delete(word);
      }
    }

    for (let start = i; start < ls - m * n + 1; start += n) {
      if (start !== i) {
        let word = s.substring(start + (m - 1) * n, start + m * n);
        differ.set(word, (differ.get(word) || 0) + 1);
        if (differ.get(word) === 0) {
          differ.delete(word);
        }
        word = s.substring(start - n, start);
        differ.set(word, (differ.get(word) || 0) - 1);
        if (differ.get(word) === 0) {
          differ.delete(word);
        }
        word = s.substring(start - n, start);
      }
    }
    if (differ.size === 0) {
      res.push(start);
    }
  }
  return res;
};

const words = ["hugo", "mode", "toto"];
const s = "hugohhugomodetoto";

findSubString(s, words);
