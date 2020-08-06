import { timeStamp } from 'console'

import { promisify } from 'util'
import { imageSize } from 'image-size'
import glob from 'glob'

describe('Headshots are square', () => {
  const files = glob.sync('public/images/headshot/*')
  test.each(files)('%s', () => {
    files.forEach((file) => {
      const dimensions = imageSize(file)
      expect(dimensions.width).toBe(dimensions.height)
    })
  })
})
