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
        { title: "Eloquent JavaScript", id: 1 },
        { title: "Mastering JavaScript Functional Programming", id: 2 },
        { title: "JavaScript: The Good Parts", id: 3 },
        { title: "JavaScript: The Definitive Guide", id: 4 },
        { title: "The Road to React", id: 5 },
        { title: "The Road to React", id: 6 }
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