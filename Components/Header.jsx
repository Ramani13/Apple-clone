function Header()
{
  return(
    
    
      <header
        className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center space-y-6"
        style={{
          backgroundImage: "url('https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24010749/AirPods_Comparison_Press_Image.jpg?quality=90&strip=all&crop=0,0,100,100')",
        }}
      >
        <h1 className="text-3xl font-bold bg-blue-500  w-72 p-5 rounded-3xl text-center">Buy Mac or iPad for college</h1>
        <h1 className="text-3xl font-bold bg-blue-500 w-72 p-5 rounded-3xl text-center ">Choose AirPods or an eligible accessory</h1>
        <button className=" border-solid bg-white text-black rounded-2xl p-2 hover:bg-blue-500 ">Shop</button>
    </header>
    
  )
}

export default Header