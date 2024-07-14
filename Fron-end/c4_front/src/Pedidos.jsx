
import MesaCard from './componente/mesaCard.jsx'
import TopBar from './componente/topBar.jsx'
import "./Pedido.css"

export default function Pedidos(){
    return(
        <div className='BgPedido h-full'>
            <TopBar tittle = "Elige la Mesa"/>
            <div className="flex flex-col ">
                <h1 className=' py-8 text-[30px] font-semibold w-full bg-yellow-950 text-white text-center'>
                    Elige la Mesa para comenzar con el pedido
                </h1>
                <div className = "mt-11 flex flex-col gap-5 w-full h-full items-center justify-center">
                    <div className='flex flex-row gap-3'>
                        <MesaCard tittle="Mesa" id={1}/>
                        <MesaCard tittle="Mesa" id={2}/>
                        <MesaCard tittle="Mesa" id={3}/>
                        <MesaCard tittle="Mesa" id={4}/>
                    </div>
                
                    <div className='flex flex-row gap-3'>
                        <MesaCard tittle="Mesa" id={5}/>
                        <MesaCard tittle="Mesa" id={6}/>
                        <MesaCard tittle="Mesa" id={7}/>
                        <MesaCard tittle="Mesa" id={8}/>
                    </div>

                </div>
            </div>
        </div>
    )
}