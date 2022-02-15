import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir em um sistema real
router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista um usuário

// Esses devem existir
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
