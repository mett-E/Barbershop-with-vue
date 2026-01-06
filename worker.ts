import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request, env, ctx) {
    try {
      return await getAssetFromKV(request, env, ctx)
    } catch {
      const url = new URL(request.url)
      url.pathname = '/index.html'
      return await getAssetFromKV(new Request(url.toString()), env, ctx)
    }
  }
}
