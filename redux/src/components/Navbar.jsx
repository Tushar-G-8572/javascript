import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeThermeToDark, changeThermeToLight } from '../redux/slices/themeSlice';

const Navbar = () => {
    const theme = useSelector((state)=>state.theme.value);
    const dispath = useDispatch();

  return (
    <div>current theme is: {theme}
    <button onClick={()=>{dispath(changeThermeToLight())}}>Change theme to light</button>
    <button onClick={()=>{dispath(changeThermeToDark())}} >Change theme to Dark</button>
    </div>
  )
}

export default Navbar