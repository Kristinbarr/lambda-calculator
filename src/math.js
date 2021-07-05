// export const add = (x, y) => {
//   return x + y
// }

// export const subtract = (x, y) => {
//   return x - y
// }

// export const multiply = (x, y) => {
//   return x * y
// }

// export const divide = (x, y) => {
//   return x / y
// }

export default function math(x, y, op) {
  x = parseInt(x)
  y = parseInt(y)

  if (op === '+') {
    return x + y
  } else if (op === '-') {
    return x - y
  } else if (op === '*') {
    return x * y
  } else if (op === '/') {
    return x / y
  }
}
