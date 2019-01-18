export { Code } from './Code'

import { test } from './test'

// import libs into global scope
Object.assign(global, {
  test
})
