import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../resources/colors/Colors';
import {Assets} from '../../resources/images/Imagepath';
import {
  window_height,
  window_width,
} from '../../resources/dimensions/dimensions';
import {Strings} from '../../resources/strings/Strings';
import Slider from '@react-native-community/slider';
import {useDispatch, useSelector} from 'react-redux';
import {getBackgroundColor, getBtnColor, getBtnTxtColor, getNormalTxtColor, getPlaceHolderBackgroundColor} from '../../resources/lightdark';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  notificationConfiguresType,
  themeType,
  updateNotificationConfigure,
} from '../../redux/Slice';
import {scheduleNotification} from './Reminder';
import moment from 'moment';

export const Reminder = ({navigation}: {navigation: any}) => {
  const theme: string = useSelector((state: any) => state.theme.theme);
  const notificationConfigures: notificationConfiguresType = useSelector(
    (state: any) => state.notificationconfigures,
  );

  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState<boolean>(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] =
    useState<boolean>(false);

  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };

  const handleStartConfirm = date => {
    console.warn('A date has been picked: ', date);
    dispatch(
      updateNotificationConfigure({
        startTime: date,
        endTime: notificationConfigures.endTime,
        quantity: notificationConfigures.endTime,
      }),
    );
    hideStartTimePicker();
  };

  const handleEndConfirm = date => {
    console.warn('A date has been picked: ', date);
    dispatch(
      updateNotificationConfigure({
        startTime: notificationConfigures.startTime,
        endTime: date,
        quantity: notificationConfigures.endTime,
      }),
    );
    hideEndTimePicker();
  };

  const startTimeModal = () => {
    return (
      <DateTimePickerModal
        isVisible={isStartTimePickerVisible}
        mode="time"
        onConfirm={handleEndConfirm}
        onCancel={hideEndTimePicker}
      />
    );
  };

  const endTimeModal = () => {
    return (
      <DateTimePickerModal
        isVisible={isEndTimePickerVisible}
        mode="time"
        onConfirm={handleStartConfirm}
        onCancel={hideStartTimePicker}
      />
    );
  };

  return (
    <View
      style={[Style.container, {backgroundColor: getBackgroundColor(theme)}]}>
      {startTimeModal()}
      {endTimeModal()}
      <Image style={Style.watch} source={Assets.watch} />
      <Text style={[Style.identitytxt, {color: getNormalTxtColor(theme)}]}>
        {Strings.setreminder}
      </Text>
      <View style={Style.startendview}>
        <View style={{alignItems: 'center'}}>
          <Text style={[Style.howmanytxt, {color: getNormalTxtColor(theme)}]}>
            {Strings.startat}
          </Text>
          <TouchableOpacity
            onPress={() => {
              showStartTimePicker();
            }}
            style={[Style.timebox,{backgroundColor:getPlaceHolderBackgroundColor(theme)}]}>
            <Text style={[Style.howmanytxt, {padding: 10,paddingHorizontal:20,color: getNormalTxtColor(theme)}]}>
              {moment(notificationConfigures.startTime).format('hh:mm')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[Style.starightline,{borderColor:getPlaceHolderBackgroundColor(theme)}]}></View>
        <View>
          <Text style={[Style.howmanytxt, {color: getNormalTxtColor(theme)}]}>
            {Strings.endat}
          </Text>
          <TouchableOpacity
            onPress={() => {
              showEndTimePicker();
            }}
            style={[Style.timebox,{backgroundColor:getPlaceHolderBackgroundColor(theme)}]}>
            <Text style={[Style.howmanytxt, {padding: 10,paddingHorizontal:20,color: getNormalTxtColor(theme)}]}>
              {moment(notificationConfigures.endTime).format('hh:mm')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Style.howmanytxtview}>
        <Text style={[Style.howmanytxt, {color: getNormalTxtColor(theme)}]}>
          {Strings.howmany}
        </Text>

        <Text style={[Style.howmanytxt, {color: getNormalTxtColor(theme)}]}>
          {notificationConfigures.quantity + 'X'}
        </Text>
      </View>
      <Slider
        style={{width: 308, height: 40, alignSelf: 'center'}}
        value={Number(notificationConfigures.quantity)}
        onValueChange={number => {
          dispatch(
            updateNotificationConfigure({
              startTime: notificationConfigures.startTime,
              endTime: notificationConfigures.endTime,
              quantity: Math.ceil(number),
            }),
          );
          setSelectedValue(Math.ceil(number));
        }}
        lowerLimit={0}
        upperLimit={20}
        minimumValue={0}
        maximumValue={20}
        thumbTintColor={Colors.splash_blue}
        minimumTrackTintColor={Colors.textinputborder}
        maximumTrackTintColor={Colors.splash_blue}
      />

      <View style={Style.soundview}>
        <Text style={[Style.howmanytxt, {color: getNormalTxtColor(theme)}]}>
          {Strings.sound}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={Style.circlearrow} source={Assets.circlearrow} />
          <Text
            style={[
              Style.howmanytxt,
              {marginHorizontal: 15, color: getNormalTxtColor(theme)},
            ]}>
            {Strings.sound}
          </Text>
          <Image
            style={[
              Style.circlearrow,
              {
                transform: [{scaleX: -1}],
              },
            ]}
            source={Assets.circlearrow}
          />
        </View>
      </View>

      <View style={Style.btmview}>
        <TouchableOpacity
          onPress={() => {
            scheduleNotification(notificationConfigures);
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: "feeling",
                },
              ],
            });
          }}
          style={[Style.getstartbtn,{backgroundColor:getBtnColor(theme)}]}>
          <Text style={[Style.getstarttxt,{color:getBtnTxtColor(theme)}]}>{Strings.continue}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  identitytxt: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
    textAlign: 'center',
    paddingVertical: 15,
  },
  watch: {
    resizeMode: 'contain',
    width: window_width / 2,
    alignSelf: 'center',
    height: window_height / 4,
    marginTop: 67,
  },
  btmview: {flex: 1, justifyContent: 'flex-end'},
  getstartbtn: {
    width: window_width / 1.5,
    backgroundColor: Colors.getstartbtn,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  getstarttxt: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  howmanytxtview: {
    flexDirection: 'row',
    width: 290,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  howmanytxt: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.black,
    fontWeight: '500',
  },
  startendview: {
    flexDirection: 'row',
    marginHorizontal: 35,
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  starightline: {color: Colors.textinputborder, borderLeftWidth: 2},
  timebox: {
    borderWidth: 1,
    borderColor: Colors.textinputborder,
    borderRadius: 10,
    marginVertical: 10,
  },
  soundview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 35,
  },
  circlearrow: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
