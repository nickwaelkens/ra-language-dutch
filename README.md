# German Translations for Admin-on-rest

German translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

![admin-on-rest demo](http://static.marmelab.com/admin-on-rest.gif)

## Installation

```sh
npm install --save aor-language-german
```

## Usage

```js
import germanMessages from 'aor-language-german';

const messages = {
    'de': germanMessages,
};

<Admin locale="de" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE), and sponsored by [Ondrej Brinkel](https://anzui.de).
