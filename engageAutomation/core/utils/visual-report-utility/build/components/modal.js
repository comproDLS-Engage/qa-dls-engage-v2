"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modal = () => {
    return (react_1.default.createElement("div", { className: "modal" },
        react_1.default.createElement("div", { className: "modal-background" }),
        react_1.default.createElement("div", { className: "modal-content" },
            react_1.default.createElement("p", { id: "modal-images", className: "image" })),
        react_1.default.createElement("button", { className: "modal-close is-large", "aria-label": "close" })));
};
exports.default = Modal;
