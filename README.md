# Embedded Wizard tutorial
Tutorial and sample application for the Embedded Wizard GUI builder

## Synopsis

[Embedded Wizard](https://www.embedded-wizard.de/) is a graphical user interface tool developed and distributed by [TARA Systems GmbH](https://www.tara-systems.de/) for creating graphical user interface (GUI) applications mainly for embedded systems.

This project aims at providing a tutorial for novice users to get them started quickly.

While building a sample application step by step, the tutorial covers the following topics:

* Basic steps when building a GUI application
* Developing and protoyping reusable graphical components
* Device integration
* Localization of your application
* Persistent data storage on the target device

## Instructions for users of the tutorial

The tutorial is hosted on [GitHub pages](https://deining.github.io/EmWiTutorial/), enjoy the tutorial!

## Instructions for technical writers who want to build and extend the tutorial site

The site is published using [Antora](https://antora.org/), a static site generator leveraging the [AsciiDoctor](https://asciidoctor.org/) text processing and publishing toolchain.

### Install Antora

Antora installation can be done using npm, the Node.js package manager.
If you don't have npm installed, download and install [Node.Js®](https://nodejs.org/), which will install npm on your system.

To install the Antora CLI and site generator packages globally, open a command line and type:

````
C:\> npm i -g @antora/cli@2.0 @antora/site-generator-default@2.0
````

### Create the GUI bundle