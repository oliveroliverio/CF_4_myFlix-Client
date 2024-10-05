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
    // booksArray with book titles and ids
    let booksArray = [
        { title: "The Great Gatsby", id: 9 },
        { title: "The Catcher in the Rye", id: 10 },
        { title: "The Hobbit", id: 11 },
        { title: "Fahrenheit 451", id: 12 },
        { title: "Brave New World", id: 13 },
        { title: "Moby-Dick", id: 14 },
        { title: "War and Peace", id: 15 },
        { title: "Pride and Prejudice", id: 16 },
        { title: "The Lord of the Rings", id: 17 },
        { title: "Jane Eyre", id: 18 },
        { title: "The Chronicles of Narnia", id: 19 },
        { title: "Animal Farm", id: 20 },
        { title: "The Alchemist", id: 21 }
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
                    return <div>{book.title}</div>
                })}
            </div>
        </>
    )
}