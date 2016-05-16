

- folder structure
    The app is composed out of components, modules and assets.
    Assets are static resources like images or fonts.
    Components are strictly UI parts mainly constructed from JS, HTML and CSS parts. JS part of the component should be responsible only for the component UI logic.
    Modules is JS code implmenting all other logic of the app.
    Each module must have interface definition and unit tests.
    The interface file should contain interfaces of module exports.
    If the code grows complex namespaces can be used to help improve the code (and file) structure of the project.
    

- tooling = dev-dependencies
    - SASS, CSS - compile, concat, minify -
    - JS - compile, concat, minify - uglify
        - es6 - babel or typescript
        + code quality - tslint, eslint
        + source maps
    - module bundler - webpack
    - web components - vulcanize
    + typescript
    + documentation - typedoc
    - unit tests - test framework mocha, chai
    - code coverage - blanket
    - task runner - gulp, grunt
    - test runner - karma
    - headless browser - phantomjs
    - dependency manager
    - packager - bower, npm, webpack
    - live reload - webpack dev server, browser sync
    

- frameworks, libs, widgets, components = project dependencies
    - reactjs
    - angular 2
    - polymer
    - redux
    - material design
    - bootstrap
    - jquery UI
    - jquery
    - lodash
    - Q promises
    - any web component
    
TODO:
    - define tslint rules [http://palantir.github.io/tslint/rules/]
    - 