import { Router } from 'express';
import { authController} from "../controllers/auth.controller";

class AuthRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/listUser',authController.listUser)
        this.router.post('/createUser',authController.createUser)
        this.router.post('/signup',authController.signin)
        this.router.post('/signup',authController.profile)
    }

}

const authRoutes = new AuthRoutes();
export default authRoutes.router