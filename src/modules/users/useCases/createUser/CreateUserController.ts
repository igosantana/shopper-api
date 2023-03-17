import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, lastName, birthDate, phone, job } = req.body
    const createUserCase = new CreateUserUseCase()
    const result = await createUserCase.execute({ name, lastName, birthDate, phone, job })
    if (!result.ok) res.status(400).json({ message: "fail" })
    res.status(201).json({ message: "success" })
  }
}
