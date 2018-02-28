import React,{Component} from 'react';
import React from 'react-dom';
import Header from 'root/layout/Header';
import Sider from 'root/layout/Sider';
import Footer from 'root/layout/Footer';
class Home extends Component{
    render(){
      return(
        <div>
          <Header></Header>
          <Sider></Sider>
          <Footer></Footer>
        </div>
      )
    }
}
