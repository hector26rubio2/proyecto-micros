export class UsuarioService {

    getProductsSmall() {
        return fetch('../data/customers-small.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('../data/customers-small.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('../data/customers-small.json').then(res => res.json()).then(d => d.data);
    }
}