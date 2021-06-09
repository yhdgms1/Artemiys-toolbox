export const Title = (props) => {
    try {
        document.querySelector('title').textContent = typeof props.children === 'string' ? props.children : props.children.join('')
    } catch (_) {}

}