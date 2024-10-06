import React from 'react';
import { useState } from "react";
import BookCard from "./book-card";
export const MainView = () => {
    return (
        <>
            {/* <UseStateExample1 /> */}
            {/* tailwind test */}
            <div className="bg-gray-200 p-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-800">Hello, world!</h1>
                    <p className="text-gray-600 mt-2">
                        This is a Tailwind CSS test.
                    </p>
                </div>
            </div>
        </>
    )
}

export const MyComponent = () => {
    let name = "John";
    let num = 5;
    let obj = { x: 32, y: 64 };
    return (
        <div>
            <h1>-------------My Component----------------</h1>
            <p>Hello {name}!</p>
            <p>{5 + num}</p>
            <p>{Math.random()}</p>
            <p>{obj.x}</p>
        </div>
    );
}

export const UseStateExample1 = () => {
    // booksArray with book titles and ids.  This is the initial state
    let booksArray = [
        {
            id: 1,
            title: "Eloquent JavaScript",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
            author: "Marijn Haverbeke"
        },
        {
            id: 2,
            title: "Mastering JavaScript Functional Programming",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
            author: "Federico Kereki"
        },
        {
            id: 3,
            title: "JavaScript: The Good Parts",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
            author: "Douglas Crockford"
        },
        {
            id: 4,
            title: "JavaScript: The Definitive Guide",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
            author: "David Flanagan"
        },
        {
            id: 5,
            title: "The Road to React",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
            author: "Robin Wieruch"
        }
    ]

    const [books, setBooks] = useState(booksArray)

    return (
        <>

            <div>
                {books.map(book =>

                    <BookCard key={book.id}
                        id={book.id}
                        title={book.title}
                        imageUrl={book.image}
                        author={book.author}>
                    </BookCard>

                )}
            </div>
        </>
    )
}

// BookCard component is being used here.  How do I add props, id, title, image, and author?