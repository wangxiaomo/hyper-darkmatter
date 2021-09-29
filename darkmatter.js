const backgroundColor = "#1c1f26"
const foregroundColor = "#c0c5ce"
const borderColor = backgroundColor
const cursorColor = foregroundColor

const red = "#ff0000"
const green = "#76f705"
const yellow = "#fce21c"
const blue = "#1f9de0"
const magenta = "#da8bfc"
const cyan = "#22bae4"
const lightCyan = "#58dbff"
const lightGreen = "#b6ff75"
const lightBlack = "#515a61"
const lightBlue = blue
const lightMagenta = "#ebb9e6"

const extendConfig = ({css, ...config}) => ({
  ...config,

  backgroundColor,
  foregroundColor,
  cursorColor,
  borderColor,
  colors: {
    black: backgroundColor,
    white: foregroundColor,
    red,
    green,
    blue,
    cyan,
    magenta,
    yellow,

    lightRed: red,
    lightYellow: yellow,

    lightMagenta,
    lightBlack,

    lightWhite: foregroundColor,

    lightCyan,
    lightBlue,
    lightGreen
  },
  css: `
    ${css}

    .tab_active {
      background: rgba(101, 115, 126, .10);
    }
  `
})

module.exports = extendConfig
