export const createStars = (container: HTMLDivElement) => {
    // Clear any existing stars
    container.innerHTML = ''

    // Create stars
    const starCount = 300

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div')
        star.className = 'star'

        // Random position
        const x = Math.random() * 100
        const y = Math.random() * 100

        const size = 1

        // Random animation delay
        const delay = Math.random() * 5

        star.style.left = `${x}%`
        star.style.top = `${y}%`
        star.style.width = `${size}px`
        star.style.height = `${size}px`
        star.style.animationDelay = `${delay}s`
        star.style.borderRadius = '50%'

        // Add occasional glow effect to some stars
        if (Math.random() > 0.7) {
            star.style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.3)'
        } else if (Math.random() > 0.9) {
            star.style.boxShadow = '0 0 10px 2px var(--accent)'
        } else if (Math.random() > 0.9) {
            star.style.boxShadow = '0 0 10px 2px var(--secondary)'
        }

        container.appendChild(star)
    }
}
