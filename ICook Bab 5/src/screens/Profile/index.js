import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Setting2} from 'iconsax-react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import { fontType, colors } from '../../theme';

const data = BlogList.slice(5);
const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Setting2 color={colors.brown()} variant="Linear" size={24} />
        </View>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 24,
                gap: 40,
                paddingVertical: 20,
        }}>
        <View style={{gap: 15, alignItems: 'center'}}>
        <FastImage
        style={profile.pic}
            source={{
            uri: ProfileData.profilePict,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
        />
        <View style={{gap: 5, alignItems: 'center'}}>
        <Text style={profile.name}>{ProfileData.name}</Text>
        <Text style={profile.info}>
            Share cooking skills {ProfileData.createdAt}
        </Text>
    </View>
</View>
<View style={{paddingVertical: 10, gap:10}}>
    {data.map((item, index) => (
        <ItemSmall item={item} key={index} />
    ))}
</View>
</ScrollView>
</View>
);
};
export default Profile;
        const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.choco(),
        },
        header: {
            paddingHorizontal: 24,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            height: 52,
            elevation: 8,
            paddingTop: 8,
            paddingBottom: 4,
        },
        title: {
            fontSize: 20,
            fontFamily: fontType['Pjs-ExtraBold'],
            color: colors.brown(),
        },
        });

        const profile = StyleSheet.create({
            pic: {width: 120, height: 120, borderRadius: 55},
            name: {
            color: colors.brown(),
            fontSize: 20,
            fontFamily: fontType['Pjs-Bold'],
            textTransform:'capitalize'
        },
        info: {
            fontSize: 12,
            fontFamily: fontType['Pjs-Regular'],
            color: colors.grey(),
        },
        sum: {
            fontSize: 16,
            fontFamily: fontType['Pjs-SemiBold'],
            color: colors.brown(),
        },
        tag: {
            fontSize: 14,
            fontFamily: fontType['Pjs-Regular'],
            color: colors.grey(0.5),
        },
        buttonEdit: {
            paddingHorizontal: 16,
            paddingVertical: 14,
            backgroundColor: colors.grey(0.1),
            borderRadius: 10,
        },
        });