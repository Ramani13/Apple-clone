function Hero()
{
    return(
        <section className="bg-blue-100 text-center py-16 mb-6">
            <h1 className="text-3xl font-bold">MacBookAir</h1>
            <p className="text-lg">Sky blue color.</p>
            <p className="text-lg">Sky high preformance with M4</p>
            <div className="flex justify-center mt-4 mb-4 gap-4">
            <button className="bg-blue-300 px-4 py-2 rounded-2xl">LearnMore</button>
            <button className="bg-white px-4 py-2 rounded-2xl border border-blue-400 hover:bg-blue-300">Shop</button>
            </div>
            <img className="mx-auto shadow-lg w-72 mb-5" src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-og-202503?wid=1200&hei=630&fmt=jpeg&qlt=90&.v=1739216814915" alt=""/>
            <p className="text-red-700">Built for Apple Intelligence</p>
        </section>
    )
}
export default Hero