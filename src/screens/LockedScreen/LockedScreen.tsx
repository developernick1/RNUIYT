import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NavigationStrings from '../../routes/NavigationStrings'
import images from '../../assets/images'
import { Assign_Icon, Attachment_Icon, BagInq_Icon } from '../../assets/icons'
import fonts from '../../assets/fonts'
import { colors } from '../../assets/color'


export default function LockedScreen() {
  const navigation = useNavigation()
  return (
    <View>
      <View style={{width: 100, height: 100, backgroundColor: colors?.primaryColor}} >
        <Text style={{ fontFamily: fonts?.PoppinsBold, color: colors?.SecondryColor }} >App Screen</Text>
      </View>
    </View>
  )
}
























{/* <Image source={images?.SofaTwo} height={100} width={100} />
<Image source={{uri : 'https://reactnative.dev/img/tiny_logo.png'}} height={100} width={100} />
<Image source={require('../../assets/images/PageMainCar.jpg')} height={100} width={100} />
<Assign_Icon height={50} width={50} />
<Attachment_Icon height={50} width={50} />
<BagInq_Icon height={50} width={50} /> */}