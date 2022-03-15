const baseUrl = 'https://cheap-sluts.pages.dev/'

interface Options {
  /**
   * Template
   */
  template: string
  /**
   * Name of the person
   */
  name: string
  /**
   * URL to the picture of the person
   */
  picture: string
  /**
   * Width of image
   */
  width?: number
  /**
   * Height of image
   */
  height?: number
  /**
   * Format of the image
   */
  format?: 'svg'
}

export const createHrefUrl = (options: Options): string => {
  const { template, name, picture, width: w, height: h, format } = options

  const searchParams = new URLSearchParams()

  const width =
    w || (template === 'gay' || template === 'azerbaijan' ? 1920 : 411)
  searchParams.set('width', width.toString())

  const height =
    h || (template === 'gay' || template === 'azerbaijan' ? 1080 : 823)
  searchParams.set('height', height.toString())

  searchParams.set('name', encodeURIComponent(name))
  searchParams.set('picture', encodeURIComponent(picture))
  searchParams.set('download', 'true')

  searchParams.set('format', format || 'png')

  return baseUrl.concat(template, '?', searchParams.toString())
}

export const apiUrl = baseUrl + 'api/'

export const templates = [
  'slut',
  'crime',
  'gay',
  'muslim',
  'azerbaijan',
  'mom',
  'svinoros',
]
