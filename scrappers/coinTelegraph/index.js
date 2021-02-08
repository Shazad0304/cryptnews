const Xray = require('x-ray')
const promiseScrap = require('../config')

const coinTelegraph = () =>
  promiseScrap('https://cointelegraph.com/', '.main-page__posts', [
    {
      title: ['.post-card__title'],
      link: ['.post-card__header > a@href'],
      image: ['.post-listing__item * img'],
    }
  ])

module.exports = coinTelegraph
