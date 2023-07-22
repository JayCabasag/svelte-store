// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Product {
			id: number;
			title: string;
			price: number;
			description: string;
			category: string;
			image: string;
			rating: {
				rate: number;
				count: number;
			};
		}
		interface Item {
			id: string;
			quantity: number;
			product: Product
		}
	}
}

export { Product, Item };
