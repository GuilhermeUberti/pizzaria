import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

//Rotas user
router.post('/users', new CreateUserController().handle); //create user
router.post('/session', new AuthUserController().handle); //login user
router.get('/detail', isAuthenticated, new DetailUserController().handle); //detalhes user

//Rotas Category
router.post('/category', isAuthenticated, new CreateCategoryController().handle);


export { router };