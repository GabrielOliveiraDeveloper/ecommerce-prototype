import LoginController from "../../controllers/LoginController";
import User from "../../models/User";
import jwt from "jsonwebtoken"; 

jest.mock('../../models/User');
jest.mock('jsonwebtoken'); 

describe('LoginController', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
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

    it('should log in a user successfully', async () => {
        const mockUser = {
            _id: 'user123',
            comparePassword: jest.fn().mockResolvedValue(true)
        };
        
        User.findOne.mockResolvedValue(mockUser);
        jwt.sign.mockReturnValue('mock-jwt-token');

        await LoginController(req, res);

        expect(res.json).toHaveBeenCalledWith({ 
            userID: 'user123', 
            token: 'mock-jwt-token' 
        });
    });

    it('should return 400 if user does not exist', async () => {
        User.findOne.mockResolvedValue(null);

        await LoginController(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Invalid email or password' });
    });

    it('should return 400 if password is incorrect', async () => {
        const mockUser = {
            comparePassword: jest.fn().mockResolvedValue(false)
        };
        User.findOne.mockResolvedValue(mockUser);

        await LoginController(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Invalid email or password' });
    });
});