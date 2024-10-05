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