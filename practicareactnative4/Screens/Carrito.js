import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Estructura } from '../Context/Estructura';

export default function Wishlist() {
  const { carrito, total, eliminar, borrartodo } = useContext(Estructura);

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text key={total}>Total = $ {total} </Text>
        </View>
        <TouchableHighlight onPress={() => borrartodo(total)}>
           <Ionicons name={'trash'} size={22} color={'red'} />
        </TouchableHighlight>
      </View>
      <View>
        <Button title="COMPRAR" buttonStyle={{borderRadius: 10, marginLeft: 10, marginRight: 10, marginBottom: 10}} onPress={() => borrartodo(total)}/>
      </View>
      <ScrollView>
        {carrito.length === 0 
        ?(  
          <View>
            <Text style={styles.paragraph}>No hay nada en tu carrito</Text>
          </View>
                  
        ) :  (
                              
          carrito.map((a,i)=>
            <Card>
            <Card.Title>{a.titulo}</Card.Title>
            <Text key={i}>Cantidad = {a.cantidad} </Text>
            <Text key={i}>Precio = $ {a.precio} c/u </Text>
            <Text key={i}>Importe = $ {a.cantidad*a.precio} c/u </Text>
            <View style={styles.container}>
              <TouchableHighlight onPress={() => eliminar(a, i)}>
                <Ionicons name={'trash'} size={22} color={'red'} />
              </TouchableHighlight>
            </View>
            </Card>)
                     
        ) 
        }    
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 24,
    flexDirection: 'row',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
