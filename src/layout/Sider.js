import React,{Component} from 'react';
import Menus from 'root/layout/Menus';
import styles from 'root/css/homelayout.css';
class Sider extends Component{
  render(){
    return(
      <div className={styles.main}>
          <Menus></Menus>
      </div>
    )
  }
}

export default Sider;
