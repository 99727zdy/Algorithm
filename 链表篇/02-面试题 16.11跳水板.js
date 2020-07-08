/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */

var divingBoard = function (shorter, longer, k) {
  if (k == 0) return [];//当k为零，表示没有数字要相加，所以必定返回[]
  if (shorter == longer) return [k * shorter];//当长度都相等，那就只有一种情况，就是k*固定长度
  const res = [];//定义一个数组，储存返回的结果
  for (let i = 0; i <= k; i++) {
    res.push(i * longer + (k - i) * shorter); //题目好像从短到长排列，那就从0个longer开始吧
  }
  return res;//返回含有所有可能结果的从小到大排列的数组
  //切记前两个判断不能删除，因为for循环无法返回空数组，第二种情况会返回一个每个元素相同的字符串，不满足题意
  //如果你要加在循环里面判断的话，是多此一举，可能每次还要多循环两个语句
};
