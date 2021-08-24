import { Dimensions,Platform } from 'react-native'

export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height
export const insetWidth = width - 40

export const IF_OS_IS_IOS = (Platform.OS === 'ios');