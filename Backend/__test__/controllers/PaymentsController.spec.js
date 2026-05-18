import { createPaymentWithSplit } from "../../controllers/PaymentsController";
import Shop from "../../models/Shop";
import Order from "../../models/Order";
import axios from "axios";

jest.mock("../../models/Shop");
jest.mock("../../models/Order");
jest.mock("axios");

describe('PaymentController', () => {
    let req, res;
    const ORIGINAL_ENV = process.env;

    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterAll(() => {
        console.error.mockRestore();
        console.log.mockRestore();
        process.env = ORIGINAL_ENV;
    });

    beforeEach(() => {
        process.env = {
            ...ORIGINAL_ENV,
            WOOVI_API_KEY: 'test_key',
            WOOVI_API_URL: 'https://api.woovi.com/v1'
        };

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn()
        };
        
        jest.clearAllMocks();
    });

    describe('createPaymentWithSplit', () => {
        it('deve criar um pagamento com split e salvar o pedido com sucesso', async () => {
            req = {
                body: {
                    productOBJ: {
                        idShop: 'shop123',
                        price: 100,
                        _id: 'prod123'
                    },
                    clientID: 'client123'
                }
            };

            const mockShop = { pixKey: 'pix-shop-key' };
            Shop.findById.mockResolvedValue(mockShop);

            const mockAxiosResponse = {
                data: {
                    charge: {
                        identifier: 'charge_abc123',
                        qrCodeImage: 'base64_image_data',
                        brCode: 'payload_pix_brcode'
                    }
                }
            };
            axios.post.mockResolvedValue(mockAxiosResponse);

            const mockSavedOrder = { _id: 'order123' };
            Order.prototype.save = jest.fn().mockResolvedValue(mockSavedOrder);

            await createPaymentWithSplit(req, res);

            expect(Shop.findById).toHaveBeenCalledWith('shop123');
            expect(axios.post).toHaveBeenCalledWith(
                'https://api.woovi.com/v1',
                expect.objectContaining({
                    value: 10000,
                    splits: [
                        {
                            pixKey: 'pix-shop-key',
                            splitType: 'SPLIT_SUB_ACCOUNT',
                            value: 9000
                        }
                    ]
                }),
                {
                    headers: {
                        'Authorization': 'test_key',
                        'Content-Type': 'application/json'
                    }
                }
            );
            expect(Order.prototype.save).toHaveBeenCalled();
            expect(res.send).toHaveBeenCalledWith({
                qrCodeImage: 'base64_image_data',
                brCode: 'payload_pix_brcode'
            });
        });

        it('deve retornar 500 em caso de erro na requisição da API ou banco', async () => {
            req = {
                body: {
                    productOBJ: {
                        idShop: 'shop123',
                        price: 100,
                        _id: 'prod123'
                    },
                    clientID: 'client123'
                }
            };

            Shop.findById.mockResolvedValue({ pixKey: 'pix-shop-key' });
            
            const apiError = {
                response: {
                    data: { message: 'Bad Request' }
                }
            };
            axios.post.mockRejectedValue(apiError);

            await createPaymentWithSplit(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: { message: 'Bad Request' } });
        });
    });
});