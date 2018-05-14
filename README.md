# Dutch Translations for React-admin

Dutch translations for [react-admin](https://github.com/marmelab/react-admin). A frontend Framework for building admin applications running in the browser on top of REST/GraphQL services, using ES6, [React](https://facebook.github.io/react/) and [Material Design](https://material.io/). Previously named [admin-on-rest](https://github.com/marmelab/admin-on-rest). Open sourced and maintained by [marmelab](https://marmelab.com/).

![react-admin demo](https://camo.githubusercontent.com/8f45adbef8ce38b97bbf6e5492da0685d4d273d4/68747470733a2f2f6d61726d656c61622e636f6d2f72656163742d61646d696e2f696d672f72656163742d61646d696e2d64656d6f2d7374696c6c2e706e67)

## Installation

```sh
npm install --save ra-language-dutch
```

## Usage

```js
import dutchMessages from 'ra-language-dutch';

const messages = {
    'nl': dutchMessages,
};

<Admin locale="nl" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE), and sponsored by [Pim Schaaf](https://open-roads.nl).
