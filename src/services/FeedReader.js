import got from 'got'
import parser from 'node-feedparser'

// this URL will save lot of hassle
let corsAnyWhere = 'https://cors-anywhere.herokuapp.com/'

export const fetchFeed = (feedUrl) => {
  // Promise!! for later processing in the service consumer
  return new Promise((resolve, reject) => {
    got(corsAnyWhere + feedUrl) // see?! this way, CORS will never get us mad, for now ;)
      .then((data) => {
        parser(data.body, {
          // option itemTags filters which article elements to return
          itemTags: ['title', 'summary', 'image', 'link', 'origlink', 'author', 'date']
        }, function (err, {items}) {
          if (err) {
            reject(err)
          }
          resolve(items)
        })
      })
      .catch((error) => {
        reject(error)
      })
  })
}
