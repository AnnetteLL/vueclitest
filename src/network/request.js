import axios from 'axios'

// 4.封装axios
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // axios拦截器的使用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}


// // 1.axios的基本使用
// axios({
//   // url: 'httpbin.org/'
//   url: 'http://152.136.185.210:7878/api/hy66/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'http://152.136.185.210:7878/api/hy66/home/data',
//   // get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   },
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// // 2.axios发送并发请求
//   // 使用全局的axios和对应的配置进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
// axios.defaults.timeout = '5000'
// axios.all([axios({
//   url: '/home/multidata',
// }), axios({
//   url: '/home/data',
//   // get请求的参数拼接
//   params: {
//     type: 'sell',
//     page: 2
//   },
// })])
// .then(axios.spread((res1 ,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 3.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:7878/api/hy66',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 2
//   },
// }).then(res => {
//   console.log(res);
// })