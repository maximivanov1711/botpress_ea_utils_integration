"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bp = __importStar(require(".botpress"));
exports.default = new bp.Integration({
    register: async () => { },
    unregister: async () => { },
    actions: {
        update_message_processed: async ({ client, input }) => {
            console.warn("call update_message_processed");
            console.warn("original_conversation_id: ", input.originalConversationId);
            const { conversation: utility_conversation } = await client.getOrCreateConversation({
                channel: "channel",
                tags: {
                    original_conversation_id: input.original_conversation_id,
                },
            });
            console.warn("utility conversation:", utility_conversation);
            await client.updateConversation({
                id: utility_conversation.id,
                tags: { message_processed: input.message_processed },
            });
            console.warn("utility conversation updated");
            return {};
        },
    },
    channels: {
        channel: {
            messages: {
                text: async () => {
                    console.warn("call text");
                },
                image: async () => {
                    console.warn("call image");
                },
                markdown: async () => {
                    console.warn("call markdown");
                },
                audio: async () => {
                    console.warn("call audio");
                },
                video: async () => {
                    console.warn("call video");
                },
                file: async () => {
                    console.warn("call file");
                },
                location: async () => {
                    console.warn("call location");
                },
                card: async () => {
                    console.warn("call card");
                },
                carousel: async () => {
                    console.warn("call carousel");
                },
                dropdown: async () => {
                    console.warn("call dropdown");
                },
                choice: async () => {
                    console.warn("call choice");
                },
                bloc: async () => {
                    console.warn("call bloc");
                },
            },
        },
    },
    handler: async () => { },
});
