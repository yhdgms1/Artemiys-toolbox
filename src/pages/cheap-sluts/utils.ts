export const createHrefUrl = (
  template: string,
  name: string,
  picture: string,
  w?: number,
  h?: number
): string => {
  const baseUrl = 'https://cheap-sluts.pages.dev/'

  const width =
    '?width=' +
    (w || (template === 'gay' || template === 'azerbaijan' ? 1920 : 411))

  const height =
    '&height=' +
    (h || (template === 'gay' || template === 'azerbaijan' ? 1080 : 823))

  return (
    baseUrl +
    template +
    width +
    height +
    '&name=' +
    encodeURIComponent(name) +
    '&picture=' +
    encodeURIComponent(picture) +
    '&download=true'
  )
}
