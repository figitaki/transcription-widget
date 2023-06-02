# Transcription Widget

> Simple web component to display transcriptions on any webpage.

## Usage

To use the transcription widget, follow these steps:

1. Include the script on your webpage. Preferably in the `<head>` using `defer`.

```html
<script src="https://cdn.jsdelivr.net/gh/figitaki/transcription-widget@0.0.1/main.js" defer></script>
```

2. Include the custom element in the body of your HTML or JSX document.

```html
<transcription-widget></transcription-widget>
```

3. Initialize the `options` property.

```html
<script>
  var transcriptionWidget = document.querySelector("transcription-widget");
  transcriptionWidget.options = {
    summary: "Short summary of your document.",
    timestamps: [
      { time: "0:00", text: "First line of the transcription" },
      { time: "0:10", text: "Second line of the transcription" },
    ],
  };
</script>
```

4. *Optionally* add an event listener to handle `copy` events.

```js
document.addEventListner('copy', (evt) => console.log(evt.details));
```

## Configuration

The primary method of configuration is the `options` property. This object must
use the following format:

```js
var options = {
  summary: "string",
  timestamps: [{ time: "string", text: "string" }],
};
```

Additionally, you can pass three boolean attributes to the custom element.

1. `dark`
2. `summary`
3. `translation`

## Improvements

This is an incredibly rudamentary implementation, and a variety of changes and
enhancements can be made.

- [ ] Simplify designs to use consistent colors and sizing, move to CSS variables and `em`
- [ ] Babel transpilation for broader browser coverage
- [ ] Tests
- [ ] Validation of the `option` parameter
- [ ] React/Vue/Angular wrappers

## License

This code is licnesed under the MIT license. See `LICENSE.md` for more details.
