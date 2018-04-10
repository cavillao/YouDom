import React from 'react';
import { Alert, StyleSheet, Text, View, Button, Touchable } from 'react-native';
import { ToolbarAndroid } from 'react-native-gesture-handler';

export default class login extends React.Component{
    onPressButton(){
        Alert.alert(
          'Bienvenido',
          'Recuerda .....',[{
            text: 'Aceptar',
            onPress: {}
          },{
            text: 'Cancelar',
            onPress:(this.cancelar)
          }
    
          ]
        )
      }

    render(){
        return(
            <View styles = {styles.container}>
               <View style={styles.buttonContainer}>
                <Button
                 onPress={this.onPressButton}
                 title = "Ingresar"
                 color = "#d47500"
                />
              </View> 
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor : '#A9A9A9',
      flex: 1,
      justifyContent: 'center',
    },
    
    buttonContainer: {
      margin: 20
    },
  });