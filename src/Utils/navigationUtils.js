import {CommonActions} from '@react-navigation/native';

const resetRoute = (navigation, route) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: route}],
    }),
  );
};

export {resetRoute};