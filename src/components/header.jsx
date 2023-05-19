import React from 'react';
import Nav from './Navbar'

const Header = () => {

  const [show,setShow] = React.useState(false)

   function toggle(){
    setShow(prevShow => !prevShow)
  }  
  
  const styles = {
    backgroundColor: 'orangeRed',
    display : 'flex',
    justifyContent:'space-between',
    padding:'1.5rem',
    position:'sticky',
    top:'0px'
  }

  return (
    <div>
      <div style={styles}>
        <button onClick={toggle}>menu</button>
        <h2>OMDcollection</h2>
        <ul style={{display: 'flex',justifyContent:'space-between',flex:.5}}>
          <li>home</li>
          <li>about</li>
          <li>service</li>
        </ul>
      </div>
      <div>
        {show && <Nav />}
      </div>
    </div>
  );
}

export default Header;
