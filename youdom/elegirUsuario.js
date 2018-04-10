import React from 'react';
import { Alert, StyleSheet, View, Button, } from 'react-native';
import { ToolbarAndroid } from 'react-native-gesture-handler';
import { StackNavigator } from 'react-navigation';
import hacerPedido from './hacerPedido';

class elegirUsuario extends React.Component {

  onPressButton(){
    Alert.alert(
      'Bienvenido',
      'Recuerda .....',[{
        text: 'Aceptar',
        onPress: ( () => hacerPedido )
      },{
        text: 'Cancelar',
        onPress:(this.cancelar)
      }

      ]
    )
  }

  cancelar(){
    Alert.alert('Cancelar')
  }

  onPressPedido(){
    Alert.alert('¡No has hecho un pedido!')
  }

  


  render() {
    return (  
      <View style={styles.container}>       
        <View style = {styles.principal}>
          <View style={styles.buttonContainer}>
            <Button
            onPress={this.onPressButton}
            title = "Tomar Pedidos"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
            onPress={() => this.props.navigation.navigate('make')}
            title = "Hacer Pedidos"
            color = "#d47500"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
            onPress={this.onPressPedido}
            title = "Estado de Pedido"
            color ='#e5c500'
            />
          </View>
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: elegirUsuario,
    },
    make: {
      screen: hacerPedido,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

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
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

//Esto es el toolBar
/*<View  style={styles.containerToolbar} >
<ToolbarAndroid
style = {styles.toolbar}
logo={require('../assets/IconYD.png')}
title= "YouDom"
actions={[{title:'Settings', show: "always"}]}
onIconClicked={this.onPressButton} />
</View>*/