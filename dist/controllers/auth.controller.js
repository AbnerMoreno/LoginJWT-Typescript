"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userList = yield database_1.db.query('SELECT username,email,password FROM users');
            res.json(userList.rows);
        });
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map