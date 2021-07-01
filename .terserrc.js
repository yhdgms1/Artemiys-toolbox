import terserConfigAtomic from 'terser-config-atomic'

export default {
  ...terserConfigAtomic,
  safari10: false,
  compress: {
    ...terserConfigAtomic.compress,
    ecma: 2020,
  },
}
