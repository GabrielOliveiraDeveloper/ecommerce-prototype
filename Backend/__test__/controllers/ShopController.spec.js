import { 
    createShop, 
    getShops, 
    getShopById, 
    updateShop, 
    deleteShop, 
    getShopsIDByOwner 
} from "../../controllers/ShopController";
import Shop from "../../models/Shop";

jest.mock('../../models/Shop');

describe('ShopController', () => {
    let req, res;

    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterAll(() => {
        console.error.mockRestore();
    });

    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        jest.clearAllMocks();
    });

    describe('createShop', () => {
        it('deve criar uma loja com sucesso', async () => {
            req = {
                body: { 
                    name: 'Loja Teste', 
                    description: 'Desc', 
                    category: 'Roupas', 
                    ownerID: 'user123' 
                }
            };

            const mockSavedShop = { _id: 'shop123', ...req.body };
            Shop.prototype.save = jest.fn().mockResolvedValue(mockSavedShop);

            await createShop(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(mockSavedShop);
        });

        it('deve retornar 500 em caso de erro no banco', async () => {
            Shop.prototype.save = jest.fn().mockRejectedValue(new Error('DB Error'));
            
            await createShop(req, res);
            
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
        });
    });

    describe('getShops', () => {
        it('deve listar todas as lojas com populate', async () => {
            const mockShops = [{ name: 'Loja 1' }, { name: 'Loja 2' }];
            
            Shop.find = jest.fn().mockReturnValue({
                populate: jest.fn().mockResolvedValue(mockShops)
            });

            await getShops(req, res);

            expect(res.json).toHaveBeenCalledWith(mockShops);
        });
    });

    describe('getShopById', () => {
        it('deve retornar uma loja específica', async () => {
            req = { params: { id: 'shop123' } };
            const mockShop = { _id: 'shop123', name: 'Loja' };

            Shop.findById = jest.fn().mockReturnValue({
                populate: jest.fn().mockResolvedValue(mockShop)
            });

            await getShopById(req, res);

            expect(res.json).toHaveBeenCalledWith(mockShop);
        });

        it('deve retornar 404 se a loja não existir', async () => {
            req = { params: { id: 'invalido' } };
            Shop.findById = jest.fn().mockReturnValue({
                populate: jest.fn().mockResolvedValue(null)
            });

            await getShopById(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Shop not found' });
        });
    });

    describe('updateShop', () => {
        it('deve atualizar a loja com sucesso', async () => {
            req = { 
                params: { id: 'shop123' }, 
                body: { name: 'Novo Nome' } 
            };
            const updated = { _id: 'shop123', name: 'Novo Nome' };

            Shop.findByIdAndUpdate.mockResolvedValue(updated);

            await updateShop(req, res);

            expect(res.json).toHaveBeenCalledWith(updated);
        });
    });

    describe('deleteShop', () => {
        it('deve deletar a loja com sucesso', async () => {
            req = { params: { id: 'shop123' } };
            Shop.findByIdAndDelete.mockResolvedValue({ _id: 'shop123' });

            await deleteShop(req, res);

            expect(res.json).toHaveBeenCalledWith({ message: 'Shop deleted successfully' });
        });
    });

    describe('getShopsIDByOwner', () => {
        it('deve retornar lojas de um dono específico', async () => {
            req = { params: { ownerID: 'user123' } };
            const mockLojas = [{ name: 'Loja do User' }];

            Shop.find.mockResolvedValue(mockLojas);

            await getShopsIDByOwner(req, res);

            expect(Shop.find).toHaveBeenCalledWith({ owner: 'user123' });
            expect(res.json).toHaveBeenCalledWith(mockLojas);
        });
    });
});