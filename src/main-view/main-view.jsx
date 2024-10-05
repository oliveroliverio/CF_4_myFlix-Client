import { useState } from "react";
export const MainView = () => {
    return (
        <>
            <h1>---------------title---------------</h1>
            <div>Eloquent JavaScript</div>
            <div>Mastering JavaScript Functional Programming</div>
            <div>JavaScript: The Good Parts</div>
            <div>JavaScript: The Definitive Guide</div>
            <div>The Road to React</div>
            <div>The Road to React</div>
            <button>Test button</button>
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

    if (books.length === 0) {
        return <div>List empty...</div>
    }

    return (
        <>
            <h1>----------------Books--------------------</h1>
            <div>
                {books.map(book => {
                    return <div key={book.id}>{book.title}</div>
                })}
            </div>
        </>
    )
}