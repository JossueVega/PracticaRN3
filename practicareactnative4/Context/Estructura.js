import React, { createContext, useState } from 'react';
import {  Text,View,StyleSheet,ToastAndroid,Button,StatusBar,Alert,} from 'react-native';
export const Estructura = createContext();

const Estructuraprovider = (props) => {
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [catalogo, setCatalogo] = useState([
   {codigo:1,titulo:"Programación", precio:100.50,idioma:'ESP', desactivado:false},
   {codigo:2,titulo:"Aprende Python", precio:80.00, idioma:'ESP',desactivado:false},     
   {codigo:3,titulo:"Precálculo", precio:90.50, idioma:'ESP',desactivado:false},
   {codigo:4,titulo:"Ingenieria De Software", precio:60.50, idioma:'ESP',desactivado:false},
   {codigo:5,titulo:"Ingenieria De Software 2", precio:200.00, idioma:'ESP',desactivado:false}
  ]);

  const agregarWishList = (c) => {
    let temporal = catalogo;

    temporal = catalogo.filter((a) => a.codigo !== c.codigo);

    let propiedades = {
      codigo: c.codigo,
      titulo: c.titulo,
      precio: c.precio,
      idioma: c.idioma,
      desactivado: true,
    };

    let orden = temporal.concat(propiedades);

    setCatalogo(orden);

    setWishList((wishlist) => [...wishlist, propiedades]);
  };

  const eliminarWishList = (c) => {
    let eliminado = wishList.filter((a) => a.codigo !== c.codigo);

    let temporal = catalogo.filter((a) => a.codigo !== c.codigo);

    let propiedad = {
      codigo: c.codigo,
      titulo: c.titulo,
      precio: c.precio,
      idioma: c.idioma,
      desactivado: false,
    };

    let orden = temporal.concat(propiedad);

    setCatalogo(orden);
    setWishList(eliminado);
  };

  const agregarCarro = (b) => {
    const buscado = carrito.find((a) => a.codigo === b.codigo);
    let temcarro = carrito;
    var objtemporal;

    if (buscado !== undefined) {
      objtemporal = {
        cantidad: buscado.cantidad + 1,
        codigo: b.codigo,
        titulo: b.titulo,
        precio: b.precio,
      };
      temcarro = carrito.filter((a) => a.codigo !== b.codigo);
    } else {
      objtemporal = {
        cantidad: 1,
        codigo: b.codigo,
        titulo: b.titulo,
        precio: b.precio,
      };
    }

    setCarrito([...temcarro, objtemporal]);
    setTotal(total + b.precio);
  };

  const eliminar = (b, index) => {
    let temcarro;

    if (b.cantidad === 1) {
      temcarro = carrito.filter((b, i) => i !== index);
    } else {
      const objtemporal = {
        cantidad: b.cantidad - 1,
        codigo: b.codigo,
        titulo: b.titulo,
        precio: b.precio,
      };
      temcarro = carrito.filter((b, i) => i !== index);
      temcarro = [...temcarro, objtemporal];
    }

    setCarrito(temcarro);
    setTotal(total - b.precio);
  };

  const borrartodo=() =>{
    setCarrito([]);
    setTotal(0);
  }
  

  return (
    <Estructura.Provider
      value={{
        catalogo,
        carrito,
        wishList,
        cantidad,
        total,
        agregarWishList,
        eliminarWishList,
        agregarCarro,
        eliminar,
        borrartodo
      }}>
      {props.children}
    </Estructura.Provider>
  );
};

export default Estructuraprovider;
