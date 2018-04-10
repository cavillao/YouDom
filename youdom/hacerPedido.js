

import React from 'react';
import { Alert, StyleSheet,Text ,View, ScrollView, Button, Image, Picker, TouchableNativeFeedback
, Touchable } from 'react-native';
import { ToolbarAndroid } from 'react-native-gesture-handler';


export default class hacerPedido extends React.Component{
  constructor(){
    super();
     this.state = {
      PickerRestaurante:'',
      PickerComida: '',
      PickerDeseo: '',
      PickerBebida: '',
      PickerLugar: ''
      
    }
  }


    onPressMake(){
        Alert.alert('Buscando Voluntario...')
    }
    render(){
        return(
          <ScrollView>
            <View style={styles.container}>     
             <View style = {styles.principal}>
                
                <View>
                     <Image
                        style = {{width : 400, height: 220, alignItems: 'center'}}
                        source = {require('../assets/map.jpg')}
                    /> 
                </View>

                <View style = {styles.elegir} >

                  <Picker selectedValue = {this.state.PickerDeseo}
                   onValueChange = {(itemValue, itemIndex)=> this.setState({PickerDeseo:itemValue})} mode ='dropdown'>
                    <Picker.Item label = "¿Que Quieres?" value =""/>
                    <Picker.Item label = "Comida" value = "Comida" />
                    <Picker.Item label = "Fotocopia" value = "Fotocopia" />
                    <Picker.Item label = "Amor xD" value = "xD" />
                  </Picker>

                  <Picker selectedValue = {this.state.PickerRestaurante}
                   onValueChange = {(itemValue, itemIndex)=> this.setState({PickerRestaurante:itemValue})} mode ='dropdown'>
                    <Picker.Item label = "¿De donde lo quieres?" value =""/>
                    <Picker.Item label = "Frysbi" value = "Frysbi" />
                    <Picker.Item label = "Bigos" value = "Bigos" />
                    <Picker.Item label = "Mi Buñuelo" value = "Mi Buñuelo" />
                  </Picker>

                  <Picker selectedValue = {this.state.PickerComida}
                   onValueChange = {(itemValue, itemIndex)=> this.setState({PickerComida:itemValue})} mode ='dropdown'>
                    <Picker.Item label = "¿Que deseas Comer?" value =""/>
                    <Picker.Item label = "Frisbysazo" value = "Frisbysazo" />
                    <Picker.Item label = "Bowl" value = "Bowl" />
                    <Picker.Item label = "Casuela" value = "Casuela" />
                  </Picker>

                 <Picker selectedValue = {this.state.PickerBebida}
                   onValueChange = {(itemValue, itemIndex)=> this.setState({PickerBebida:itemValue})} mode ='dropdown'>
                    <Picker.Item label = "¿Que sabor tu bebida?" value =""/>
                    <Picker.Item label = "Coca Cola" value = "Coca" />
                    <Picker.Item label = "Manzana" value = "Manzana" />
                    <Picker.Item label = "7Up" value = "7Up" />
                  </Picker>

                  <Picker selectedValue = {this.state.PickerLugar}
                   onValueChange = {(itemValue, itemIndex)=> this.setState({PickerLugar:itemValue})} mode ='dropdown'>
                    <Picker.Item label = "¿Donde Estas?" value =""/>
                    <Picker.Item label = "Bloque 38" value = "18" />
                    <Picker.Item label = "Bloque 13" value = "13" />
                    <Picker.Item label = "Bloque 18" value = "38" />
                  </Picker>  
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                  onPress={this.onPressMake}
                   title = "Pedir"
                   color = "#d47500"
                     />
                </View>
             </View>
         </View>
         </ScrollView>
        );
    }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#A9A9A9',
    flex: 1,
  },
  containerToolbar: { 
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  principal: {
    flex : 1,
    justifyContent: 'center',
    backgroundColor: '#FFFF',
  },
  buttonContainer: {
    margin: 20
  },
  toolbar: {
    marginTop : 20,
    backgroundColor: '#e9eaed',
    height: 60,
  },
  elegir: {
    width : 270,
    alignSelf: 'center'
 }
});



/*<View  style={styles.containerToolbar} >
<ToolbarAndroid
style = {styles.toolbar}
logo={require('./assets/IconYD.png')}
title= "YouDom"        

actions={[{title:'Settings', show: "always"}]}
onIconClicked={this.onPressButton} />
</View>*/