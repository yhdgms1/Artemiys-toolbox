export const setTitle = (text: string) => {
  try {
    document.querySelector('title').textContent = text
  } catch (_) {}
  return null
}
