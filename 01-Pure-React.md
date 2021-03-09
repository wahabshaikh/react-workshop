---
title: Pure React
---

# Pure React

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Workshop</title>
  </head>
  <body>
    <div id="root">Hello, I'm HTML!</div>
  </body>
</html>
```

```html
<script src="https://unpkg.com/react@17.0.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"></script>
```

```html
<script>
  const App = () => {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "Hello, I'm React!")
    );
  };

  ReactDOM.render(React.createElement(App), document.getElementById("root"));
</script>
```
