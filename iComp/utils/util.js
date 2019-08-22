const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//  解决toFixed 原生精度丢失
function tofixed(num, n) {
  num = Math.round(num * Math.pow(10, n)) / Math.pow(10, n);
  return (num).toFixed(n);
}

module.exports = {
  formatTime: formatTime,
  tofixed: tofixed
}