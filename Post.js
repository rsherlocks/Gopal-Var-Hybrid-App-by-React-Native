import React, {Component} from 'react';
import {View,Text,Image,ScrollView} from 'react-native';

class Post extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{height:220,width:'100%',backgroundColor:'#ddd'}}>
                    <Image style={{height:200,width:'100%'}} source={{uri:this.props.pImg}}/>
                </View>

                <View style={{flexDirection:'row',flex:10,padding:10,justifyContent:'center',
                    alignItems:'center',margin:10,backgroundColor:'#ddd',borderRadius:5}}>
                    <View style={{flex:5}}>
                        <Text style={{fontSize:20}}>Price: $205</Text>
                    </View>
                    <View style={{justifyContent:'flex-end',alignContent:'center',alignItems:'flex-end',flex:5,flexDirection:'row'}}>
                        <Image style={{height:20,width:20,margin:5}} source={require('./image/love.png')}/>
                        <Image style={{height:20,width:20,margin:5}} source={require('./image/social-media.png')}/>
                    </View>

                </View>
               <View style={{backgroundColor:'white',margin:10,justifyContent:'center',alignContent:'center',elevation:5,alignItems:'center'}}>
                   <Text style={{fontSize:20,padding:5,textDecorationLine:'underline'}}>{this.props.country}</Text>
                   <Text style={{fontSize:15,textAlign:'justify',textAlignVertical:'center',padding:5}}>{this.props.city}</Text>
               </View>


            </ScrollView>

        );
    }
}

export default Post;
