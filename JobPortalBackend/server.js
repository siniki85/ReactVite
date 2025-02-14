import express from 'express';
import env from 'dotenv';
import connectDB from '../JobPortalBackend/config/db.js';
import cors from 'cors';
import authRoutes from '../JobPortalBackend/routes/authRoutes.js';

env.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });


// Username = pniki273 || Password = XBlSscPPv0tTt2bd