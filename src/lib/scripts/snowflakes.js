export function initSnowflakes(container) {
  const canvas = document.getElementById('canvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')

  function resize() {
    // the snowflakes should only stay in the container height and witdth
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
  }

  // resize the container
  resize()
  window.addEventListener('resize', resize)

  const particlesOnScreen = 245
  const particlesArray = []

  let w = canvas.width = window.innerWidth
  let h = canvas.height = window.innerHeight

  function random(min, max) {
    return min + Math.random() * (max - min)
  }

  function createSnowflakes() {
    particlesArray.length = 0
    for (let i = 0; i < particlesOnScreen; i++) {
      particlesArray.push({
        x: Math.random() * w,
        y: Math.random() * h,
        opacity: random(0.4, 1),   
        speedX: random(-0.5, 0.5),
        speedY: random(1, 3),
        radius: random(0.5, 4)
      })
    }
  }

  function drawSnowFlakes() {
    for (let i = 0; i < particlesArray.length; i++) {
      const p = particlesArray[i]

      const gradient = ctx.createRadialGradient(
        p.x, p.y, 0,
        p.x, p.y, p.radius
      )

      gradient.addColorStop(
        0,
        `rgba(255, 255, 255, ${p.opacity})`
      )

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }
  }

  function moveSnowFlakes() {
    for (let i = 0; i < particlesArray.length; i++) {
      const p = particlesArray[i]

      p.x += p.speedX
      p.y += p.speedY

      if (p.y > h) {
        p.x = Math.random() * w
        p.y = -10
      }
    }
  }

  function updateSnowFall() {
    ctx.clearRect(0, 0, w, h)
    drawSnowFlakes()
    moveSnowFlakes()
  }

  createSnowflakes()
  const interval = setInterval(updateSnowFall, 50)

  return () => {
    clearInterval(interval)
    window.removeEventListener('resize', clientResize)
  }
}