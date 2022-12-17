// Name: Fullscreen App
// Description: Make active app full screen
// Author: wuwe1
// Twitter: @wuwe19
// Shortcut: cmd control m

import "@johnlindquist/kit"

const {workArea, bounds} = await getActiveScreen()

const {width, height} = workArea
const {x, y} = bounds

const top = y,
  left = x,
  right = width,
  bottom = height

setActiveAppBounds({
  top,
  left,
  right,
  bottom
})
