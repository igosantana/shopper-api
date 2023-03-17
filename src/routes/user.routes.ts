import { Router } from 'express'
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController'
import { GetUsersController } from '../modules/users/useCases/getUsersCase/GetUsersController'

const userRoutes = Router()

const createUserController = new CreateUserController()
const getUserController = new GetUsersController()

userRoutes.post("/", createUserController.handle)
userRoutes.get("/", getUserController.handle)

export { userRoutes }



