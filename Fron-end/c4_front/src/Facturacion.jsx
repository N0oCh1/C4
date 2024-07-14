/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import TopBar from "./componente/topBar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
export default function Facturacion() {
    var subtotal = 0;
    var alcohol = 0;
    var impuesto = 0;
    var total = 0;
    const navigate = useNavigate();
    const locatio = useLocation();
    const [data, setData] = useState({
        id:0,
        mesa:0,
        producto:[]
    });

    const getPedido = useCallback(async() => {
        await axios.get(`http://localhost:8080/pedido`)
        .then((res)=>{res.data.map(data=>{
            if(data.mesa == locatio.state.id_pedido){
                setData(data)
            }
        })}).catch((error)=>{console.log(error)})
    })
    const handlePaid = () =>{
        deletePedido("/pedidos")
    }
    const deletePedido = useCallback(async() => {
        await axios.delete(`http://localhost:8080/pedido/eliminar/${data.id}`).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
    })

    useEffect(()=>{
        getPedido()
    },[Facturacion])
    
    return(
        <div>
            <TopBar tittle = "Facturacion"/>
            <div className="p-10 flex flex-col justify-center items-center">
                <div className="flex flex-col w-[600px] h-full items-center justify-center gap-5">
                    <h1 className="border-b-2 border-zinc-500 w-full border-dashed font-regular text-[45px] text-center">PTY Italian</h1>
                    <h2 className="border-b-2 border-zinc-500 w-full border-dashed text-center font-bold text-[16px]">Pedido: {data.id} / Mesa: {data.mesa}</h2>
                    <span className="border-b-2 border-zinc-500 w-full border-dashed text-center font-semibold text-[24px]">RECIBO</span>
                    <div className="w-full flex-col gap-3 border-b-2 border-zinc-500 border-dashed py-3">
                        {data.producto.map((data, index) =>{
                            if(data.categoria == "Alcohol"){
                                alcohol+=data.precio_item;
                            }
                            impuesto = alcohol*0.07;
                            subtotal += data.precio_item
                            return(
                                <div className="flex flex-col w-full h-max" key={index}>
                                    <div className="flex items-start">
                                        {data.nombre_item}
                                    </div>
                                    <div className="flex flex-row items-start justify-between">
                                        <span>{data.precio_item}</span>
                                        <span>1</span>
                                        <span>{data.precio_item}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex flex-col w-full border-b-2 border-zinc-500 border-dashed">
                        <span className="font-semibold text-[20px]">TOTAL</span>
                        <div className="flex flex-row items-start justify-between">
                            <span>SUBTOTAL</span>
                            <span>{Number.parseFloat(subtotal).toFixed(2)}</span>
                        </div>
                        <div className="flex flex-row items-start justify-between">
                            <span>IMPUESTO DE SERVICIO</span>
                            <span>{Number.parseFloat(impuesto).toFixed(2)}</span>
                        </div>
                        <div className="flex flex-row items-start justify-between">
                            <span>DESCUENTO</span>
                            <span>0</span>
                        </div>
                        <div className="flex flex-row items-start justify-between">
                            <span>TOTAL</span>
                            <span>{Number.parseFloat(total=impuesto+subtotal).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <button className="mt-10 border-2 border-yellow-700 rounded-lg px-9 hover:bg-yellow-700 hover:text-white" onClick={()=>{handlePaid()}}>
                        Pagar
                </button>
            </div>
            
        </div>
    )
}