// Name: Left App
// Description: Move active app to the left
// Author: wuwe1
// Twitter: @wuwe19
// Shortcut: cmd control h

import "@johnlindquist/kit"

const {workArea, bounds} = await getActiveScreen()

const {width, height} = workArea
const {x, y} = bounds

const top = y,
  left = x,
  right = width / 2,
  bottom = height

setActiveAppBounds({
  top,
  left,
  right,
  bottom
})
