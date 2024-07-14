import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "./componente/topBar";

export default function Mesa() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const {id} = state;

    const handleOrden = () =>{
        navigate(`/Pedidos/Mesa/${id}/Orden`, {state:{id_mesa: id}})
    }
    const handleFactura = () => {
        navigate (`/Pedidos/Mesa/${id}/factura/`,{state:{id_pedido: id}})
    }
    return(
        <div className="flex flex-col h-full" >
            <TopBar tittle = "Accion de la mesa"/>
            <div className="flex flex-row h-full gap-4">
                <div className="w-2/4 h-full border-4 border-yellow-600 p-5 flex items-center justify-center">
                    <button className="border-2 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white text-[40px] font-semibold px-7" onClick={()=>handleOrden()}>
                        Hacer Pedido
                    </button>
                </div>
                <div className="w-2/4 h-full border-4 border-orange-600 p-5 flex items-center justify-center">
                    <button className="border-2 border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white text-[40px] font-semibold px-7" onClick={()=>handleFactura()}>
                        Factura
                    </button>
                </div>
            </div>
        </div>
    )
}