import type { Api } from './api-schema'

import { cdashs } from '../constants'

type Routes = keyof Api

// prettier-ignore
async function request<Route extends Routes>(path: Route, options?: Api[Route]["input"]): Promise<Api[Route]["output"]> {
  const request = await fetch(`https://${cdashs}.pages.dev/api/v3`, {
    method: 'POST',
    body: JSON.stringify({ path, data: options })
  })

  const response = await request.json();

  return response['data'];
}

export { request }
