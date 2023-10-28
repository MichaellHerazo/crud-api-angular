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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.postItem = exports.deleteItem = exports.getItem = exports.getItems = void 0;
const item_1 = __importDefault(require("../models/item"));
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listItems = yield item_1.default.findAll();
    res.json(listItems);
});
exports.getItems = getItems;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const item = yield item_1.default.findByPk(id);
    if (item) {
        res.json(item);
    }
    else {
        res.status(404).json({
            msg: "No existe un item con el id " + id,
        });
    }
});
exports.getItem = getItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const item = yield item_1.default.findByPk(id);
    if (!item) {
        res.status(404).json({
            msg: "No existe un item con el id " + id,
        });
    }
    else {
        yield item.destroy();
        res.json({
            msg: "El item fue eliminado con éxito!",
        });
    }
});
exports.deleteItem = deleteItem;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield item_1.default.create(body);
        res.json({
            msg: "El producto fue agregado con éxito!",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ocurrió un error, comuniquese con soporte",
        });
    }
});
exports.postItem = postItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const item = yield item_1.default.findByPk(id);
        if (item) {
            yield item.update(body);
            res.json({
                msg: "El producto fue actualizado con éxito!",
            });
        }
        else {
            res.status(404).json({
                msg: "No existe un item con el id " + id,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ocurrió un error, comuniquese con soporte",
        });
    }
});
exports.updateItem = updateItem;
