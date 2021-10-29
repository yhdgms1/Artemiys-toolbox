export const setTitle = (text: string) => {
  try {
    ;(document.querySelector('title') as HTMLTitleElement).textContent = text
  } catch {}
  return null
}
