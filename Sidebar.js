import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, Button, TouchableHighlight, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';


class Sidebar extends Component {
    profile=()=>{
        Navigation.push('ScreenPage',{
            component:{
                name:'developer',
                options:{
                    topBar:{
                        title:{
                            text:'Developer'
                        }

                    },

                    sideMenu:{
                        left:{
                            visible:false
                        }
                    }
                }
            }
        })

    }
    render() {
        return (
            <View style={{backgroundColor:'white',height:'100%',width:"100%",flex:3}}>
                <View style={{flex:1,backgroundColor:'white'}}>

                    <ImageBackground style={{height:"100%",width:"100%",justifyContent:'center',alignItems:'center',flex:1}} source={{uri:'https://wallpaperstock.net/wallpapers/thumbs1/30020wide.jpg'}}>
                        <View style={{alignContent:'center',alignItems:'center'}}>
                            <Image style={{marginTop:5,height:100,width:100,borderRadius:120,justifyContent:'center',flexDirection:'row',alignItems:'center',alignContent:'center'}} source={{uri:'https://scontent.fdac52-1.fna.fbcdn.net/v/t1.0-9/12346551_927948487295968_7257634091201274614_n.png?_nc_cat=110&_nc_sid=9267fe&_nc_eui2=AeHBBRj8dugLBJ0cMsU9FhsGxn01ZriDW4TGfTVmuINbhPgqtYIs82dtcCazKzZQPBCuTKkl36g3VRMhJT7BxO5l&_nc_ohc=DynLbBEtL5gAX-elQV5&_nc_ht=scontent.fdac52-1.fna&oh=5e3eb9c878dee34a02306af0eff03be6&oe=5EDBFE2E'}}/>

                            <Text style={{fontSize:24,marginTop:10,color:'red'}}>গোপাল ভাঁড়</Text>
                        </View>

                    </ImageBackground>

                </View>

                <View style={{flex:2,marginTop:5}}>

                    <TouchableHighlight style={{padding:5 }} underlayColor='#dddd' onPress={this.profile}>
                        <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',marginLeft:5}} >
                            <Image style={{width:18,height:18,justifyContent:'center'}} source={require('./image/social.png')}/>
                            <Text style={{fontSize:21,marginLeft:7.5}}>Developer</Text>
                        </View>

                    </TouchableHighlight>

                    <TouchableHighlight style={{padding:5}} underlayColor='#dddd' onPress={()=>{
                        Alert.alert("side menu")
                    }}>
                        <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',marginLeft:5}} >
                            <Image style={{width:18,height:18,justifyContent:'center'}} source={require('./image/tool.png')}/>
                            <Text style={{fontSize:21,marginLeft:7.5}}>Setting</Text>
                        </View>

                    </TouchableHighlight>
                    <TouchableHighlight style={{padding:5}} underlayColor='#dddd' onPress={()=>{
                        Alert.alert("side menu")
                    }}>
                        <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',marginLeft:5}} >
                            <Image style={{width:18,height:18,justifyContent:'center'}} source={require('./image/social-media.png')}/>
                            <Text style={{fontSize:21,marginLeft:7.5}}>Share</Text>
                        </View>

                    </TouchableHighlight>

                </View>


            </View>
        );
    }
}

export default Sidebar;
