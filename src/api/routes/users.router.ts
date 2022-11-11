import { Router } from 'express'
import container from '../../dependency-injection/container'
import { ContainerSymbols } from '../../dependency-injection/symbols'
import { CreateUserController } from '../controllers/users/CreateUser.ctrl'
import { DeleteUserController } from '../controllers/users/DeleteUser.ctrl'
import { UpdateUserController } from '../controllers/users/UpdateUser.ctrl'
import { UserFinderController } from '../controllers/users/UserFinder.ctrl'

const router = Router()


const createUserController = container.get<CreateUserController>(
    ContainerSymbols.CreateUserController
)

const updateUserController = container.get<UpdateUserController>(
    ContainerSymbols.UpdateUserController
)

const deleteUserController = container.get<DeleteUserController>(
    ContainerSymbols.DeleteUserController
)

const userFinderController = container.get<UserFinderController>(
    ContainerSymbols.UserFinderController
)


router.get('/', userFinderController.run.bind(userFinderController))

router.post('/create', createUserController.run.bind(createUserController))

router.put('/update', updateUserController.run.bind(updateUserController))

router.delete('/delete', deleteUserController.run.bind(deleteUserController))



export { router as users }

