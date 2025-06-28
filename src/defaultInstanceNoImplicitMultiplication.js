import * as all from './factoriesAny.js'
import { create } from './core/create.js'

const math = create(all)
math.config({
  implicitMultiplication: false
})
export default math
