import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

    const [menu,setMenu] = useState("toggleMenu");

    const handleMenu =()=>{
        if(menu == "toggleMenu"){
            setMenu("toggleMenuShow")
        }
        else{setMenu("toggleMenu")}
    }

    return (
        <header>
            <div className="mainMenu">
                <div class="logoBox">
                    <img src="./src/assets/icon/fav-icon.png" alt="Logo"/>
                </div>
                <div class="buttonBox">
                    <Link to="/Pres" class="btnWhite">Prestamos</Link>
                    <Link to="/Planing" class="btnBorder">Inventario</Link>
                    <Link to="/Planing" class="btnSolid">Resportes</Link>
                </div>
                <button class="btnBurger" onClick={handleMenu}>☰</button>
            </div>

            <div className={menu}>
                    <Link to="/Pres" class="btnMenu">Prestamos</Link>
                    <Link to="/Planing" class="btnMenu">Inventario</Link>
                    <Link to="/Planing" class="btnMenu">Resportes</Link>
            </div>

        </header>

    )
}

export default NavBar
