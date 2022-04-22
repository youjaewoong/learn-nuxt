import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000',
});

function fetchProducts() {
	return instance.get(`/products`);
}

function fetchProductById(id) {
	return instance.get(`/products/${id}`);
}

function fetchProductsByKeyword(keyword) {
	return instance.get(`/products`, {
		params: {
			name_like: keyword,
		},
	});
}

export { fetchProducts, fetchProductById, fetchProductsByKeyword };
