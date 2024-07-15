import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom';
function Login () {

    const navigate = useNavigate();
    const[form, setForm] = useState({
      user:'',
      password:''
    });

    const urlAPI = "http://localhost:8080/registro"
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSubmit = (e) =>{
      e.preventDefault();
      setForm({user: e.target.user.value, password:e.target.password.value})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const postAxios = useCallback(async() =>{
      await axios.post(urlAPI,{
        user: form.user,
        password: form.password
      }).then(function(response){
        console.log(response)
        if(response.status == 200) {
          navigate('/Pedidos')
        }
      }).catch(function (error){
        console.log(error)
      })
    })
    useEffect(()=>{
      postAxios();
    },[ postAxios])
  
    return (
      <div className = "pizzaBG flex flex-col w-full h-full items-end bg-zinc-500">
        <div className=" bg-yellow-500 flex flex-col h-full w-[500px] items-center justify-center z-10 p-4">
          <div className="pt-5">
            <h1 className="text-4xl font-bold text-center ">Gestion de mesa de restaurante</h1>
          </div>
          {/* Formulario del login */}
          <form method='POST' className = "flex  flex-col w-full gap-10 p-7 items-center h-full justify-center" onSubmit={(e) => handleSubmit(e)}>
            
            <label className = "flex flex-col w-full font-semibold text-1xl">
              Usuario
              <input type="text" name="user" placeholder="Usuario" className = "border-2 border-black rounded-lg" required/>
            </label>
  
            <label className = "flex flex-col w-full font-semibold text-1xl">
              Contrasena
              <input type="password" name="password" className = "border-2 border-black rounded-lg" required/>
            </label>
  
            <input type="submit" className="w-max px-12 bg-black text-white font-bold text-xl rounded-xl hover:cursor-pointer hover:bg-white hover:text-black" />
          </form>
        </div>
       
      </div>
    )
  }

export default Login