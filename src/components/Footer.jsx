import React from 'react'
import facebook from '../assets/icon/icons8-facebook-150.png'
import instagram from '../assets/icon/icons8-instagram-192.png'
import whatsapp from '../assets/icon/whatsapp.png'

function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <div className="footer-links">
              <h3>Redes sociales:</h3>
              <ul className="social-icons">
                <li>
                    <a href="#">
                        <img src={facebook} alt="Facebook" class="iconFacebook"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={instagram} alt="Instagram" class="iconInstagram"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={whatsapp} alt="Whatsapp" class="iconWhatsapp"/>
                    </a>
                </li>
              </ul>
            </div>

            <div className="footer-info">
              <h3 className='infoTitle'>Información de contacto:</h3>
              <ul className="info-list">
                <li>
                    <p>Dirección:Calle XXXXXXXXXXXX XXXXXX</p>
                </li>
                <li>
                    <p>Teléfono: +53 59014403</p>
                </li>
                <li>
                    <p>Correo electrónico: biblisuci@mined.cu</p>
                </li>
              </ul>
            </div>
            
          
        </div>
      </footer>
    )
}

export default Footer
