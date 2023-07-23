import { writable } from "svelte/store";
import type { Item, Product } from "./types";

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
    const { subscribe, set } = writable([] as Product[])
    return {
        subscribe,
        setProducts: (products: Product[]) => set(products)
    }
}

export const productsStore = createProductsStore()