import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet,Share,Alert ,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Dashboard() {
    let [firstChoice, setFirstChoice] = useState('');
    let [secondChoice, setSecondChoice] = useState('');
    let [thirdChoice, setThirdChoice] = useState('');
    let [finalChoice, setFinalChoice] = useState('');

    const ShareExample = () => {
      const onShare = async () => {
        try {
          const result = await Share.share({
            message: `I have these option ${firstChoice},${secondChoice},${thirdChoice} The app chose ${finalChoice} `
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
      return (
        <View style={{ marginTop: -1 }}>
    <TouchableOpacity style={{ marginTop:-50 }} onPress={onShare}>
          <Icon  name="share-social-outline" style={{fontSize:50,color:'black',paddingLeft:200,paddingTop:50}}/>
      </TouchableOpacity>
        </View>
      );
    };

    let AddChoice=()=>{
      let generateRandom=Math.ceil(Math.random()*3);

      if(generateRandom===1){
        alert(`The Answer is ${firstChoice}`)
        setFinalChoice(firstChoice)
        }
        else if(generateRandom===2){
          alert(`The Answer is ${secondChoice}`)
          setFinalChoice(secondChoice)
        }
        else{
          alert(`The Answer is ${thirdChoice}`)
          setFinalChoice(thirdChoice)

        }
        }

    return (
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center',paddingTop:100 }}>
       <Text style={{fontSize:40,fontWeight:'bold'}}> Let's Decide :) </Text>

            <TextInput
                style={styles.input}
                onChangeText={setFirstChoice}
                value={firstChoice}
                placeholder="Option 1"

            />

            <TextInput
                style={styles.input}
                onChangeText={setSecondChoice}
                value={secondChoice}
                placeholder="Option 2"

            />

            <TextInput
                style={styles.input}
                onChangeText={setThirdChoice}
                value={thirdChoice}
                placeholder="Option 3"

            />

            <Button onPress={AddChoice}
                icon={
                    <Icon 
                        size={25}
                        color="#900"
                        style={{backgroundColor:'#0E86D4'}}
                    />
                }
                title="Decide Now"
            />
            <ShareExample/>
        </View>
        </ScrollView>
    );
              }

const styles = StyleSheet.create({
input: {
height: 50,
width: 250,
margin: 12,
borderWidth: 1.5,
padding: 10,
borderRadius: 15,
fontSize: 20,
color: 'black',
},
scrollView: {
marginHorizontal: 20,
}
})