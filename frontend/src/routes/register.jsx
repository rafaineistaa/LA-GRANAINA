import { useState, useEffect } from 'react'
import Header from '../COMPONENTES/header';
import { useLogin } from '../hooks/useLogin'
// import 'tailwindcss/tailwind.css';
// import Footer from '../COMPONENTES/footer.jsx';
import { Link } from 'react-router-dom';


function Register() {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, error, isLoading } = useLogin("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password);
    }
    return (
        <div className="App">
            <Header /> {/* Esta funcion que meti es para controlar el modal como una prop */}
            <div className="flex justify-center items-center p-6">
                <div className="w-96 rounded-lg shadow-lg p-4">
                    <h2 className="text-3xl font-bold mb-4">Crear una cuenta</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label htmlFor="username">Nombre de usuario</label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="Nombre de usuario"
                            name="username"
                            defaultValue={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="name">Nombre</label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="email"
                            placeholder="Correo electónico"
                            name="email"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Contraseña</label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            defaultValue={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <Link to="/forgotpassword" className="text-blue-500 text-sm">¿Olvidaste tu contraseña?</Link> */}
                        <Link to="/login" className="text-blue-500 text-sm">Iniciar sesión</Link>
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-500/40"
                            disabled={isLoading}
                        >
                            Crear una cuenta
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Register