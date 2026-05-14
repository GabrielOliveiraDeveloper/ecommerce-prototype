import {
    createProduct,
    getProducts,
    getProductById,
    getProductsByShopId,
    updateProduct,
    deleteProduct,
    returnAllProducts
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
        it('should create a product with multiple image uploads', async () => {
            req = {
                body: { name: 'Product 1', price: 100, description: 'Desc', shopID: '60d0fe4f5311236168a109ca' },
                files: [
                    { buffer: Buffer.from('fake-image-1') },
                    { buffer: Buffer.from('fake-image-2') }
                ]
            };

            const mockImgResponse = {
                data: {
                    data: { url: 'http://image.com/test.jpg' }
                }
            };

            const mockSavedProduct = { 
                _id: 'prod123', 
                name: 'Product 1', 
                imagesUrls: ['http://image.com/test.jpg', 'http://image.com/test.jpg'] 
            };

            axios.post.mockResolvedValue(mockImgResponse);
            Product.prototype.save = jest.fn().mockResolvedValue(mockSavedProduct);

            await createProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(mockSavedProduct);
            expect(axios.post).toHaveBeenCalledTimes(2);
        });

        it('should return 400 if no files are uploaded', async () => {
            req = { body: {}, files: [] };
            await createProduct(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'No files uploaded.' });
        });

        it('should return 500 if database save fails', async () => {
            req = {
                body: { name: 'Error Case' },
                files: [{ buffer: Buffer.from('test') }]
            };
            
            axios.post.mockResolvedValue({ data: { data: { url: 'url' } } });
            Product.prototype.save = jest.fn().mockRejectedValue(new Error('DB Error'));

            await createProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
        });
    });

    describe('getProducts', () => {
        it('should fetch products by shopID', async () => {
            req = { params: { shopID: 'shop123' } };
            const mockProducts = [{ name: 'P1', idShop: 'shop123' }];
            Product.find.mockResolvedValue(mockProducts);
            
            await getProducts(req, res);
            
            expect(Product.find).toHaveBeenCalledWith({ idShop: 'shop123' });
            expect(res.json).toHaveBeenCalledWith(mockProducts);
        });
    });

    describe('getProductById', () => {
        it('should return a product by ID', async () => {
            req = { params: { productID: 'prod123' } };
            const mockProduct = { _id: 'prod123', name: 'P1' };
            Product.findById.mockResolvedValue(mockProduct);

            await getProductById(req, res);

            expect(res.json).toHaveBeenCalledWith(mockProduct);
        });

        it('should return 404 if product is not found', async () => {
            req = { params: { productID: 'nonexistent' } };
            Product.findById.mockResolvedValue(null);

            await getProductById(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Product not found' });
        });
    });

    describe('getProductsByShopId', () => {
        it('should list products of a specific shop', async () => {
            req = { params: { shopID: 'shop123' } };
            Product.find.mockResolvedValue([]);

            await getProductsByShopId(req, res);

            expect(Product.find).toHaveBeenCalledWith({ idShop: 'shop123' });
            expect(res.json).toHaveBeenCalledWith([]);
        });
    });

    describe('updateProduct', () => {
        it('should update a product and its images', async () => {
            req = {
                params: { id: 'prod123' },
                body: { name: 'Updated Name', price: 150 },
                files: [{ buffer: Buffer.from('new-image') }]
            };

            const mockImgResponse = { data: { data: { url: 'http://newimage.com/1.jpg' } } };
            const mockUpdatedProduct = { _id: 'prod123', name: 'Updated Name', imagesUrls: ['http://newimage.com/1.jpg'] };

            axios.post.mockResolvedValue(mockImgResponse);
            Product.findByIdAndUpdate.mockResolvedValue(mockUpdatedProduct);

            await updateProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockUpdatedProduct);
        });

        it('should return 404 if updating a non-existent product', async () => {
            req = {
                params: { id: 'invalid' },
                body: { name: 'Fail' },
                files: [{ buffer: Buffer.from('test') }]
            };

            axios.post.mockResolvedValue({ data: { data: { url: 'url' } } });
            Product.findByIdAndUpdate.mockResolvedValue(null);

            await updateProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Product not found' });
        });
    });

    describe('deleteProduct', () => {
        it('should delete a product successfully', async () => {
            req = { params: { id: 'prod123' } };
            Product.findByIdAndDelete.mockResolvedValue({ _id: 'prod123' });

            await deleteProduct(req, res);

            expect(res.json).toHaveBeenCalledWith({ message: 'Product deleted successfully' });
        });

        it('should return 404 if product to delete is not found', async () => {
            req = { params: { id: 'invalid' } };
            Product.findByIdAndDelete.mockResolvedValue(null);

            await deleteProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Product not found' });
        });
    });

    describe('returnAllProducts', () => {
        it('should return all products in the database', async () => {
            const mockProducts = [{ name: 'P1' }, { name: 'P2' }];
            Product.find.mockResolvedValue(mockProducts);

            await returnAllProducts(req, res);

            expect(res.json).toHaveBeenCalledWith(mockProducts);
        });

        it('should return 500 on server error', async () => {
            Product.find.mockRejectedValue(new Error('Fetch Error'));

            await returnAllProducts(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
        });
    });
});