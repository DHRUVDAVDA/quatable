import PushNotification from 'react-native-push-notification';
import {notificationConfiguresType} from '../../redux/Slice';
import moment from 'moment';

export const scheduleNotification = (
  notificationConfigures: notificationConfiguresType,
) => {
  // Define start and end times
  PushNotification.cancelAllLocalNotifications()
  const startTime = notificationConfigures.startTime; // Start time in ISO 8601 format
  const endTime = notificationConfigures.endTime; // End time in ISO 8601 format
  const notificationQuantity = notificationConfigures.quantity; // Number of notifications

  const timeDifference = endTime.getTime() - startTime.getTime();
  const interval = timeDifference / (notificationQuantity + 1);

  let currentTime = startTime.getTime();

  for (let i = 0; i < notificationQuantity; i++) {
    currentTime += interval;
    const notificationTime = new Date(currentTime);
console.log(new Date(currentTime));

    PushNotification.localNotificationSchedule({
      channelId: 'test-Channel',
      title: 'Spendable',
      message: 'Have you logged your transaction?',
      date: new Date(currentTime), // Use timestamp directly
      allowWhileIdle: true,
      repeatType: 'day',
    });
  }
};
