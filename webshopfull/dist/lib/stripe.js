"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
var stripe_1 = __importDefault(require("stripe"));
exports.stripe = new stripe_1.default('sk_test_51NPO6pHndPwFL0XeRi4bitGakQEc0ecF5dJDalDuFNXsDPL1w3MasmdO0oz3zlfleUAniALadBhjjLRa2hH1Wmd800xtaEMMFH', {
    apiVersion: '2024-09-30.acacia',
    typescript: true,
});
