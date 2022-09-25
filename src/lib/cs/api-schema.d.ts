type AnyEventContext = EventContext<unknown, string, unknown>
interface ResolveOptions<T extends AnyEventContext, K> {
  ctx: T
  input: K
}
interface StoreObject<T extends ZodTypeAny, K extends unknown> {
  input: T['_output']
  output: K
}
type DefaultStoreValue = Record<string, StoreObject<ZodTypeAny, unknown>>
type Breathing<Context extends AnyEventContext, Store = DefaultStoreValue> = {
  request<Url extends string, Input extends ZodTypeAny, Output>(
    url: Url,
    input: Input,
    resolve: (
      options: ResolveOptions<Context, Input['_output']>
    ) => Promise<Output>
  ): Breathing<Context, Store & Record<Url, StoreObject<Input, Output>>>
  store: Record<
    string,
    {
      input: ZodTypeAny
      resolve: Parameters<Breathing<Context>['request']>[2]
    }
  >
}
type GetRoutesValue<T> = T extends Breathing<AnyEventContext, infer Store>
  ? Store
  : never
const breathing: <
  Context extends AnyEventContext,
  Store = DefaultStoreValue
>() => Breathing<Context, Store>
interface Person {
  name: string
  picture: string
  userid: string
}
import { z } from 'zod'
const api: Breathing<
  AnyEventContext,
  DefaultStoreValue &
    Record<
      'add',
      StoreObject<
        z.ZodObject<
          {
            name: z.ZodString
            picture: z.ZodString
            private: z.ZodOptional<z.ZodBoolean>
          },
          'strip',
          z.ZodTypeAny,
          {
            name?: string
            picture?: string
            private?: boolean
          },
          {
            name?: string
            picture?: string
            private?: boolean
          }
        >,
        {
          readonly name: string
          readonly picture: string
          readonly id: string
        }
      >
    > &
    Record<
      'add_vk',
      StoreObject<
        z.ZodObject<
          {
            id: z.ZodString
            private: z.ZodOptional<z.ZodBoolean>
          },
          'strip',
          z.ZodTypeAny,
          {
            private?: boolean
            id?: string
          },
          {
            private?: boolean
            id?: string
          }
        >,
        | {
            readonly error: 'User not found'
          }
        | {
            readonly error: 'Requested id is owned by a group'
          }
        | {
            readonly error: 'An error occurred while getting user data from VK'
          }
        | {
            readonly error: 'No suitable image found'
            preview?: undefined
            largest?: undefined
          }
        | {
            preview: string
            largest: string
            readonly error?: undefined
          }
        | {
            readonly id: string
          }
      >
    > &
    Record<
      'delete',
      StoreObject<
        z.ZodString,
        | {
            readonly error: "You can't delete it"
            readonly userid?: undefined
          }
        | {
            readonly error: 'Value not found'
            readonly userid?: undefined
          }
        | {
            readonly userid: string
            readonly error?: undefined
          }
      >
    > &
    Record<
      'get',
      StoreObject<
        z.ZodString,
        | Person
        | {
            readonly person: 'missing'
          }
      >
    > &
    Record<'top', StoreObject<z.ZodAny, Person[]>> &
    Record<
      'get_vk_info',
      StoreObject<
        z.ZodString,
        | {
            readonly error: 'User not found'
          }
        | {
            readonly error: 'Requested id is owned by a group'
          }
        | {
            readonly error: 'An error occurred while getting user data from VK'
          }
        | {
            readonly name: string
            readonly picture: string
          }
      >
    >
>
export type Api = GetRoutesValue<typeof api>
