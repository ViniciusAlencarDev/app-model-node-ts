import { Router } from 'express';

import user from './user'

const router = Router();

router.get('/', (req, res) => res.send('ok'))
router.use('/user', user);

export default router;
