// Name: Code Arena (c4) Reports
// Description: List Reports on Code Arena
// Author: wuwe1
// Twitter: @wuwe19

import "@johnlindquist/kit"
const REPO = "code-423n4/code423n4.com"
const REPORTS_PATH = "_data/reports/"
const paths = (await $`gh api "repos/${REPO}/git/trees/main?recursive=1" --jq ".tree"`).stdout
const reports = JSON.parse(paths)
  .filter(p => p.path.includes(REPORTS_PATH) && p.type === 'blob')
  .map(i => i.path.slice(REPORTS_PATH.length) )
const report = await arg("Select a Report", reports.reverse())
const reportRawURL = `https://raw.githubusercontent.com/${REPO}/main/${REPORTS_PATH}${report}`
const buffer = await download(reportRawURL)
await div(md(buffer.toString()))
