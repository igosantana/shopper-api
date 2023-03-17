import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

export class GetUsersController {
  async handle(req: Request, res: Response) {
    const getUserCase = new GetUsersUseCase()
    const result = await getUserCase.execute()
    if (result == "users_not_found") res.status(400).json({ message: "fail" })
    res.status(200).json({ data: result })
  }
}
