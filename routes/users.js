import { Router } from 'express';
import users from '../models';

const router = Router()

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send(Object.values(users));
});

router.get('/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

export default router;
