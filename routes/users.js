import { Router } from "express";
import { User } from "../models";

const router = Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  console.log("User", User);
  const users = await User.findAll();
  res.send(Object.values(users));
});

router.get("/:userId", async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  return res.send(user);
});

export default router;
