"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const database_1 = require("../database");
class AuthController {
    constructor() {
        this.createUser = (req, res) => {
            const { username, email, password } = req.body;
            database_1.db.query('INSERT INTO users (username,email,password) VALUES ( $1, $2, $3)', [username, email, password], (err, resp) => {
                if (err) {
                    res.json({ err });
                }
                else {
                    res.json({ status: 1, message: "Servicio creado con exito" });
                }
            });
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