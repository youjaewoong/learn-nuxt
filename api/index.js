import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.baseURL,
});

// 상품 목록
function fetchProducts() {
	return instance.get(`/products`);
}

// 단건 상품
function fetchProductById(id) {
	return instance.get(`/products/${id}`);
}

// 상품 목록 검색
function fetchProductsByKeyword(keyword) {
	return instance.get(`/products`, {
		params: {
			name_like: keyword,
		},
	});
}

// 장바구니 목록
function fetchCartItems() {
	return instance.get('/carts');
}

// 장바구니 저장
function createCartItem(cartItem) {
	return instance.post('/carts', cartItem);
}

export {
	fetchProducts,
	fetchProductById,
	fetchProductsByKeyword,
	createCartItem,
	fetchCartItems,
};
