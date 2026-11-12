# svg-to-pdf-react 🔨

A simple CLI tool for converting svg files to [react-pdf](https://github.com/diegomura/react-pdf) components.

Tested with react-pdf 4.9.0 and node v22.12.0

This is a fairly simple tool that I made in a couple of weeks for [another project](https://github.com/MoraMartin99/CVdeBolsillo) so:

- It may have bugs
- Its not documented
- It doesn't have a test suite (though I tested a lot for this [project](https://github.com/MoraMartin99/CVdeBolsillo))

## Installation 🧪

- Clone the repo

```bash
 git clone https://github.com/MoraMartin99/svg-to-react-pdf.git
```

- Install the dependencies

```bash
 pnpm install
```

## Usage 🎮

To run the tool use

```bash
node index.js <source> <destination>
```

- **source** and **destination** can be a path to a file or folder
- if **source** is a path to a file, **destination** has to be a path to a jsx file like:

```bash
node index.js /myLogo.svg /Logo.jsx
```

- if **source** is a path to a folder, **destination** has to be path to a folder like:

```bash
node index.js /logos/ /components/
```

- if **source** is a path to a folder the tool will apply the transformation only to the svg files
- if you need help in the terminal run:

```bash
node index.js --help
```

## Acknowledgements 🙏

- Thanks to the [react-pdf](https://github.com/diegomura/react-pdf) project and community

## Tech Stack 🤓

- [commander](https://github.com/tj/commander.js)
- [svgo](https://github.com/svg/svgo)
- [lodash-es](https://github.com/lodash/lodash)
