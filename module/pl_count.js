// 私信和通知接口
module.exports = (query, request) => {
  const data = {}
  return request('POST', `https://music.163.com/weapi/pl/count`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
