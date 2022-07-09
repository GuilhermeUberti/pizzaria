import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

//Rotas user
router.post('/users', new CreateUserController().handle); //create user
router.post('/session', new AuthUserController().handle); //login user

export { router };