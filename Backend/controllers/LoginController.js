import User from "../models/User.js";
import jwt from "jsonwebtoken";
import {z} from 'zod';

const LoginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long')
});

const LoginController = async (req, res) => {
    const result = LoginSchema.safeParse(req.body);
    
    if (!result.success) {
        const errors = result.error.errors.map(err => err.message);
        return res.status(400).json({ message: 'Validation error', errors });
    }

    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    }
    catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default LoginController;
