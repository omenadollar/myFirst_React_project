import React from "react"


export const Navbar = (props) => {
  const [navbar,setNavbar]= React.useState(['thing 1','thing 2'])
  const navElement = navbar.map(element => <p key={props.key}>{element}</p>)

  function clickMe() {
    setNavbar(prevState => {
      return [...prevState,`thing ${navbar.length + 1}`]
    })
  }
 

  return (
    <div>
      <button onClick={clickMe}>add me</button>
      <ul>
        {navElement}
      </ul>
    </div>
  )
}

export default Navbar