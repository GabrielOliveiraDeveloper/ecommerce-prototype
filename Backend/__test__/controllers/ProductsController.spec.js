import {
    createProduct,
    getProducts,
    getProductById,
    getProductsByShopId
} from "../../controllers/ProductsController.js";
import Product from "../../models/Product.js";
import axios from "axios";

jest.mock('../../models/Product.js');
jest.mock('axios');

describe('ProductController', () => {
    let req, res;

    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
    });

    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn()
        };
        jest.clearAllMocks();
    });

    describe('createProduct', () => {
        it('deve criar um produto com upload de imagem', async () => {
            req = {
                body: { name: 'Produto 1', price: 100, description: 'Desc', shopID: 'shop123' },
                file: { buffer: Buffer.from('fake-image') }
            };

            const mockImgResponse = {
                data: {
                    data: {
                        url: 'http://image.com/test.jpg',
                        delete_url: 'http://image.com/delete'
                    }
                }
            };

            const mockSavedProduct = { _id: 'prod123', name: 'Produto 1' };

            axios.post.mockResolvedValue(mockImgResponse);
            Product.prototype.save = jest.fn().mockResolvedValue(mockSavedProduct);

            await createProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(mockSavedProduct);
        });

        it('deve retornar 400 se nenhum arquivo for enviado', async () => {
            req = { body: {}, file: null };
            await createProduct(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith('Nenhum arquivo enviado.');
        });

        it('deve retornar 500 em caso de erro no salvamento do banco', async () => {
            req = {
                body: { name: 'Erro' },
                file: { buffer: Buffer.from('test') }
            };
            
            axios.post.mockResolvedValue({ data: { data: { url: 'url', delete_url: 'del' } } });
            
            Product.prototype.save = jest.fn().mockRejectedValue(new Error('DB Error'));

            await createProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
        });

        it('deve falhar se o Axios falhar (comportamento atual do controller)', async () => {
            req = {
                body: { name: 'Erro' },
                file: { buffer: Buffer.from('test') }
            };
            axios.post.mockRejectedValue(new Error('API Error'));

            await expect(createProduct(req, res)).rejects.toThrow('API Error');
        });
    });

    describe('getProducts', () => {
        it('deve buscar produtos por shopID', async () => {
            req = { params: { shopID: 'shop123' } };
            const mockProducts = [{ name: 'P1' }];
            Product.find.mockResolvedValue(mockProducts);
            await getProducts(req, res);
            expect(res.json).toHaveBeenCalledWith(mockProducts);
        });
    });

    describe('getProductById', () => {
        it('deve retornar um produto pelo ID', async () => {
            req = { params: { productID: 'prod123' } };
            const mockProduct = { _id: 'prod123', name: 'P1' };
            Product.findById.mockResolvedValue(mockProduct);
            await getProductById(req, res);
            expect(res.json).toHaveBeenCalledWith(mockProduct);
        });

        it('deve retornar 404 se o produto não for encontrado', async () => {
            req = { params: { productID: 'naoexiste' } };
            Product.findById.mockResolvedValue(null);
            await getProductById(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Product not found' });
        });
    });

    describe('getProductsByShopId', () => {
        it('deve listar produtos da loja', async () => {
            req = { params: { shopID: 'shop123' } };
            Product.find.mockResolvedValue([]);
            await getProductsByShopId(req, res);
            expect(res.json).toHaveBeenCalledWith([]);
        });
    });
});