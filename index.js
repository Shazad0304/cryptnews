const scrappers = require('./scrappers')

Promise.all([
    scrappers()
  ]).then((x) => {
      console.log(x[0][0].title)
      console.log(x[0][0].link)
      console.log(x[0][0].image)
    })