import React, { useState } from "react";
import {Text, View,Image,TextInput, TouchableOpacity, Alert, ActivityIndicator}
from 'react-native';

import { style } from "./style";
import Logo from '../../assents/logo.png'



export default function Login(){
    const [email,setEmail]=useState('');
    const [password,setpassword]=useState('');
    const [loading,setLoading]=useState(false)
    
    async   function getLogin(){
        try {
            setLoading(true)
            if(!email||!password){
                return Alert.alert('atenção','Informe os campos obrigatórios')
            }
            setTimeout(() => {
                if(email=="samuel@gmail.com"&& password=="123"){
                    Alert.alert('Sucesso', 'Logado com sucesso!'); 
                }else{
                    Alert.alert('Usuario não encontrado');
                }

                setLoading(false);
                 // Mensagem de sucesso
        }, 3000);
            
            
        } catch (error) {
            console.log(error)
        }finally{
            
        }
    }
    return(
        
        <View style={style.container}>
           <View style={style.boxTop}>
            <Image
            source={Logo}
            style={style.logo}
            resizeMode="contain"
            />
                <Text style={style.Text}>
                    bem vindo !
                </Text>

            </View>  
            
            <View style={style.boxMid}>
                <Text style={style.titpleinput}>Endereço de e-mail</Text>
                <View style={style.boxInput}>
                <TextInput
                value={email}
                onChangeText={(e)=>setEmail(e)}
                style={style.input}
                />
                </View>
                    <Text style={style.titpleinput}>SENHA </Text>
                    <View style={style.boxInput}>
                    
                <TextInput
                style={style.input}
                value={password}
                onChangeText={setpassword   }
                />
                </View>
                </View> 
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {
                    loading?
                    <ActivityIndicator color={'white'} size={"small"}/>
                    :
                    <Text style={style.buttonEntrar}>Entrar</Text>
                    }
                </TouchableOpacity>
                </View>  
                <Text style={style.nãoTemConta}>Não tem conta ? Crie agora</Text>    
        </View>
    )
}