var Generator = require('yeoman-generator'),
    mkdirp    = require('mkdirp');

module.exports = Generator.Base.extend({

  // Constructor.
  constructor: function (args, options) {
    // Call super generator constructor.
    Generator.Base.apply(this, arguments);

    // Assign options.
    this.options = options;
  },

  // Gets data input from user.
  prompting: function () {
    // Async call finish register function.
    var done = this.async();

    // Make prompts and set answers as configuration
    // to be available for later use.
    // Finally register finished async call.
    this.prompt(this._getPrompts(), function (answers) {
      this.config.set('answers', answers);
      done();
    }.bind(this));
  },

  // Writes metadata files.
  configuring: function () {
    // Answers from prompts.
    var answers = this.config.get('answers');

    // Create package file.
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      answers
    );

    // Create babel file.
    this.fs.copy(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc')
    );

    // Create ESLint file.
    this.fs.copy(
      this.templatePath('_eslintrc'),
      this.destinationPath('.eslintrc')
    );

    // Create Git ignore file.
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    // Create Travis CI file.
    this.fs.copy(
      this.templatePath('_travis.yml'),
      this.destinationPath('.travis.yml')
    );

    // Create ReadMe file.
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      answers
    );

    // Create contributing file.
    this.fs.copy(
      this.templatePath('_CONTRIBUTING.md'),
      this.destinationPath('CONTRIBUTING.md')
    );

    // Create license file.
    this.fs.copy(
      this.templatePath('_LICENSE'),
      this.destinationPath('LICENSE')
    );

  },

  // Creates generator related directories and files.
  writing: function () {
    // Create distribution directory for compiled files.
    mkdirp('dist');

    // Create test directory for unit test specs.
    mkdirp('test');

    // Create source directories.
    mkdirp('src');
    mkdirp('src/svg');
    mkdirp('src/js');
    mkdirp('src/styl');
    mkdirp('src/html');

    // Create gulpfile.
    this.fs.copy(
      this.templatePath('_gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js')
    );

    // Create unit test file.
    this.fs.copy(
      this.templatePath('_test/_example.js'),
      this.destinationPath('test/example.js')
    );

    // Create source image files.
    this.fs.copy(
      this.templatePath('_src/_svg/_ic_build_black_24px.svg'),
      this.destinationPath('src/svg/ic_build_black_24px.svg')
    );

    this.fs.copy(
      this.templatePath('_src/_svg/_ic_done_black_24px.svg'),
      this.destinationPath('src/svg/ic_done_black_24px.svg')
    );

    // Create source scripts.
    this.fs.copy(
      this.templatePath('_src/_js/_main.js'),
      this.destinationPath('src/js/main.js')
    );

    this.fs.copy(
      this.templatePath('_src/_js/_otherFile.js'),
      this.destinationPath('src/js/otherFile.js')
    );

    // Create style files.
    this.fs.copy(
      this.templatePath('_src/_styl/_main.styl'),
      this.destinationPath('src/styl/main.styl')
    );

    this.fs.copy(
      this.templatePath('_src/_styl/_otherFile.styl'),
      this.destinationPath('src/styl/otherFile.styl')
    );

    // Create HTML file.
    this.fs.copy(
      this.templatePath('_src/_html/_index.html'),
      this.destinationPath('src/html/index.html')
    );

  },

  // Installs the necessary dependencies to the newly created package.
  install: function () {
    // Return immediately if installation should be skipped.
    // Skipping possible by passing in option {skipInstallation: true}.
    if (this.options.skipInstallation) {
      return;
    }

    // Get development dependencies module list and install all modules.
    this.npmInstall(this._getDependencies(), { saveDev: true });
  },

  // Gives some advices.
  end: function () {
    // Sentences array.
    var texts = [
      'Run "npm start" to start developing.',
      'Run "npm test" to lint code and run the unit tests.',
      'Run "npm run build" build the files.',
      'Happy coding!'
    ];

    // Iterate over each sentence in array and log to console.
    for (var i = 0; i < texts.length; i++) {
      this.log(texts[i]);
    }
  },

  // Returns the prompts.
  // @private
  _getPrompts: function () {
    return [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        default: this.appname,
        store: true,
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'What is the description of your project?',
        default: 'My Web App',
        store: true,
      },
      {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub username?',
        store: true,
        validate: function (input) {
          return !!input.length;
        },
      },
    ];
  },

  // Returns the development dependencies.
  // @private
  _getDependencies: function () {
    return [
      'vinyl-source-stream', 'del', 'gulp', 'browserify', 'watchify',
      'vinyl-buffer', 'babelify', 'browser-sync', 'gulp-uglify',
      'gulp-sourcemaps', 'gulp-autoprefixer', 'gulp-concat', 'gulp-if',
      'gulp-watch', 'gulp-svg-sprite', 'gulp-cssnano', 'gulp-sequence',
      'gulp-util', 'gulp-plumber', 'gulp-stylus', 'eslint', 'mocha',
      'babel-core', 'babel-eslint', 'babel-polyfill', 'babel-preset-es2015',
      'babel-preset-stage-0', 'eslint-config-airbnb', 'eslint-plugin-react',
      'gulp-shell', 'yargs', 'http-server', 'gulp-htmlmin'
    ];
  }
});
