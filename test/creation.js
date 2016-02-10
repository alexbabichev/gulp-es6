var path    = require('path'),
    helpers = require('yeoman-test'),
    assert  = require('yeoman-assert');

describe('Generator', function () {
  var appPath = path.join(__dirname, '../app');

  before(function (done) {
    helpers.run(appPath)
      .withOptions({ skipInstallation: true })
      .withPrompts({ githubUser: 'test' })
      .on('end', done);
  });

  it('creates expected files', function () {
    var expected = [
      '.babelrc',
      'CONTRIBUTING.md',
      '.eslintrc',
      '.gitignore',
      'gulpfile.babel.js',
      'LICENSE',
      'package.json',
      'README.md',
      '.travis.yml',
      'src/html/index.html',
      'src/js/main.js',
      'src/js/otherFile.js',
      'src/styl/main.styl',
      'src/styl/otherFile.styl',
      'src/svg/ic_build_black_24px.svg',
      'src/svg/ic_done_black_24px.svg',
      'test/example.js',
    ];

    assert.file(expected);
  });
});
