import User from '../models/User.js';
import {z} from 'zod';

const RegisterSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long')
});

const RegisterController = async (req, res) => {
    const result = RegisterSchema.safeParse(req.body);

    if (!result.success) {
        const errors = result.error.errors.map(err => err.message);
        return res.status(400).json({ message: 'Validation error', errors });
    }

    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default RegisterController;