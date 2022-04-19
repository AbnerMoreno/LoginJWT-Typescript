"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
class AuthController {
    constructor() {
        this.createUser = (req, res) => {
            console.log(req.body);
            res.send('singup');
        };
        this.signin = (req, res) => {
            res.send('singin');
        };
        this.profile = (req, res) => {
            res.send('profile');
        };
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map