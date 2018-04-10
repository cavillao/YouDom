
import React from 'react';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';
import {TextInput } from 'react-native-gesture-handler';
import {StackNavigator} from 'react-navigation';
import elegirUsuario from './app/elegirUsuario';

class Login extends React.Component {

  static navigationOptions = {
    title: 'YouDom',
  };
  
  constructor(){
    super();
     this.state = {
      Usuario: '',
      Pass: ''
    }
  }

  render(){
    return(
        <View style = {styles.container}>
            <View>
                 <Image
                    style = {{width : 350, height: 220, alignItems: 'center'}}
                    source = {require('./assets/origin.png')}
                /> 
            </View>
          <View>
            <Text>Usuario</Text>
            <TextInput style = {styles.input}
             onChangeText={(Usuario)=>this.setState({Usuario})}
             value={this.state.text} />
            
            <Text>Password</Text>
            <TextInput style = {styles.input}
             onChangeText={(Pass)=>this.setState({Pass})}
             value={this.state.text} />
          </View>
           <View style={styles.buttonContainer}>
        <Button
            title="Ingresar"
            color = "#d47500"
            onPress={() => this.props.navigation.navigate('Elegir')}
            />
          </View> 
        </View>
    ); 
}
}



const RootStack = StackNavigator(
  {
    Home: {
      screen: Login,
    },
    Elegir: {
      screen: elegirUsuario,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: 200,
    height: 40,

    borderWidth: 1
  },
  
  buttonContainer: {
    margin: 20
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}