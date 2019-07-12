# Jamie Bertram Resume

Hi, my name is Jamie Bertram and I am a software developer living in
Ottawa Ontario. This small repository contains the source code used
to generate my resume. For privacy reasons, my actual resume is not
hosted here. For a copy of my real resume, please contact me directly.
Please feel free to fork this repo and use it to create your own spiffy resume!

## Generating a Resume

You can edit `resume-data.json` in the root directory of the repo to
add your own details. A sample has been given for demonstration
purposes.

To build the page, run:

```sh
$ yarn
$ ./build.sh
```

Then, open `intex.html` in a web browser. You can download the generated
PDF from the opened page.

## Acknowledgements

- This project uses [react-html](https://react-pdf.org/) to generate PDF
  documents from React components.
- The design for this resume was heavily inspired by a free resume template
  by Ayoob Ullah, available [here](https://www.behance.net/gallery/15815893/FREE-Resume-Template).
