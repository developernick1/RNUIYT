import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CommonButton from '../../components/Button/CommonButton'
import { OnBoardingData } from './OnBoardingData'
import { height, width } from '../../assets/string'
import { colors } from '../../assets/color'
import fonts from '../../assets/fonts'
import NavigationStrings from '../../routes/NavigationStrings'
import { useNavigation } from '@react-navigation/native'

const OnBoardingScreen = () => {
    const [currentSlide, setcurrentSlide] = useState(0)

    const navigation = useNavigation()
    let ButtonData = {
        Tittle: (OnBoardingData?.length - 1) === currentSlide ? "GET STARTED" : "NEXT",
        onClick: () => { navigation?.navigate(NavigationStrings?.LOGIN_SCREEN) }
    }
    return (
        <View style={styles?.OnBoardingWrapper} >
            <View style={styles?.FlatListWrapper} >

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={OnBoardingData}
                    pagingEnabled
                    renderItem={({ item }) => {
                        return (
                            <>
                                <View style={styles?.ContentWrapper} >
                                    <item.Icon height={height / 2.5} width={width / 1.2} />
                                    <View style={styles?.TextWrap} >
                                        <Text style={styles?.HeadingStyle} >{item?.Heading}</Text>
                                        <Text style={styles?.SubHeadingStyle} >{item?.SubHeading}</Text>
                                    </View>
                                </View>
                            </>
                        )
                    }}
                    keyExtractor={item => item?.id}
                    onScroll={(event) => {
                        const slideWidth = event.nativeEvent.layoutMeasurement.width;
                        const CurrentIndex = event.nativeEvent.contentOffset.x / slideWidth;
                        setcurrentSlide(Math.floor(CurrentIndex))
                    }}

                />
            </View>
            <View style={styles?.PaginatorArea} >
                {OnBoardingData?.map((_, index) => {
                    return (
                        <TouchableOpacity
                            // disabled={true}
                            key={index}
                            style={[styles?.InactiveDot, index === currentSlide && styles?.ActiveDot]}
                        />
                    )
                })}
            </View>
            <View style={styles?.ButtonView} >
                <CommonButton data={ButtonData} />
            </View>

        </View>
    )
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    OnBoardingWrapper: {
        flex: 1,
        backgroundColor: colors?.whiteColor,
    },
    FlatListWrapper: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '75%',
    },
    ContentWrapper: {
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        textAlign: 'center',

    },
    TextWrap: {
        width: '80%',
        textAlign: 'center',
    },
    HeadingStyle: {
        color: colors.blackColor,
        fontFamily: fonts?.PoppinsBold,
        fontSize: 24,
        textAlign: 'center',
    },
    SubHeadingStyle: {
        color: colors.OnBoardingTextGrey,
        fontFamily: fonts?.PoppinsRegular,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 25,
    },
    PaginatorArea: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '5%',
    },
    InactiveDot: {
        backgroundColor: colors?.InActiveDot,
        height: height / 100,
        width: width / 14,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
    },
    ActiveDot: {
        backgroundColor: colors?.primaryColor,
        height: height / 100,
        width: width / 14,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
    },
    ButtonView: {
        paddingHorizontal: 15,
        // height: '15%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
});