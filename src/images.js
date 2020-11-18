/*
 * images loading and storage
 *
 * builds up a datastructure of image-tiles in three levels
 * and two sides.
 *
 * Refer to images via, e.g. `images.upper.left[0]`
 */

const images = {
  basePath: 'assets/images',

  upper: {
    left: [],
    right: []
  },

  middle: {
    left: [],
    right: []
  },

  lower: {
    left: [],
    right: []
  },

  load: () => {
    const promises = []

    // load images a1 to x6
    for (let letter of 'abcdefghijk'.split('')) {
      for (let i of [1, 2, 3, 4, 5, 6]) {
        promises.push(new Promise(resolve => {
          const name = `${letter}${i}`
          const filename = `${name}.png`

          const img = document.createElement('img')
          img.onload = resolve
          img.filename = filename
          img.src = `${images.basePath}/${filename}`

          switch (i) {
            case 1:
              images.upper.left.push(img)
              break
            case 2:
              images.upper.right.push(img)
              break
            case 3:
              images.middle.left.push(img)
              break
            case 4:
              images.middle.right.push(img)
              break
            case 5:
              images.lower.left.push(img)
              break
            case 6:
              images.lower.right.push(img)
              break
          }
        }))
      }
    }

    return Promise.all(promises)
  }
}

