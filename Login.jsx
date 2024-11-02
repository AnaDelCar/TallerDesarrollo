import React, { useState } from 'react';

const Login = () => {

    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{ justifyContent:'center',width:'100%'}}>
            <h2>Iniciar Sesión</h2><br/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Correo:</label><br/>
                    <input type="email" className="form-control"                    
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}/>
                </div><br/>

                <div>
                    <label>Contraseña:</label>
                    <input type="text" className="form-control"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}/>
                </div><br/>

                <button type="submit" className= "btn btn-success">Enviar</button>
            </form>
        </div>
    );
};

export default Login;