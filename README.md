# Slipsum-Meteor

[Slipsum](http://slipsum.com) ported to a Meteor package.

## Usage

To use, add the following code to your page

### `[{]{{slipsum [numberOfParagraphs] [pTag] [headerTag] [onlyHeader]}}[}]`

Note: Triple brackets (`{{{`) renders the generated text as HTML; double brackets (`{{`) renders it as escaped text.

#### `numberOfParagraphs`

The amount of paragraphs of text to be rendered

Default: `1`

#### `pTag`

The tag to be placed in front of the lines of text.

Any HTML attributes can be added.

Default: `""`

#### `headerTag`

The tag to be rendered in front of headers

Any HTML attributes can be added.

If a boolean of true, the text will render with headers containing `<h1>` in front of them.

If a boolean of false, no headers will be rendered.

Otherwise, whichever string input will be rendered in front of the headers, and an appropriate closing tag behind.

Default: `false`

#### `onlyHeader`

A boolean determining whether or not _only_ headers should render.

Default: `false`
