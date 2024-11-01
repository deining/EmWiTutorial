# Embedded Wizard tutorial
Tutorial and sample application for the Embedded Wizard GUI builder

## Synopsis

[Embedded Wizard](https://www.embedded-wizard.de/) is a graphical user interface tool developed and distributed by [TARA Systems GmbH](https://www.tara-systems.de/) for creating graphical user interface (GUI) applications mainly for embedded systems.

This project aims at providing a tutorial for novice users to get them started quickly.

While building a sample application step by step, the tutorial covers the following topics:

* [Basic steps when building a GUI application](https://deining.github.io/EmWiTutorial/EmWiTutorial/latest/HelloWorld.html)
* [Developing and prototyping reusable graphical components](https://deining.github.io/EmWiTutorial/EmWiTutorial/latest/ComponentReusability.html)
* [Device integration](https://deining.github.io/EmWiTutorial/EmWiTutorial/latest/DeviceIntegrationBrowser.html)
* [Localization of your application](https://deining.github.io/EmWiTutorial/EmWiTutorial/latest/LocalizingYourApplication.html)
* Persistent data storage on the target device

In order to preview a live demo of the sample application, navigate to the application [demo site](https://deining.github.io/EmWiTutorial/demo/).

## For readers of the tutorial

The tutorial is hosted on [GitHub pages](https://deining.github.io/EmWiTutorial/), enjoy the tutorial!

If you have any suggestion for improvement or comment concerning this tutorial, feel free to open an [issue](https://github.com/deining/EmWiTutorial/issues).

For general question unrelated to this tutorial, you may make use of the [question and answer site](https://ask.embedded-wizard.de) for Embedded Wizard users and UI developers.

## Structure of the repository

The graphic below illustrates the structure of the repository:

````
docs/                    -> html sources of web site, linked to github pages
  index.html                -> start page, redirection only
  EmWiTutorial/latest/      -> html pages, images and attachments
  _/                        -> GUI resources
src/                     -> Sources of Embedded Wizard tutorial application
  EmWiTutorial.ewp          -> Embedded Wizard project file
  xxx.ewu/                  -> Project unit xxx
  yyy.ewu                   -> Project unit yyy
  ...
www/                     -> tutorial website
  antora/                   -> antora publishing toolchain
    playbook.yml               -> settings file, tells antora how to operate
  asciidoc/                 -> sources, in asciidoc format
    antora.yml                -> component descriptor file
    modules/
      ROOT/                      -> root module
        nav.adoc                    -> navigation source file
        assets/                     -> images and attachments
        pages/                      -> page source files
  pdf/                      -> pdf publishing toolchain
    metadata.yml            -> metadata file, customization of pdf output
    template.latex          -> pandoc LaTeX template (author: Pascal Wagler)
    Tutorial.adoc           -> book file, includes all chapters of the tutorial
  resources/images/         -> images used (photoshop format)
  ui/                       -> website page templates, footer, header, ...
    build/                     -> generated ui bundle 'ui-bundle.zip'
````
## For technical writers

### HTML sources

The html sources of the tutorial website can be found inside the directory ``docs``. This directory is linked to the github pages website. Any changes inside the directory ``docs`` will be picked up immediately on the tutorial website.

### Instructions how to extend and rebuild the tutorial site

The site is published using [Antora](https://antora.org/), a static site generator leveraging the [AsciiDoctor](https://asciidoctor.org/) text processing and publishing toolchain. Instructions on how to publish and possibly extend the site are given below:

First of all, install all needed prerequisites:

#### Git version control system

Make sure you have ``git`` installed on your system.

````
C:\> git --version
````

If you don't have ``git`` installed yet, download and run the [Git installer](https://git-scm.com/downloads).

#### npm package manager

For various installation tasks, we need ``npm``, the Node.js package manager.
If you don't have ``npm`` installed yet, download and run the [Node.Js®](https://nodejs.org/) installer. This installer will install both ``Node.Js`` and the package manager ``npm`` on your system.

With ``git`` and ``node`` installed, you’re ready to set up the project.

### Cloning the project locally

First, clone the project into a local directory of your choice and enter this directory:

````
C:\Users\Me\Projects> git clone https://github.com/deining/EmWiTutorial.git
C:\Users\Me\Projects> cd EmWiTutorial
C:\Users\Me\Projects\EmWiTutorial> REM ready for the next steps
````

### Building and bundling the user interface

The project uses a customized version of the [Antora Default UI](https://gitlab.com/antora/antora-ui-default) as GUI template for the tutorial website. In order to successfully publish the tutorial site, we have to build and bundle this user interface first. Enter the directory ``www\ui`` of the cloned repository and install the dependencies using ``npm`` first. Afterwards, issue two ``gulp`` commands to generate the bundled user interface:

````
C:\Users\Me\Projects\EmWiTutorial> cd www\ui
C:\Users\Me\Projects\EmWiTutorial\www\ui> npm install
C:\Users\Me\Projects\EmWiTutorial\www\ui> npx gulp preview:build
C:\Users\Me\Projects\EmWiTutorial\www\ui> npx gulp bundle
````
If all went fine, you should now see the UI bundle ``ui-bundle.zip`` available inside the subdirectory ``build``.

````
C:\Users\Me\Projects\EmWiTutorial\www\ui> dir /B build
ui-bundle.zip
````
### Extending or altering  the tutorial site

* The directory ``www\asciidoc\modules\ROOT\pages`` contains the pages sources in asciidoc format. Extend and or alter these pages according to your needs.
* The directory ``www\asciidoc\modules\ROOT\assets`` contains the images of the pages and the attachments the pages link to. Extend and or alter these resource files as needed.

### Rebuilding the tutorial site

Using the ``antora`` publisher, we can now build the tutorial site. Enter the directory ``www\antora`` of the cloned repository and install the dependencies using ``npm`` first. Afterwards, issue the following ``antora`` command to generate the tutorial site:

````
C:\Users\Me\Projects\EmWiTutorial\www\ui> cd ..\antora
C:\Users\Me\Projects\EmWiTutorial\www\ui> npm install
C:\Users\Me\Projects\EmWiTutorial\www\antora> npx antora --fetch playbook.yml
````

If all went fine, you should now see your changes reflected in the web site stored inside the the subdirectory ``docs`` of the cloned repository.

### PDF version

Besides the html sources, you may want to generate a pdf version of the tutorial website. While there are several ways to produce a pdf document from asciidoc sources, we found out that leveraging the [LaTeX](https://www.latex-project.org/) toolchain gave the best results. All needed files for pdf generation are found inside the directory ``www\pdf``. Be aware that generating high quality pdf documents is not an easy task, so don't expect a perfect result here.

### Instructions how to generate a pdf version of the tutorial site

PDF generation is done using a two step approach: first we produce [docbook](https://en.wikipedia.org/wiki/DocBook) output from the asciidoc sources using the ``asciidoctor`` text processor. Afterwards, we use the [pandoc](https://pandoc.org/) document converter to convert the docbook source to a pdf document using [xelatex](https://en.wikipedia.org/wiki/XeTeX) as pdf engine. Instructions on how to a generate a pdf version of the tutorial site are given below:

First of all, install the needed prerequisites:

#### Ruby programming language

Make sure you have ``ruby`` installed on your system.

````
C:\> ruby --version
````

If you don't have ``ruby`` installed yet, download and run the [Ruby installer](https://rubyinstaller.org/downloads/).

#### AsciiDoctor text processor & publishing toolchain

Next, you have to install ``asciidoctor`` using the following command:

````
C:\> gem install asciidoctor
````

#### Pandoc

Download and run the [Pandoc installer](https://pandoc.org/installing.html) if you don't have ``pandoc`` installed on your system yet.

#### Tex / XeTex

Make sure you have ``xetex`` installed on your system.

````
C:\> xetex --version
````

If you don't have ``xetex`` installed yet, install a working LaTeX installation on your system. For that purpose, you may make use of the [MiKTeX](http://miktex.org/) or [proTeXt](http://www.tug.org/protext/) or [TeX Live](http://www.tug.org/texlive) distributions.

Now that you have ``asciidoctor``, ``pandoc`` and ``xetex`` installed, you’re ready to generate the pdf of the tutorial site.

### Building a pdf document of the tutorial site

#### Generating docbook output from tutorial site

Enter the directory ``www\pdf`` of the cloned repository and invoke ``asciidoctor`` text processor to produce docbook output from the asciidoc sources:

````
C:\Users\Me\Projects\EmWiTutorial> cd www\pdf
C:\Users\Me\Projects\EmWiTutorial\www\pdf> asciidoctor --doctype book --backend docbook5 Tutorial.adoc
````
This will produce a file ``Tutorial.xml`` inside the same directory, containing docbook output.

#### Converting docbook output to pdf using ``pandoc`` document converter

Finally, invoke ``pandoc`` converter to generate a pdf file from the docbook output you just generated:

````
C:\Users\Me\Projects\EmWiTutorial\www\pdf> pandoc Tutorial.xml --output Tutorial.pdf --from docbook --template template --metadata-file metadata.yml --pdf-engine xelatex --toc
````

This eventually will produce the pdf file ``Tutorial.pdf`` inside the same directory.

For pdf styling, we use the [pandoc LaTeX template](https://github.com/Wandmalfarbe/pandoc-latex-template) authored by [Pascal Wagler](https://github.com/Wandmalfarbe). Further [customization](https://github.com/Wandmalfarbe/pandoc-latex-template#custom-template-variables) of the generated pdf can be achieved by extending the metadata file ``metadata.yml``.
