export const animation = {
    initial: { y: 1000, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        }
    },
    exit: {
        y: -1000,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: 'easeIn'
        }
    }
}
