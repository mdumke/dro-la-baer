const app = {
  currentImages: {
    upper: {
      left: 0,
      right: 0
    },

    middle: {
      left: 0,
      right: 0
    },

    lower: {
      left: 0,
      right: 0
    }
  },

  drawImage: (canvasId, img) => {
    const canvas = document.querySelector(`#canvas${canvasId}`)
    const context = canvas.getContext('2d')
    context.drawImage(img, 0, 0, canvas.width, canvas.height)
  },

  render: () => {
    app.drawImage(0, images.upper.left[app.currentImages.upper.left])
    app.drawImage(1, images.upper.right[app.currentImages.upper.right])
    app.drawImage(2, images.middle.left[app.currentImages.middle.left])
    app.drawImage(3, images.middle.right[app.currentImages.middle.right])
    app.drawImage(4, images.lower.left[app.currentImages.lower.left])
    app.drawImage(5, images.lower.right[app.currentImages.lower.right])
  },

  handleClick: i => {
    switch (i) {
      case 0:
        if (app.currentImages.upper.left > 0) {
          app.currentImages.upper.left--
          app.currentImages.upper.right--
        }
        break
      case 1:
        if (app.currentImages.upper.left < images.upper.left.length - 1) {
          app.currentImages.upper.left++
          app.currentImages.upper.right++
        }
        break
      case 2:
        if (app.currentImages.middle.left > 0) {
          app.currentImages.middle.left--
          app.currentImages.middle.right--
        }
        break
      case 3:
        if (app.currentImages.middle.left < images.middle.left.length - 1) {
          app.currentImages.middle.left++
          app.currentImages.middle.right++
        }
        break
      case 4:
        if (app.currentImages.lower.left > 0) {
          app.currentImages.lower.left--
          app.currentImages.lower.right--
        }
        break
      case 5:
        if (app.currentImages.lower.left < images.lower.left.length - 1) {
          app.currentImages.lower.left++
          app.currentImages.lower.right++
        }
        break
    }

    app.render()
  },

  registerListeners: () => {
    for (let i = 0; i < 6; i++) {
      document
        .querySelector(`#canvas${i}`)
        .addEventListener('click', () => {
          app.handleClick(i)
        })
      }
  },

  main: async () => {
    await images.load()
    app.registerListeners()
    app.render()
  }
}
