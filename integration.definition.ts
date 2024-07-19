import { IntegrationDefinition, z, messages } from "@botpress/sdk";
import { integrationName } from "./package.json";

export default new IntegrationDefinition({
  name: integrationName,
  version: "0.0.1",
  readme: "hub.md",
  icon: "icon.svg",
  user: {},
  channels: {
    channel: {
      messages: messages.defaults,
      conversation: {
        creation: {
          enabled: true,
          requiredTags: ["messageProcessed", "origConvId"],
        },
        tags: {
          origConvId: {},
          messageProcessed: {},
        },
      },
    },
  },
  actions: {
    updateMessageProcessed: {
      title: "Update messageProcessed",
      description: "Update messageProcessed",
      input: {
        schema: z.object({
          origConvId: z.string(),
          messageProcessed: z.string(),
        }),
      },
      output: {
        schema: z.object({}),
      },
    },
  },
});
