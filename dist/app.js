"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
//configuraciones
app.set('port', 3000);
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: "50mb" }));
// dotenv.config({path: './'})
// console.log(express)
//middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//rutas
app.use('/api/auth', authRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map