import React from 'react'
import { Link } from 'react-router-dom'

function FrontPage() {
    const image ="../src/assets/images/Libros.jpg"
    return (
        <section className="frontPage">
            <div className="frontPageInfo">
                <div className="mainTitleBox">
                    <h1 className="mainTitle">Biblis-UCI</h1>
                    <h2 className="mainSubTitle">Gestor Bibliotecario de la UCI</h2>
                <p className="mainText">Más de 0 libros e fisico disponibles en la biblioteca de la universidad.</p>
                </div>
                <div className="mainButtonBox"> 
                    <Link to="/Pres" className="btnMain">Prestamo</Link>
                    <Link to="/Planing" className="btnMain">Inventario</Link>
                </div>
                <div className="mainButtonBox"> 
                    <Link to="/Planing" className="btnMain">Reportes</Link>
                </div>
            </div>
            
        </section>
    )
}

export default FrontPage
