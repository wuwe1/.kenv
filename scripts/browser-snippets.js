// Name: Browser Snippets
// Description: Execute JavaScript Snippets in Browser
// Author: wuwe1
// Twitter: @wuwe19

import "@johnlindquist/kit"

const browser = "Brave Browser"
const scripts = [
  {
    name: "Extract URLs",
    script: `Array.from(document.querySelectorAll('a')).map(el => el.href).join(' ')`,
    postFn: async function(val) {
      await div(md(val.split(' ').join('\n\n')))
    }
  }
]

const idx = await arg("Select a Script", scripts.map((s,i) => {
  return {
    name: s.name,
    value: i,
    preview: async () => {
      return await highlight(`
~~~js
 ${s.script}
~~~
      `)
    }
  }
}))

const {script, postFn} = scripts[idx]

let value = await applescript(`
tell application "${browser}" to tell window 1
	get execute active tab javascript "

${script}

"
end tell
`)

await postFn(value)
