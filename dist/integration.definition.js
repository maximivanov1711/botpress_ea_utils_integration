"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("@botpress/sdk");
const package_json_1 = require("./package.json");
exports.default = new sdk_1.IntegrationDefinition({
    name: package_json_1.integrationName,
    version: "0.0.1",
    readme: "hub.md",
    icon: "icon.svg",
    user: {},
    channels: {
        channel: {
            messages: sdk_1.messages.defaults,
            conversation: {
                creation: {
                    enabled: true,
                    requiredTags: ["message_processed", "original_conversation_id"],
                },
                tags: {
                    original_conversation_id: {},
                    message_processed: {},
                },
            },
        },
    },
    actions: {
        update_message_processed: {
            title: "Update message_processed",
            description: "Update message_processed",
            input: {
                schema: sdk_1.z.object({
                    original_conversation_id: sdk_1.z.string(),
                    message_processed: sdk_1.z.string(),
                }),
            },
            output: {
                schema: sdk_1.z.object({}),
            },
        },
    },
});
