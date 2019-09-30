import { Router } from "express";
import { Message } from "../models";

const router = Router();

/* GET messages by user */
router.get("/user/:userId", async (req, res, next) => {
  const messages = await Message.findAll({
    where: { UserId: req.params.userId }
  });
  return res.send(Object.values(messages));
});

/* GET message by id */
router.get("/:messageId", async (req, res, next) => {
  const message = await Message.findByPk(req.params.messageId);
  return res.send(message);
});

export default router;
