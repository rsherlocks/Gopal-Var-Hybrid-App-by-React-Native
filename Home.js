import React, {Component} from 'react';
import {View,Text,FlatList,Image,Alert,TouchableOpacity} from 'react-native'
import {Navigation} from 'react-native-navigation';



class Home extends Component {
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }
    navigationButtonPressed({componentId}){
        Navigation.mergeOptions(this.props.componentId,{
            sideMenu:{
                left:{
                    visible:true
                }
            }
        })
    }

    data=[{
        id:1,
        country:"এর পর তোমার পালা",
        city:"ছোটবেলা গোপাল ভাঁড় কোনো বিয়ের অনুষ্ঠানে গেলে বুড়োরা তাকে ক্ষেপাত আর হাসত, ‘গোপাল, এর পর তোমার পালা।’শুনে গোপালের খুব রাগ হত। বুড়োদের কিভাবে জব্দ করা যায়, সেই পথ খুঁজতে লাগল এবং এক সময় পেয়ে গেল।শবদাহ আর শ্রাদ্ধের অনুষ্ঠানে গিয়ে ঐসব বুড়োদের বলতে লাগল, ‘এর পর তোমার পালা!’" +
            "ছোটবেলা গোপাল ভাঁড় কোনো বিয়ের অনুষ্ঠানে গেলে বুড়োরা তাকে ক্ষেপাত আর হাসত, ‘গোপাল, এর পর তোমার পালা।’শুনে গোপালের খুব রাগ হত। বুড়োদের কিভাবে জব্দ করা যায়, সেই পথ খুঁজতে লাগল এবং এক সময় পেয়ে গেল।শবদাহ আর শ্রাদ্ধের অনুষ্ঠানে গিয়ে ঐসব বুড়োদের বলতে লাগল, ‘এর পর তোমার পালা!’",
        img:"https://s3-ap-southeast-1.amazonaws.com/seeoutlook/wp-content/uploads/2018/01/11180711/Untitled-4-Copy-copy.jpg"
    },
        {
            id:2,
            country:"India",
            city:"Delli",
            img:"https://image.winudf.com/v2/image1/c2FnYXIuaHJlZGF5LnBvZW1fc2NyZWVuXzFfMTU2NDA2NzQ5OV8wNTM/screen-1.jpg?fakeurl=1&type=.jpg"
        },
        {
            id:3,
            country:"Pakistan",
            city:"Dhak",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaoN2QcgwpAnsnnXJasfSDlvjEixjuvSBx-L2lfrTYUFXdRuWX&usqp=CAU"
        },
        {
            id:4,
            country:"karachi",
            city:"islmabad",
            img:"https://i.ytimg.com/vi/r8C_IJKApLQ/hqdefault.jpg"
        },
        {
            id:5,
            country:"Bangladesh",
            city:"Dhaka",
            img:"https://cdn.pixabay.com/photo/2019/09/26/14/04/etretat-4506072__480.jpg"
        },
        {
            id:6,
            country:"Bangladesh",
            city:"Dhaka",
            img: "https://cdn.pixabay.com/photo/2020/04/28/10/34/sea-5103840__480.jpg"
        },
        {
            id:7,
            country:"Bangladesh",
            city:"Dhaka",
            img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
        },
        {
            id:8,
            country:"India",
            city:"Delli",
            img:"https://cdn.pixabay.com/photo/2019/09/26/14/04/etretat-4506072__480.jpg"
        },
        {
            id:9,
            country:"Pakistan",
            city:"Dhak",
            img:"https://cdn.pixabay.com/photo/2019/09/26/14/04/etretat-4506072__480.jpg"
        },
        {
            id:10,
            country:"karachi",
            city:"islmabad",
            img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
        },
        {
            id:11,
            country:"Bangladesh",
            city:"Dhaka",
            img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
        },
        {
            id:12,
            country:"Bangladesh",
            city:"Dhaka",
            img: "https://cdn.pixabay.com/photo/2020/04/28/10/34/sea-5103840__480.jpg"
        },
        {
            id:13,
            country:"Bangladesh",
            city:"Dhaka",
            img: "https://cdn.pixabay.com/photo/2020/04/28/10/34/sea-5103840__480.jpg"
        }
    ];
    ChildView=({Childcountry,Childcity,img})=>{
        return(
            //Vertical ListView
            <View style={{width:150,
                backgroundColor:'white',
                borderBottomRightRadius:20,
                elevation:5,
                margin:10,padding:5,flexDirection:'column',flex:4
            }}>
                <View style={{flex:2}}>
                    <Image style={{height:70,width:"100%"}} source={{uri:img}}/>
                </View>
                <View style={{flex:1.2,backgroundColor:'white',marginTop:5,justifyContent:'center',alignItems:'center'}}>
                    <Text onPress={this.onClikItem.bind(this,Childcountry)} style={{color:'black',fontSize:16}}>{Childcountry}</Text>

                </View>
            </View>

        );


    }
    onClikItem=(ChildCountry)=>{
        Alert.alert(ChildCountry)

    }
    ChildViewGrid=({Childcountry,Childcity,img})=>{
        return(
            <View  style={{flexDirection:'column',backgroundColor:'white',shadowColor:'black',
                shadowOpacity:1,shadowOffset:{height: 10,width:10},
                borderRadius:3,
                width:"50%",height:125,shadowRadius:10,
                padding:5,margin:10,flex:3,elevation:5}}>

                <View  style={{flex:2.25,backgroundColor:'black'}}>
                    <TouchableOpacity onPress={this.OnClikitem.bind(this,Childcountry,img,Childcity)}>
                        <Image  style={{height:90,width:'100%',justifyContent:'center'}} source={{uri:img}}/>
                    </TouchableOpacity>

                </View>
                <View style={{flex:0.75,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={this.OnClikitem.bind(this,Childcountry,img,Childcity)}>
                        <Text  style={{color:'black',fontSize:16}}>{Childcountry}</Text>

                    </TouchableOpacity>

                </View>

            </View>
        );
    }
    OnClikitem=(AlertCountry,img,Childcity)=>{
        // Alert.alert(AlertCountry);
        Navigation.push(this.props.componentId,{
            component:{
                name:'post',
                passProps:{
                    country:AlertCountry,
                    city:Childcity,
                    pImg:img
                },
                options:{
                    topBar:{
                        title:{
                            text:'Product'
                        }

                    },
                   bottomTabs:{
                       visible:false
                   }
                }
            }
        })


    }
    render() {
        return (

            <View style={{flex:10.1,marginTop:5,backgroundColor:'white',flexDirection:'column'}}>
                <View style={{marginLeft:10,flex:0.6,flexDirection:'row'}}>
                    <Text style={{flex:3,fontSize:18}}>Most Populer</Text>
                    <Text style={{flex:2,alignContent:'flex-end',fontSize:17}}>Show more=></Text>

                </View>

                <View style={{flex:3}}>
                    <FlatList  keyExtractor={(item,index)=>item+index} horizontal={true} data={this.data} renderItem={({item})=><this.ChildView Childcountry={item.country} Childcity={item.city} img={item.img} />}/>
                </View>

                <View style={{margin:10,flex:0.5}}>
                    <Text style={{fontSize:18}}>Collections</Text>
                </View>

                <View style={{flex:5.55}}>
                    <FlatList  keyExtractor={(item,index)=>item+index}  numColumns={2} data={this.data} renderItem={({item})=><this.ChildViewGrid Childcountry={item.country} Childcity={item.city} img={item.img} />}/>
                </View>


            </View>
        );
    }
}

export default Home;

