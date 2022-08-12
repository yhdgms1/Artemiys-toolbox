import { cdashs } from '~/lib/constants'

const baseUrl = `https://${cdashs}.pages.dev/`

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

  const url = new URL(template, baseUrl)

  const width =
    w || (template === 'gay' || template === 'azerbaijan' ? 1920 : 411)

  const set = url.searchParams.set.bind(url.searchParams)

  set('width', width.toString())

  const height =
    h || (template === 'gay' || template === 'azerbaijan' ? 1080 : 823)

  set('height', height.toString())

  set('name', encodeURIComponent(name))
  set('picture', encodeURIComponent(picture))
  set('download', 'true')

  set('format', format || 'png')

  return url.toString()
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
