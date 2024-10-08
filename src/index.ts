// import express, { Request, Response, NextFunction } from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { bookRoutes } from './interface/routes/BookRoutes'; // Verifique se o caminho está correto
// import indexRoute from './interface/routes/IndexRoute';

// // Inicialização do Express e outras configurações
// dotenv.config();  // Carregar variáveis de ambiente

// const app = express();

// // Conexão com o MongoDB
// // mongoose.connect(process.env.MONGO_URL as string, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('MongoDB connected'))
// //     .catch((error) => console.error('MongoDB connection error:', error));

// // Configurações de middleware
// app.use(cors());
// app.use(bodyParser.json({ limit: '5mb' }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('frontend'));

// // Configurações de cabeçalhos CORS
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     next();
// });

// // Importação de rotas
// // Certifique-se de que bookRoutes está corretamente exportado do módulo apropriado
// app.use('/api', bookRoutes);
// app.use('/index', indexRoute);
// export default app;

import express from 'express';
import mongoose from 'mongoose';
import { bookRoutes } from './interface/routes/bookRoutes';

const app = express();

// Configurações do middleware
app.use(express.json());
app.use(bookRoutes);

// Configurações da conexão com o MongoDB
mongoose.connect("mongodb+srv://7xnecrox7:7KLJOUxGndpSLGrv@gerenciamento.nanpogn.mongodb.net/?retryWrites=true&w=majority&appName=gerenciamento")
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.log(err));

export default app;
