/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MesaCard = (props) => {
    const {tittle, id} = props;
    const navigator = useNavigate();
    const [idPedido, setIdPedido] = useState();
    const getPedido = useCallback(async() =>{
        await axios.get("http://localhost:8080/pedido").then((res)=>res.data.map((data)=>{if(data.mesa == id){setIdPedido(data.id)}}))
    })
    useEffect(()=>{
        getPedido();
    })
    return(
        <button 
        className="flex flex-col w-[200px] h-[200px] border-2 rounded-md border-black bg-white"
        onClick={()=>{
            navigator(`/Pedidos/Mesa/${id}`, {state:{id: id}});
        }}
        >
            <div className=" flex flex-col text-center font-semibold text-2xl w-full bg-yellow-500 ">
                {tittle} {id}
            </div>
            <div className="flex flex-col w-full h-full items-center text-[30px]">
                <span className="font-semibold">Pedido</span>
                <span className="font-bold">{idPedido}</span>
            </div>
        </button>
    )
}
export default MesaCard