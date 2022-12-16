// Name: Browser Bookmarks & History
// Description: Open a URL from browser's history and bookmarks
// Author: wuwe1
// Twitter: @wuwe19

import "@johnlindquist/kit"

const fetchers = [
  async () => {
    const obj = await readFile(
      home("Library/Application Support/BraveSoftware/Brave-Browser/Default/Bookmarks")
    )
    return Object
      .values(JSON.parse(obj).roots)
      .reduce((acc, cur) => [...acc, ...cur.children], [])
  },
]

let bmks = []
for (let f of fetchers) {
  bmks = [...bmks, ...(await f())]
}

const url = await arg(
  "Select a URL",
  bmks.reverse().map(b => {
    return {
      name: b.name,
      description: b.url,
      value: b.url
    }
  }))
browse(url)
