export default function Customers() {
    return (
      <section className="px-6 md:px-16 py-12 bg-white">
        <h2 className="text-xl md:text-3xl font-bold mb-6 ">All reviews</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible">
          
          <div className="p-4 bg-white shadow-lg rounded-2xl min-w-[250px] md:min-w-0">
            <h3 className="font-bold">Sarah M. <span className="text-green-500">✔</span></h3>
            <div className="flex space-x-1 text-yellow-400">
              <span>★★★★★</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm">
              “I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
            </p>
          </div>
  
          <div className="p-4 bg-white shadow-lg rounded-2xl min-w-[250px] md:min-w-0">
            <h3 className="font-bold">Alex K. <span className="text-green-500">✔</span></h3>
            <div className="flex space-x-1 text-yellow-400">
              <span>★★★★★</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm">
              “Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is remarkable, catering to a variety of tastes and occasions.”
            </p>
          </div>
  
          <div className="p-4 bg-white shadow-lg rounded-2xl min-w-[250px] md:min-w-0">
            <h3 className="font-bold">James L. <span className="text-green-500">✔</span></h3>
            <div className="flex space-x-1 text-yellow-400">
              <span>★★★★★</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm">
              “As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.”
            </p>
          </div>
  
        </div>
      </section>
    );
  }
  