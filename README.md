# Dutch Translations for Admin-on-rest

Dutch translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

![admin-on-rest demo](http://static.marmelab.com/admin-on-rest.gif)

## Installation

```sh
npm install --save aor-language-dutch
```

## Usage

```js
import dutchMessages from 'aor-language-dutch';

const messages = {
    'nl': dutchMessages,
};

<Admin locale="nl" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE), and sponsored by [Pim Schaaf](https://open-roads.nl).
