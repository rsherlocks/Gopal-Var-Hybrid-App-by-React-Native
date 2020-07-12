import React, {Component} from 'react';
import {View,Text,Button,ImageBackground,Image} from 'react-native';


class Developer extends Component {
    render() {
        return (
            <View style={{flex:3}}>
                <View style={{flex:1.5}}>
                    <Image style={{height:'100%',width:'100%'}} source={{uri:'https://scontent.fdac52-1.fna.fbcdn.net/v/t1.0-9/30623783_592898591089228_1533390611292356608_o.jpg?_nc_cat=103&_nc_sid=19026a&_nc_eui2=AeEfWTCVweNf6b_Kua88VLVb1rpYA6cwNz_WulgDpzA3P3yofJoDSJNJIwImzrufxCR_XZf2M2oRaHI4AhvE1-yb&_nc_ohc=oNucGaKU-YkAX_1jPXV&_nc_ht=scontent.fdac52-1.fna&oh=a5aaa461d4ba5f7ba03d0e4af475116a&oe=5EDF0B22'}}/>

                </View>
                <View style={{flex:2}}>
                    <Text style={{marginTop:20,marginLeft:10,fontSize:24}}>About Me</Text>
                    <Text style={{marginTop:5,marginLeft:10,fontSize:20}}>Name</Text>
                    <Text  style={{marginTop:5,marginLeft:10,fontSize:16}}>Md.Yusuf Hasan Rakib</Text>

                </View>

            </View>
        );
    }
}

export default Developer;
