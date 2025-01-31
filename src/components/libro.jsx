import React from 'react'


function Libro() {
    return (
     <div className='Inve'>
        <h1 className='go'>Inventario</h1>

        <div className="lola">
        <div className="parametro">
            <label htmlFor="">Titulo</label>
            <input type="text" />
        </div>

        <div className="parametro">
            <label htmlFor="">Autor</label>
            <input type="text" />
        </div>

        <div className="parametro">
            <label htmlFor="">Genero</label>
            <input type="text" />
        </div>

        <div className="parametro">
            <label htmlFor="">ISBN</label>
            <input type="text" />
        </div>
        <div className="botones">
            <button>Buscar</button>
            <button>Registrar</button>
        </div>
        </div>
        <div className="lolo">
            <div className="mi">
            <p>Nombre</p>
            <p>IBSN</p>
            <p>Stock</p>
            </div>
            <div className="ma"></div>
        </div>
     </div>

    );

}

export default Libro