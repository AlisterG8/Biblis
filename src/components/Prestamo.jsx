import React from 'react'


function Prestamo() {
    return (
     <div className='Inve'>
        <h1 className='go'>Prestamos</h1>
        <div className="lola">


        <div className="parametro">
            <label htmlFor="">Nombre</label>
            <input type="text" />
        </div>

        <div className="parametro">
            <label htmlFor=""># de solapin</label>
            <input type="text" />
        </div>

        <div className="parametro">
            <label htmlFor="">Es profesor</label>
            <input type="checkbox" />
        </div>

        <div className="parametro">
            <label htmlFor="">Facultad</label>
            <input type="text" />
        </div>
        <div className="parametro">
            <label htmlFor="">ISBN del prestamo</label>
            <input type="text" />
        </div>
        <div className="botones">
            <button>Prestar</button>
            <button>Devolver</button>
        </div>
        </div>
     </div>

    );

}

export default Prestamo