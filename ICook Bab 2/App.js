import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground,TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Receipt21, Message, SearchNormal1, HomeTrendUp, ProfileCircle, Book, Notification} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ICOOK!</Text>
      </View>
      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <View style={styles.searchContainer}>
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <SearchNormal1
                 color={colors.brown()}
                 variant="Linear"
                 size={15}
                 style={styles.icon}
              /> 
            </TouchableOpacity>
          </View>
          <TextInput style={styles.input}
            placeholder="Search Recipe"
            variant="Linear"
            placeholderTextColor="grey"
          /> 
        </View>
        <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.brown()}}>
              All
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Breakfast</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Lunch</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Dinner</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Dessert</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Bake</Text>
          </View>
        </ScrollView>
      </View>
      <ListBlog />
    </View>
    </View>
  );
}

const ListBlog = () => {
  return (
    <ScrollView>
      
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 10}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 10}}
              source={{
                uri: 'https://images.unsplash.com/photo-1612182062633-9ff3b3598e96?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBhbmNha2V8ZW58MHx8MHx8fDI%3D',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                <Text style={itemHorizontal.cardTitle}>
                    Pancake
                  </Text>
                  <Text style={itemHorizontal.cardText}>By Viska Natasya</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
          <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 10}}
              source={{
                uri: 'https://images.unsplash.com/photo-1534817557314-c781397d0b87?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                <Text style={itemHorizontal.cardTitle}>
                    Korean Gimbap
                  </Text>
                  <Text style={itemHorizontal.cardText}>By Viska Natasya</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
          <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 10}}
              source={{
                uri: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                <Text style={itemHorizontal.cardTitle}>
                    Indonesian Madura Satay
                  </Text>
                  <Text style={itemHorizontal.cardText}>By Viska Natasya</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
          <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 10}}
              source={{
                uri: 'https://images.unsplash.com/photo-1617918160302-f2dfbcb3f88c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlycmlhJTIwdGFjb3N8ZW58MHx8MHx8fDI%3D',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                <Text style={itemHorizontal.cardTitle}>
                    Mexican Birria Tacos
                  </Text>
                  <Text style={itemHorizontal.cardText}>By Viska Natasya</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
          <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 10}}
              source={{
                uri: 'https://images.unsplash.com/photo-1606491956391-70868b5d0f47?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF2JTIwYmhhaml8ZW58MHx8MHx8fDI%3D',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                <Text style={itemHorizontal.cardTitle}>
                    Indian Pav Bhaji
                  </Text>
                  <Text style={itemHorizontal.cardText}>By Viska Natasya</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1637334207760-40c9da8ef2ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhc2hpbWl8ZW58MHx8MHx8fDI%3D',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemVertical.cardCategory}>Knife Skill</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to cut sashimi properly!
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemVertical.cardCategory}>Cooking tips</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to get rid of fishy smell in seafood!
                  </Text>
                </View>
              </View>
            </View>
      </View>
      <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0ZWFrJTIwbWVkaXVtJTIwcmFyZXxlbnwwfHwwfHx8Mg%3D%3D',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemVertical.cardCategory}>Cooking Skill</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to make medium rare steak
                  </Text>
                </View>
              </View>
            </View>
      </View>
      </View> 
        <View style={styles.footer}>
          <TouchableOpacity style={styles.searchButton}>
            <HomeTrendUp color={colors.brown()} variant="Linear" size={28} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <SearchNormal1 color={colors.brown()} variant="Linear" size={28} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Receipt21 color={colors.brown()} variant="Linear" size={28} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <ProfileCircle color={colors.brown()} variant="Linear" size={28} />
          </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.choco(),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  searchButtonContainer: {
    paddingLeft: 10,
  },
  notifContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  searchButton: {},
  icon: {
    margin: 8,
    // marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: 'black',
    height: 45,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  footer: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:50,
    elevation: 0,
    paddingTop:4,
    paddingBottom:8,
    borderRadius: 15,
    backgroundColor: colors.choco(0.30),
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 30,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.choco(0.30),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.brown(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 13,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.brown(),
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 500,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 50,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 1,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

