import tmpl from 'templite'

export declare type LocaleValue = string | number
export declare type BaseLocale = Record<string, LocaleValue>
export declare type LocaleKeys<
  Locale extends BaseLocale,
  Key extends string = Extract<keyof Locale, string>
> = Key
export declare type Params<Value extends LocaleValue> =
  Value extends `${infer Head}{{${infer Param}}}${infer Tail}`
    ? [Param, ...Params<Tail>]
    : []
export declare type ParamsObject<Value extends LocaleValue> = Record<
  Params<Value>[number],
  LocaleValue
>

type Locales = Readonly<Record<string, Readonly<Record<string, string>>>>

const i18n = <T extends Locales>(obj: T) => {
  let locale = ''
  let tree = obj

  type Keys = T[keyof T]
  type Lang = keyof T | (string & Record<never, never>)
  type Table = Readonly<Record<keyof Keys, string>>

  type ExaString = string & Record<never, never>

  // prettier-ignore
  function t<Key extends LocaleKeys<T[keyof T]>, Value extends LocaleValue = T[keyof T][Key]>(key: Key, params: ParamsObject<Value> = {}) {
    let val = tree[locale][key]

    return tmpl(val, params)
  }
  // @ts-ignore
  function t(key: ExaString, params?: any): string

  return {
    set(lang: Lang, table: Table) {
      ;(tree[lang] as any) = Object.assign(tree[lang] || {}, table)
    },
    locale(lang: Lang): Lang {
      return (locale = lang.toString() || locale)
    },
    table(lang: Lang): Table {
      return tree[lang]
    },
    t,
  }
}

export { i18n as rosetta }
