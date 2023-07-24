let intersectionObserver: IntersectionObserver | null;

function ensureIntersectionObserver() {
    intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
            entry.target.dispatchEvent(new CustomEvent(eventName))
        })
    })
}

export default function viewport(element: HTMLDivElement) {
    ensureIntersectionObserver()
    if (!intersectionObserver) return
    intersectionObserver.observe(element);

    return {
        destroy() {
            intersectionObserver?.unobserve(element)
        }
    }
}