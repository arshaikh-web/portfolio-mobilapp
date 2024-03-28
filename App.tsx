import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Linking } from 'react-native';

function Gpp():JSX.Element{
return(
  <SafeAreaView>
     <ScrollView>
    <View style={styles.textBg}>
      <Text style={styles.txt}> 
        AR Shaikh
      </Text>
    </View>
    <View style={styles.nextBg}>
    <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3Dp_cat2.png',
          }}
          style={{width: 300, height: 300}}
        />
        <Text style={{color: 'yellow', marginLeft: -255}}> Hey There, </Text>
        <Text style={{color: '#FFFFFF'}}>My Name Is AR Shaikh,I'm Developing This Application Just For Fun If You Really Wants Me To Do Something For You kindly Contact Me </Text>
        </View>
        <Text style={{fontWeight:"bold",fontSize:20,marginHorizontal: 20}}>This Are Some Of My Web Projects</Text>
        <View style={styles.pextBg}>
        <Text style={{color:'white', fontWeight:"700", fontSize:24}} onPress={()=>{
          Linking.openURL('https://arshaikh-web.github.io/test-math/')
        }}>Math Game</Text>
     </View>
     <View style={styles.pextBg}>
       <Text style={{color:'white', fontWeight:"700", fontSize:24}} onPress={()=>{
          Linking.openURL('https://arshaikh427.github.io/arshaikh.code/')
        }}>Portfolio Site</Text>
     </View>
     <View style={styles.pextBg}>
       <Text style={{color:'white', fontWeight:"700", fontSize:24}} onPress={()=>{
          Linking.openURL('https://arshaikh-web.github.io/joke-generator/')
        }}>Joke Generator</Text>
     </View>
     <Text style={{fontWeight:"bold",fontSize:20,marginHorizontal: 130}}>My Socials</Text>
     <View style={styles.sextBg}>
       <Text style={{color:'white', fontWeight:"700", fontSize:24}} onPress={()=>{
          Linking.openURL('https://github.com/arshaikh-web')
        }}>Github</Text>
     </View>
     <View style={styles.sextBg}>
       <Text style={{color:'white', fontWeight:"700", fontSize:24}} onPress={()=>{
          Linking.openURL('https://discord.com/users/893756643257507850')
        }}>Discord</Text>
     </View>
        </ScrollView>
  </SafeAreaView>
  
)
}
const styles = StyleSheet.create({
  textBg: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF101',
  },
  nextBg: {
    alignItems: 'center',
    justifyContent: 'center',
    position:"relative",
    margin: 10,
    padding: 10,
    backgroundColor: 'red',
  },
  pextBg: {
    alignItems: 'center',
    justifyContent: 'center',
    position:"relative",
    margin: 10,
    padding: 10,
    backgroundColor: 'blue',
  },
  sextBg: {
    alignItems: 'center',
    justifyContent: 'center',
    position:"relative",
    margin: 10,
    padding: 10,
    backgroundColor: 'purple',
  },
  txt:{
    zIndex: 99,
    color: '#000000',
    fontSize: 25,
    fontFamily: 'italic',
    fontWeight:"900",
  }
})

export default Gpp;
