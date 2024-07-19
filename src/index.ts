import * as bp from ".botpress";

export default new bp.Integration({
  register: async () => {},
  unregister: async () => {},
  actions: {
    updateMessageProcessed: async ({ client, input }) => {
      console.warn("call updateMessageProcessed");
      console.warn("origConvId: ", input.origConvId);

      const { conversation: utility_conversation } =
        await client.getOrCreateConversation({
          channel: "channel",
          tags: {
            origConvId: input.origConvId,
          },
        });
      console.warn("utility conversation:", utility_conversation);

      await client.updateConversation({
        id: utility_conversation.id,
        tags: { messageProcessed: input.messageProcessed },
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
  handler: async () => {},
});
