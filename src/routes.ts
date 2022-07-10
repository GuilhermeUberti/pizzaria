import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

const router = Router();

// folder de armazenamento de imagens
const upload = multer(uploadConfig.upload("./tmp"));

//Rotas user
router.post('/users', new CreateUserController().handle); //create user
router.post('/session', new AuthUserController().handle); //login user
router.get('/detail', isAuthenticated, new DetailUserController().handle); //detalhes user

//Rotas Category
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);

//Rotas Product
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

export { router };