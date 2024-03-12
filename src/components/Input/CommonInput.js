import { View, Text, StyleSheet, TextInput,  } from 'react-native'
import React from 'react'
import { EYE_Icon, Mail_Icon } from '../../assets/icons'
import { height, width } from '../../assets/string'
import { colors } from '../../assets/color'
import fonts from '../../assets/fonts'

const CommonInput = ({ data }) => {
    return (
        <View style={styles?.InputWrapper} >
            <data.IconOne height={30} width={'15%'} />
            <TextInput
                secureTextEntry={false}
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder={data?.PlaceHolderTittle}
                keyboardType="email-address"
            />
            {data?.type == 'password' ?

                <data.IconTwo height={25} width={'15%'} />
                : null
            }
        </View>
    )
}

export default CommonInput


const styles = StyleSheet.create({
    InputWrapper: {
        backgroundColor: colors?.InputBackground,
        width: '100%',
        height: height / 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginVertical: 10,
        shadowColor: colors?.InputShadow,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },
    input: {
        width: '70%',
        fontSize: 12,
        fontFamily: fonts?.PoppinsRegular,
        color: colors?.greyText,

    }
})