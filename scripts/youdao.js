// Name: YouDao Dictionary
// Description: Lookup word in youdao dictionary
// Author: wuwe1
// Twitter: @wuwe19

import "@johnlindquist/kit"

let input = await arg("Word or Text")
await say(input, {
  rate: 1.1,
  name: "siri"
})
input = input.split(" ").join("+")

const result = JSON.parse(await $`curl -fsSL 'https://dict.youdao.com/suggest?num=5&ver=3.0&doctype=json&cache=false&le=en&q=${input}'`)
const entries = result?.data?.entries
if (entries.length === 0) {
  await div(md("nop"))
} else {
  const content = entries.map(({entry, explain}) => {
    return `- ${entry}:\n` + explain.split('; ').map(i => `  - ${i}\n`).join("")
  }).join("")
  await div(md(content))
}

