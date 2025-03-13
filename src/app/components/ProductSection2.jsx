import Image from "next/image";

const dressStyles = [
  { name: "Casual", image: "/photo1.png" },
  { name: "Formal", image: "/photo2.png" },
  { name: "Party", image: "/photo3.png" },
  { name: "Gym", image: "/photo4.png" },
];

export default function DressStyleSection() {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dressStyles.map((style) => (
          <div
            key={style.name}
            className="relative rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={style.image}
              alt={style.name}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-5 left-2  flex items-center justify-center">
              <span className=" font-semibold text-lg">
                {style.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
