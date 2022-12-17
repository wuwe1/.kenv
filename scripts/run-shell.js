// Name: Run Shell Command
// Description: Run shell command and display stdout
// Shortcut: cmd control ;
// Author: wuwe1
// Twitter: @wuwe19

import "@johnlindquist/kit"

const result = (await exec(`${await arg("Commands")}`)).stdout
if (result.length > 0) {
  await div(md("```\n" + result + "\n```"))
}
