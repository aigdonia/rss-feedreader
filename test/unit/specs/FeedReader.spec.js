import { fetchFeed } from '@/services/FeedReader'

const validRSSFeed = 'http://feeds.bbci.co.uk/news/technology/rss.xml'
const invalidRSSFeed = 'http://feeds.feedburner.com/slashfil'

describe('FeedReader', () => {
  it('fetchFeed should fetch valid RSS and return set of feed elements', () => {
    let items = []
    expect(items.length).to.equal(0)
    fetchFeed(validRSSFeed)
      .then((articles) => {
        items = articles
        expect(items.length).toBeGreaterThan(0)
      })
  })

  it('fetchFeed should reject invalid RSS URL and return an error', () => {
    let items = []
    expect(items.length).to.equal(0)
    fetchFeed(invalidRSSFeed)
      .then((articles) => {
        items = articles // this will not be executed
      })
      .catch((error) => {
        expect(error).not.toBeNull()
      })
  })
})
