# setup instructions

- `mkdir` and `cd` into it
- `git init -b main`
- `gh repo create WD_Flask_Test2 --private`
(or public)
- `git remote add origin <url> `
- `git add . && git commit -m "initial commit" && git push --set-upstream origin main`
- make .gitignore
```
node_modules
.cache
.parcel-cache
```

- `npm init`


# Intro to react
- It’s declarative: Code written in React is easy to read and, therefore, easy to maintain.
- It’s component-based: To build with React, you create reusable components. This allows you to increase the scope of your web app with little to no performance issues (it’s super fast!) or concerns about entropy.
- It works well with data: The data you display to your users can change over time without having to reload the page.
- It’s compatible with other tools: For example, React Native, a framework for building native apps using React, and Redux, a library for managing app states. You’ll learn more about these tools later on in this course.
- It has a wide user base and plenty of online resources.
- It's built, used, and supported by Facebook: React’s documentation is well maintained, and you won’t have to wait several weeks for bug fixes!
- It’s relatively small.


# Configuring Parcel for Your myFlix App

1. Install parcel globally
```
npm install -g parcel
```
2. Now, make sure that you’re still inside the “myFlix-client” project folder in your terminal, then run the following commands to install packages and dependencies you need for React app development:

```
npm install --save react react-dom
```

# File structure

`root/src/index.jsx`
```jsx
import { createRoot } from 'react-dom/client';

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <div>Good morning</div>
    </div>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
```

`root/src/index.scss`
```css
$color: steelblue;

.my-flix {
  color: $color;
}
```

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>myFlix</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="index.jsx"></script>
  </body>
</html>
```