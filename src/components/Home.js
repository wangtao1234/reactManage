import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from 'root/layout/Header';
import Sider from 'root/layout/Sider';
import Footers from 'root/layout/Footer';

class Home extends Component{
    render(){
      return(
        <div>
          <Header></Header>
          <Sider>

          </Sider>
        </div>
      )
    }
}

export default Home;
