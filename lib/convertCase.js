var convert = function (input) {
  return input.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, function (m, p1) { return p1.toUpperCase() })
}

var processObject = function (input, options, out) {
  switch (typeof input) {
    case 'object':
      for (var key in input) {
        out = !out ? {} : out
        if (options.deep) {
          out[camelcase(key, options)] = (typeof input[key] === 'object' && input[key] !== null && input[key] !== undefined) ? camelcase(input[key], options, out[camelcase(key, options)]) : input[key]
        } else {
          out[camelcase(key, options, out)] = input[key]
        }
      }
      break
    default:
      out = convert(input.trim())
      break
  }
  return out
}

var processArray = function (input, options, out) {
  return Object.keys(input).map(key => { /* console.log('key--', key, out); */ return processObject(input[key], options, (out && out[key] ? out[key] : null)) })
}

var preserveCamelCase = function (input) {
  var isLastCharLower = false
  var isLastCharUpper = false
  var isLastLastCharUpper = false

  for (var i = 0; i < input.length; i++) {
    const c = input[i]

    if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
      input = input.slice(0, i) + '-' + input.slice(i)
      isLastCharLower = false
      isLastLastCharUpper = isLastCharUpper
      isLastCharUpper = true
      i++
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(c) && c.toLowerCase() === c) {
      input = input.slice(0, i - 1) + '-' + input.slice(i - 1)
      isLastLastCharUpper = isLastCharUpper
      isLastCharUpper = false
      isLastCharLower = true
    } else {
      isLastCharLower = c.toLowerCase() === c
      isLastLastCharUpper = isLastCharUpper
      isLastCharUpper = c.toUpperCase() === c
    }
  }

  return input
}

var camelcase = (input, options, out) => {
  if (!input) {
    throw new Error('Invalid input provided.')
  }

  options = Object.assign({
    deep: false
  }, options)

  var output

  switch (typeof input) {
    case 'string':
      const hasUpperCase = input !== input.toLowerCase()
      if (hasUpperCase) {
        input = preserveCamelCase(input)
      }
      output = convert(input.trim())
      break
    case 'object':
      if (Array.isArray(input)) {
        output = processArray(input, options, out)
      } else {
        output = processObject(input, options, out)
      }
  }
  return output
}

module.exports.camelcase = camelcase
