function App() {
  return (
    <div className = "flex flex-col w-full h-full items-end bg-zinc-500">
      <div>
        <img src="" alt="" />
      </div>
      <form className = "flex flex-col w-max gap-3 p-7 items-center h-auto bg-white ">
        <label className = "flex flex-col">
          Usuario
          <input type="text" placeholder="Usuario" className = "border-2 border-black rounded-lg"/>
        </label>

        <label className = "flex flex-col ">
          Contrasena
          <input type="password" className = "border-2 border-black rounded-lg"/>
        </label>

        <input type="submit" className="w-max p-1 bg-black text-white font-bold text-xl rounded-xl hover:cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-black" />
      </form>
    </div>
  )
}

export default App
