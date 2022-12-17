// Name: Right App
// Description: Move active app to the right
// Author: wuwe1
// Twitter: @wuwe19
// Shortcut: cmd control l

import "@johnlindquist/kit"

const {workArea, bounds} = await getActiveScreen()

const {width, height} = workArea
const {x, y} = bounds

const top = y,
  left = x + width / 2,
  right = width,
  bottom = height

setActiveAppBounds({
  top,
  left,
  right,
  bottom
})
