const Xray = require('x-ray')

const x = Xray({
  filters: {
    trim: d => d.trim(),
    getfirstImage: d => d
  }
})

const promiseScrap = (url, scope, selector) =>
  new Promise((resolve, reject) =>{
    setTimeout(() => {
      x(url, scope, selector)((e, data) => (e ? reject(e) : resolve(data)))
    },20000)
  }
    
  )

module.exports = promiseScrap
