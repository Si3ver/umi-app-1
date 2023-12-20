/** 格式化剩余时间 */
export function formatRemainTime(time?: number) {
  // 当初始化时间为 undefined 时返回
  if(time === void 0) return '0'
  const addZero = (n: number) => n >= 10 ? n : ('0' + n)
  const timeArr: {s: string, t: number}[] = [
    {s: '天', t: 86400},
    {s: '时', t: 3600},
    {s: '分', t: 60},
    {s: '秒', t: 1},
  ]
  time = Math.ceil(time / 1000)
  let res = ''
  for(let i = 0; i < timeArr.length - 1; i++) {
    const item = timeArr[i]
    if(time >= item.t) {
      const tartget = ~~(time / item.t)
      res += (!i ? tartget : addZero(tartget)) + item.s
      time %= item.t
    }
  }
  res += addZero(~~(time)) + timeArr.at(-1)!.s
  return res
}
