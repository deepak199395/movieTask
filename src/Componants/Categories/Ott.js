import { Image, StyleSheet, Text, TouchableOpacity, View,Linking } from 'react-native'
import React from 'react'

const Ott = () => {
  const catImage=[
    {
        title: 'mini tv',
        iconUrl: require('../../Assets/amazon.jpeg'),
        redirectUrl: 'https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_kk_JPN_mkw_sRumWk2Nj-dc?mrntrk=pcrid_691584775167_slid__pgrid_162168094027_pgeo_9050485_x__adext__ptid_kwd-303629226711',

    },
    {
        title: 'HotStar',
        iconUrl: require('../../Assets/hotstart.jpeg'),
        redirectUrl: 'https://www.hotstar.com/in/home?ref=%2Fin',

    }, {
        title: 'Netflix',
        iconUrl: require('../../Assets/netflix.jpeg'),
        redirectUrl: 'https://www.netflix.com/in/',

    }, {
        title: 'Jio Cinema',
        iconUrl: require('../../Assets/jio.jpeg'),
        redirectUrl: 'https://www.jiocinema.com/',

    }, {
        title: 'Lalan Top',
        iconUrl: require('../../Assets/lalan.jpeg'),
        redirectUrl: 'https://www.thelallantop.com/',

    }, {
        title: 'Sony Liv',
        iconUrl: require('../../Assets/sorry.jpeg'),
        redirectUrl: 'https://www.sonyliv.com/subscription?utm_source=google&utm_medium=paid&utm_campaign=IN_MSixSonyLIV_NA_Performance_AlwaysON_Brand_Launch_Search_Subscriptions_India_Apr_2022_V0&utm_content=Brand&gad_source=1&gclid=CjwKCAiAivGuBhBEEiwAWiFmYcBiXiwBwMzORR6Si4VkA2Ub4HffTZomSGh3R142smuMC1BlpVDeWhoCUZcQAvD_BwE',

    },
    
  ]
  const handlePress = (redirectUrl) => {
    // Check if the redirect URL is not empty before trying to open it
    if (redirectUrl) {
      // Use Linking to open the URL
      Linking.openURL(redirectUrl);
    }
  };

return (
    <View style={styles.CatContainer}>
    {catImage.map((item,index)=>(
        <View key={index}>
        <TouchableOpacity  style={styles.iconContainer} onPress={() => handlePress(item.redirectUrl)}>
        <Image style={styles.icons} source={item.iconUrl}/>
        <Text style={{color: '#000000',
                      alignSelf: 'center',
                     marginTop: 4, textAlign:
                      "center", fontSize: 10,
                       fontWeight: "600",textAlign:"center"}} >{item.title}</Text>
        </TouchableOpacity>
        </View>
    ))}
    </View>
  )
}

export default Ott

const styles = StyleSheet.create({
    CatContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        rowGap: 0,
        flexWrap:"wrap",
        marginVertical:10,
        marginHorizontal:10,
        backgroundColor:"white",
        borderWidth:0.5,
        alignItems:"center",
        padding:5,
        borderRadius:10,

    },
    icons:{
        width:40,
        height:50,
        borderColor:"black",
        alignItems: 'center',

    },
    iconContainer:{
        display: 'flex',
        justifyContent: 'center',



    }
})