for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const star = document.createElement('div')
      star.style.position = 'absolute'
      star.style.width = '2px'
      star.style.height = '2px'
      star.style.backgroundColor = 'white'
      star.style.borderRadius = '50%'
      star.style.left = Math.random() * window.innerWidth + 'px'
      star.style.top = Math.random() * window.innerHeight + 'px'
      document.body.appendChild(star)
    }, i * 100)
  }

  for (let i = 0; i < Infinity; i++) {
    console.log(i)
  }