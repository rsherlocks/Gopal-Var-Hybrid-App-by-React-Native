import {Navigation} from "react-native-navigation";
import App from './App';
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import Developer from "./Developer";
import Post from "./Post";

Navigation.registerComponent('app',()=>App);
Navigation.registerComponent('home',()=>Home);
Navigation.registerComponent('profile',()=>Profile);
Navigation.registerComponent('contact',()=>Contact);
Navigation.registerComponent('sidebar',()=>Sidebar);
Navigation.registerComponent('developer',()=>Developer);
Navigation.registerComponent('post',()=>Post);

const sideMenu={
    left:{
        component:{
            name:'sidebar'
        }


    },
    center:{

            bottomTabs:{
                children:[
                    {
                       stack:{
                           id:'ScreenPage',
                           children:[{
                               component:{
                                   name:'home',
                                   options:{
                                       topBar:{
                                           title:{
                                               text:'Home'
                                           },
                                           leftButtons:{
                                               icon:require('./image/bars.png')
                                           },


                                       }

                                   }
                               }
                           }],
                           options: {
                               topBar:{
                                   visible:true
                               },


                               bottomTab:{
                                   text:'Home',
                                   icon:require('./image/color.png')
                               }

                           }
                       }

                    },
                    {
                        stack: {
                            children: [{

                                component:{
                                    name:'contact',
                                    options: {
                                        topBar: {

                                            title: {
                                                text:'Cart',
                                                alignment: 'center'

                                            }
                                        }
                                    }



                                }
                            }],
                            options: {


                                bottomTab: {
                                    text:'Cart',
                                    icon:require('./image/commerce-and-shopping.png')
                                }

                            }
                        }



                    },

                    {
                        component:{
                            name:'profile',
                            options: {
                                bottomTab: {
                                    text:'Profile',
                                    icon:require('./image/social.png')
                                }
                            }
                        }

                    },
                    {
                        component:{
                            name:'sidebar',
                            options: {
                                bottomTab: {
                                    text:'Menu',
                                    icon:require('./image/bars.png')
                                }
                            }
                        }

                    }
                ]

            }

    }
}

Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            sideMenu




        }
    })
})
