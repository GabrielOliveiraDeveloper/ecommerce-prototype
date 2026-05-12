import RegisterController from "../../controllers/RegisterController";
import User from "../../models/User";

jest.mock('../../models/User');

describe('RegisterController', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                name: 'Test User',
                email: 'test@example.com',
                password: 'password123'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        jest.clearAllMocks();
    });

    it('should register a new user successfully', async () => {
        User.findOne.mockResolvedValue(null);
        
        User.prototype.save = jest.fn().mockResolvedValue(true);

        await RegisterController(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: 'User registered successfully' });
    });

    it('should return an error if user already exists', async () => {
        User.findOne.mockResolvedValue({ email: 'test@example.com' });

        await RegisterController(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'User already exists' });
    });
});