export default function getScrollAnimation() {
	return ({
    offscreen: {
      y: 120,
      opacity: 0,
    },
    onscreen: ({duration = 1.3} = {}) =>  ({
      y: 0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}