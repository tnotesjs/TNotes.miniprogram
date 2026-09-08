const express = require('express')
const router = express.Router()

const DELAY = 1 * 1000

const correctInfo = {
  loginId: 'Tdahuyou',
  password: '123123',
}

// 处理 get 请求
router.get('/', function (req, res) {
  console.log('req.query>>>', req.query) // 获取客户端传递过来的 GET 请求的参数
  if (
    req.query.loginId === correctInfo.loginId &&
    req.query.password === correctInfo.password
  ) {
    setTimeout(() => {
      res.send({
        code: 0,
        message: 'ok',
        data: {
          name: 'zhangsan',
          age: 18,
        },
      })
    }, DELAY)
  } else {
    res.send({
      code: -1,
      message: '用户名或密码错误',
      data: null,
    })
  }
})

// 处理 post 请求
router.post('/test', function (req, res) {
  console.log('req.body>>>', req.body) // 获取客户端传递过来的的 POST 请求的参数
  if (
    req.body.loginId === correctInfo.loginId &&
    req.body.password === correctInfo.password
  ) {
    setTimeout(() => {
      res.send({
        code: 0,
        message: 'ok',
        data: {
          name: 'lisi',
          age: 19,
        },
      })
    }, DELAY)
  } else {
    res.send({
      code: -1,
      message: '用户名或密码错误',
      data: null,
    })
  }
})

module.exports = router