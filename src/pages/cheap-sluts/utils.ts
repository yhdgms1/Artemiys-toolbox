export const createHrefUrl = (
  template: string,
  name: string,
  picture: string
): string => {
  const baseUrl = 'https://cheap-sluts.pages.dev/'

  const width =
    '?width=' + (template === 'gay' || template === 'azerbaijan' ? 1920 : 411)

  const height =
    '&height=' + (template === 'gay' || template === 'azerbaijan' ? 1080 : 823)

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
