import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, Alert} from 'react-native';
import {Navigation} from "react-native-navigation";


class Contact extends Component {
    data=[{
        id:1,
        country:"Bangladesh",
        city:"ছোটবেলা গোপাল ভাঁড় কোনো বিয়ের অনুষ্ঠানে গেলে বুড়োরা তাকে ক্ষেপাত আর হাসত, ‘গোপাল, এর পর তোমার পালা।’শুনে গোপালের খুব রাগ হত। বুড়োদের কিভাবে জব্দ করা যায়, সেই পথ খুঁজতে লাগল এবং এক সময় পেয়ে গেল।শবদাহ আর শ্রাদ্ধের অনুষ্ঠানে গিয়ে ঐসব বুড়োদের বলতে লাগল, ‘এর পর তোমার পালা!’" +
            "ছোটবেলা গোপাল ভাঁড় কোনো বিয়ের অনুষ্ঠানে গেলে বুড়োরা তাকে ক্ষেপাত আর হাসত, ‘গোপাল, এর পর তোমার পালা।’শুনে গোপালের খুব রাগ হত। বুড়োদের কিভাবে জব্দ করা যায়, সেই পথ খুঁজতে লাগল এবং এক সময় পেয়ে গেল।শবদাহ আর শ্রাদ্ধের অনুষ্ঠানে গিয়ে ঐসব বুড়োদের বলতে লাগল, ‘এর পর তোমার পালা!’",
        img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
    },
        {
            id:2,
            country:"India",
            city:"Delli",
            img:"https://cdn.pixabay.com/photo/2019/09/26/14/04/etretat-4506072__480.jpg"
        },
        {
            id:3,
            country:"Pakistan",
            city:"Dhak",
            img: "https://cdn.pixabay.com/photo/2020/04/28/10/34/sea-5103840__480.jpg"
        },
        {
            id:4,
            country:"karachi",
            city:"islmabad",
            img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
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
    ChildViewGrid=({Childcountry,Childcity,img})=>{
        return(
            <View  style={{flexDirection:'column',backgroundColor:'white',shadowColor:'black',
                shadowOpacity:1,shadowOffset:{height: 10,width:10},
                borderRadius:3,
                width:"50%",height:110,shadowRadius:10,
                padding:5,margin:10,flex:3,elevation:5}}>

                <View  style={{flex:2.25}}>
                    <TouchableOpacity onPress={this.OnClikitem.bind(this,Childcountry,img,Childcity)}>
                        <Image  style={{height:70,width:'100%'}} source={{uri:img}}/>
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
            <View style={{flex:4,backgroundColor:'#fff'}}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:11}}>There are no item in this cart</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',
                        alignContent:'center',borderRadius:5,
                        marginLeft:30,marginRight:30,marginTop:10,backgroundColor:'#ddd'}}>
                        <Text style={{fontSize:12,padding:10}}>No Shopping</Text>
                    </View>

            </View>
                <View style={{flex:3,backgroundColor:'#ddd'}}>

                    <View style={{backgroundColor:'#fff',marginTop:10,flex:1}}>
                        <View style={{justifyContent:'center',alignItems:'center',
                            alignContent:'center'}}>
                            <Text style={{fontSize:16,padding:10}}>///Just For You///</Text>
                        </View>
                        <View style={{flex:2.5}}>
                            <FlatList  keyExtractor={(item,index)=>item+index}  numColumns={2} data={this.data} renderItem={({item})=><this.ChildViewGrid Childcountry={item.country} Childcity={item.city} img={item.img} />}/>

                        </View>

                    </View>


                </View>


            </View>
        );
    }
}

export default Contact;
