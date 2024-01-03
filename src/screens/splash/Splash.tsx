import PushNotification from "react-native-push-notification";


export const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'test-Channel',
        channelName: 'Test Channel',
      },
      (created: boolean) => {
        // Handle the callback here if needed
      },
    );
  };