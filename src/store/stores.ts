import { writable } from "svelte/store";
import type { Item, Product } from "./types";
import type { loadingState } from "$lib/getAllProducts";
import { DEFAULT_INITIAL_PRODUCT_LIMIT } from "../utils/constants";

function createCartStore() {
    const { subscribe, update } = writable([] as Item[])

    return {
        subscribe,
        addItem: (item: Item) => update((items) => [...items, item]),
        updateItem: (updatedItem: Item) => update((items) => {

            const updatedItemCount = updatedItem.quantity
            const itemId = updatedItem.id

            if (updatedItemCount <= 0) {
                const newItems = items.filter((item) => {
                    if (item.id !== itemId) return item
                })
                return newItems
            }

            const newItems = items.map((item) => {
                if (item.id === itemId) return updatedItem
                return item
            })

            return newItems
        }),
    }
}

export const cartStore = createCartStore()

function createProductsStore() {
    const { subscribe, set, update } = writable({
        products: [] as Product[],
        limit: DEFAULT_INITIAL_PRODUCT_LIMIT,
        status: 'idle'
    })
    return {
        subscribe,
        setProducts: (products: Product[], limit: number, status: string) => set({ status, products, limit }),
        updateProducts: (newProducts: Product[]) => update((data) => {
            return {
                ...data,
                products: newProducts
            }
        }),
        updateLimit: (limit: number) => update(data => {
            return {
                ...data,
                limit
            }
        }),
        updateStatus: (status: loadingState) => update((data) => {
            return {
                ...data,
                status
            }
        })
    }
}

export const productsStore = createProductsStore()