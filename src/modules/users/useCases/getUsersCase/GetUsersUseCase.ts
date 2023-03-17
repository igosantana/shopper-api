import { prisma } from "../../../../prisma/client";
import { IUser } from "../../interfaces/user.interface";

export class GetUsersUseCase {
  async execute(): Promise<IUser[] | 'users_not_found'> {
    // Encontrar usuários
    const userRes: IUser[] = []
    const users = await prisma.user.findMany()
    if (!users.length) return "users_not_found"
    for (const user of users) {
      const u: IUser = {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        phone: Number(user.phone),
        birthDate: Number(user.birthDate),
        job: user.job
      }
      userRes.push(u)
    }
    return userRes
  }
} 
