import Image from 'next/image'

export default function BookCard({ title, author, imageUrl }) {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl || "/placeholder.svg?height=400&width=600"}
                    alt={title || "Card image"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{title || "Exploring the Future"}</h2>
                <p className="text-gray-600 text-sm">
                    By <span className="font-semibold">{author || "Jane Doe"}</span>
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition-colors duration-300">
                    #modern
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition-colors duration-300">
                    #design
                </span>
            </div>
        </div>
    )
}