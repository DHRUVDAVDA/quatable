import PushNotification from 'react-native-push-notification';
import {notificationConfiguresType} from '../../redux/Slice';
import moment from 'moment';

export const scheduleNotification = (
  notificationConfigures: notificationConfiguresType,
) => {
  // Define start and end times
  const startTime = notificationConfigures.startTime; // Start time in ISO 8601 format
  const endTime = notificationConfigures.endTime; // End time in ISO 8601 format
  const notificationQuantity = notificationConfigures.quantity; // Number of notifications

  const startMoment = moment(startTime);
  const endMoment = moment(endTime);
  const currentMoment = moment(); // Current time

  // If the current time is already past the end time, calculate the difference for the next day
  if (currentMoment.isAfter(endMoment)) {
    const nextDayStart = moment(startTime).add(1, 'day');
    const nextDayEnd = moment(endTime).add(1, 'day');
    const duration = moment.duration(nextDayEnd.diff(nextDayStart));
    const timeDifference = duration.asHours() / notificationQuantity;

    // Schedule notifications for the next day
    for (let i = 0; i < notificationQuantity; i++) {
      const notificationTime = nextDayStart
        .clone()
        .add(i * timeDifference, 'hours');
      console.log(moment(notificationTime).format('hh:mm'));

      PushNotification.localNotificationSchedule({
        channelId: 'test-Channel',
        title: 'Spendable',
        message: 'Have you logged your transaction?',
        date: new Date(notificationTime),
        allowWhileIdle: true,
        repeatType: 'day',
      });
    }
  } else {
    // If the current time is before the end time, follow the original scheduling logic
    const duration = moment.duration(endMoment.diff(startMoment));
    const timeDifference = duration.asHours() / notificationQuantity;

    // Schedule notifications for the same day
    for (let i = 0; i < notificationQuantity; i++) {
      const notificationTime = startMoment
        .clone()
        .add(i * timeDifference, 'hours');
      console.log(moment(notificationTime).format('hh:mm'));
      PushNotification.localNotificationSchedule({
        channelId: 'test-Channel',
        title: 'Spendable',
        message: 'Have you logged your transaction?',
        date: new Date(notificationTime),
        allowWhileIdle: true,
        repeatType: 'day',
      });
    }
  }
};
