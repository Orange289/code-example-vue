<template>
  <canvas width="100%" height="100%"></canvas>
</template>

<script>
import * as THREE from 'three'

export default {
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      texture: null,
      ww: null,
      wh: null,
      particles: null,
      centerVector: new THREE.Vector3(0, 0, 0),
      requestAnimationFrameItem: false,
      // eslint-disable-next-line unicorn/number-literal-case
      backgroundColor: 0xffffff,
      // eslint-disable-next-line unicorn/number-literal-case
      dotsColor: 0xb5f1d0,
      textureImage: '/static/images/careers/about/transparentMap.png'
    }
  },
  mounted() {
    if (process.browser) {
      this.init()
    }
  },
  beforeDestroy() {
    if (this.requestAnimationFrameItem) {
      cancelAnimationFrame(this.requestAnimationFrameItem)
    }

    this.renderer = null
    this.scene = null
    this.camera = null
    this.texture = null
    this.ww = null
    this.wh = null
    this.particles = null

    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    calcWidthAndHeight() {
      this.ww = this.$parent.$el.clientWidth
      this.wh = this.$parent.$el.clientHeight
    },
    getImageData(image) {
      const canvas = document.createElement('canvas')
      canvas.width = image.width
      canvas.height = image.height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(image, 0, 0)

      return ctx.getImageData(0, 0, image.width, image.height)
    },

    drawTheMap() {
      const geometry = new THREE.BufferGeometry()
      const material = new THREE.PointsMaterial({
        size: 3,
        color: this.dotsColor,
        sizeAttenuation: false
      })
      const positions = []
      const destinations = []
      const speeds = []

      for (let y = 0, y2 = this.imagedata.height; y < y2; y += 2) {
        for (let x = 0, x2 = this.imagedata.width; x < x2; x += 2) {
          if (
            this.imagedata.data[x * 4 + y * 4 * this.imagedata.width + 3] > 128
          ) {
            const vertex = new THREE.Vector3()
            vertex.x = Math.random() * 1000 - 500
            vertex.y = Math.random() * 1000 - 500
            vertex.z = -Math.random() * 500

            positions.push(vertex)

            destinations.push(x - this.imagedata.width / 2)
            destinations.push(-y + this.imagedata.height / 2)
            destinations.push(0)

            speeds.push(Math.random() / 200 + 0.015)
          }
        }
      }

      geometry.setFromPoints(positions)
      geometry.setAttribute(
        'destinations',
        new THREE.Float32BufferAttribute(destinations, 3)
      )
      geometry.setAttribute(
        'speeds',
        new THREE.Float32BufferAttribute(speeds, 1)
      )
      geometry.computeVertexNormals()

      this.particles = new THREE.Points(geometry, material)

      this.scene.add(this.particles)

      this.requestAnimationFrameItem = requestAnimationFrame(this.render)
    },

    init() {
      this.calcWidthAndHeight()

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$el,
        antialias: true,
        alpha: true // for transparent background
      })
      // this.renderer.setClearColor(this.backgroundColor)
      this.renderer.setSize(this.ww, this.wh)

      this.scene = new THREE.Scene()

      this.camera = new THREE.PerspectiveCamera(
        50,
        this.ww / this.wh,
        0.1,
        10000
      )
      this.camera.position.set(-100, 0, this.ww < 1248 ? 800 : 620)
      this.camera.lookAt(this.centerVector)
      this.scene.add(this.camera)

      this.texture = new THREE.TextureLoader().load(this.textureImage, () => {
        this.imagedata = this.getImageData(this.texture.image)
        this.drawTheMap()
        this.$emit('init')
      })

      window.addEventListener('resize', this.onResize)
    },

    onResize() {
      this.calcWidthAndHeight()
      this.renderer.setSize(this.ww, this.wh)
      this.camera.aspect = this.ww / this.wh
      this.camera.updateProjectionMatrix()
    },

    render(a) {
      const positions = this.particles.geometry.attributes.position.array
      const destinations = this.particles.geometry.attributes.destinations.array
      const speeds = this.particles.geometry.attributes.speeds.array

      for (let i = 0; i < positions.length; i += 3) {
        const speedIndex = i / 3
        positions[i] += (destinations[i] - positions[i]) * speeds[speedIndex]
        positions[i + 1] +=
          (destinations[i + 1] - positions[i + 1]) * speeds[speedIndex]
        positions[i + 2] +=
          (destinations[i + 2] - positions[i + 2]) * speeds[speedIndex]
      }

      this.particles.geometry.attributes.position.needsUpdate = true

      this.camera.position.x = Math.sin(a / 5000) * 200
      this.camera.lookAt(this.centerVector)

      this.renderer.render(this.scene, this.camera)
      this.requestAnimationFrameItem = requestAnimationFrame(this.render)
    }
  }
}
</script>

<style lang="postcss" scoped>
canvas {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
