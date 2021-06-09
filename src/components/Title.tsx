export const Title = (props: { children: any }): null => {
  try {
    document.querySelector('title').textContent =
      typeof props.children === 'string'
        ? props.children
        : props.children.join('')
  } catch (_) {}
  return null
}
