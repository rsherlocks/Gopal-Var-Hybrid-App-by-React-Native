import React, {Component} from 'react';
import {View,Text,Button,ImageBackground,Image} from 'react-native';


class Profile extends Component {
    render() {
        return (
            <View style={{alignContent:'center',justifyContent:'center',flex:3}}>
               <View style={{flex:1}}>
                   <ImageBackground style={{height:"100%",width:"100%"}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpK1sGeBSUTXrDzPu7a_7coHkIy_BvDMrPfTHiUQNL69hrmLtn&usqp=CAU'}}>

                       <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:10,marginTop:5}}>
                           <Image style={{height:25,width:25}} source={require('./image/tool.png')}/>


                       </View>
                       <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
                           <Image style={{height:57.5,width:57.5,borderColor:'white',borderWidth:1,borderRadius:57.5}} source={{uri:'https://scontent.fdac52-1.fna.fbcdn.net/v/t1.0-9/80103989_1040813129631103_5240399467407998976_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeEQ52-ED-696K7VK_6mvufZzIdiInHEt6XMh2IiccS3pUo2XW75iEVjE5C7TUfCdncttwsx0Z223hjqov5Y0txI&_nc_ohc=zYenXEiKcx8AX-unT_S&_nc_ht=scontent.fdac52-1.fna&oh=296c1116e7127b7c1dc1b91e449790d8&oe=5EDE2884'}}/>

                           <Text style={{fontSize:16,marginLeft:10,color:'white'}}>Md.Yusuf Hasan Rakib</Text>
                       </View>
                       <View style={{flexDirection:'row',flex:3,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                               <Text style={{color:'white',fontSize:12.5}}>2</Text>
                               <Text style={{color:'white',fontSize:12.5}}>My Wishlist</Text>

                           </View>
                           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                               <Text style={{color:'white',fontSize:12.5}}>0</Text>
                               <Text style={{color:'white',fontSize:12.5}}>Followed Stores</Text>

                           </View>
                           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                               <Text style={{color:'white',fontSize:12.5}}>3</Text>
                               <Text style={{color:'white',fontSize:12.5}}>Vouchers</Text>


                           </View>

                       </View>
                   </ImageBackground>


               </View>
                <View style={{flex:2,backgroundColor:'#dddd'}}>
                    <View style={{flex:8}}>
                        <View style={{flex:3,backgroundColor:'white',elevation:1}}>
                            <View>
                                <Text style={{marginLeft:10,padding:5}}>My Orders</Text>
                            </View>
                            <View style={{flexDirection:'row',flex:4,marginTop:5,justifyContent:'center',alignItems:'center'}}>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Image style={{height:35,width:35}} source={require('./image/pay.png')}/>
                                    <Text style={{fontSize:10}}>To Pay</Text>

                                </View>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Image style={{height:35,width:35}} source={require('./image/review.png')}/>
                                    <Text style={{fontSize:10}}>To Review</Text>

                                </View>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Image style={{height:35,width:35}} source={require('./image/return.png')}/>
                                    <Text style={{fontSize:10}}>My Return</Text>

                                </View>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Image style={{height:35,width:35}} source={require('./image/paper.png')}/>
                                    <Text style={{fontSize:10}}>Cancelitations</Text>

                                </View>

                            </View>

                        </View>
                        <View style={{flex:4,backgroundColor:'white',marginTop:15,elevation:1}}>
                            <View style={{marginLeft:10,padding:5}}>
                                <Text>My Service</Text>
                            </View>
                            <View style={{flexDirection:'row',flex:4,justifyContent:'center',alignItems:'center'}}>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Image style={{width:40,height:40}} source={require('./image/message.png')}/>
                                    <Text style={{fontSize:10.5}}>Messages</Text>

                                </View>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Image style={{width:40,height:40}} source={require('./image/ui.png')}/>
                                    <Text style={{fontSize:10.5}}>My Review</Text>

                                </View>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Image style={{width:40,height:40}} source={require('./image/payment.png')}/>
                                    <Text style={{fontSize:10.5}}>Payment Option</Text>

                                </View>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Image style={{width:40,height:40}} source={require('./image/help.png')}/>
                                    <Text style={{fontSize:10.5}}>Help</Text>

                                </View>
                            </View>

                        </View>
                        <View style={{flex:1}}></View>

                    </View>

                </View>

            </View>
        );
    }
}

export default Profile;
