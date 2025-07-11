function Phone()
{
    return(
       <section className="bg-slate-50 text-center py-16">
        <h1 className="text-4xl font-bold">iPhone</h1>
        <p className="text-lg">Meet the iPhone 16 family</p>
        <div className="flex justify-center mt-4 mb-4 gap-4">
        <button className="bg-blue-300 px-4 py-2 rounded-2xl" >LearMore</button>
        <button className="bg-white px-4 py-2 rounded-2xl border border-blue-400 hover:bg-blue-300">Shop iPhone</button>
        </div>
        <p className="text-red-700 mb-4">Built for Apple Intelligence</p>
        <img className="mx-auto shadow-lg w-full"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZi33I9OphBDOs5ivTufTekqT1_hh2FGFmQ&s" alt=""/>
       </section>
    )
}
export default Phone