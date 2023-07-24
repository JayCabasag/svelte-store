export type loadingState = 'idle' | 'initial-loading' | 'completed' | 'loading-next-page' | 'failed'

export async function getAllProducts(limit: number) {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    return res.json()
}