import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import { Setting2, Edit } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { fontType, colors } from '../../theme';

const data = BlogList.slice(5);
const Profile = () => {
    const navigation = useNavigation();
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
<TouchableOpacity
  style={styles.floatingButton}
  onPress={() => navigation.navigate("AddBlog")}
>
  <Edit color={colors.white()} variant="Linear" size={20} />
</TouchableOpacity>
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
        floatingButton: {
            backgroundColor: colors.brown(),
            padding: 15,
            position: 'absolute',
            bottom: 24,
            right: 24,
            borderRadius: 10,
            shadowColor: colors.brown(),
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
        
            elevation: 8,
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