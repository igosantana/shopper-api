import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute({ name, lastName, birthDate, phone, job }: CreateUserDTO): Promise<{ ok: boolean }> {
    // Criar o usuário
    await prisma.user.create({
      data: {
        name,
        lastName,
        birthDate,
        phone,
        job
      }
    })
    return { ok: true }
  }
} 
