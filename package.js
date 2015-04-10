Package.describe({
  name: 'bdunnette:cornerstone',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Cornerstone medical imaging library packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bdunnette/meteor-cornerstone.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  license: 'MIT'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'lib/cornerstone.js',
    'styles/cornerstone.css'
  ],'client');
});
