Package.describe({
  summary: "Samuel Jackson Dorem Ipsum, ported from Slipsum.com"
});

Package.on_use(function (api, where) {
  api.use('ui', 'client');
  // api.use('iron-layout', 'client');
  // api.imply('iron-layout');


  api.add_files('lib/main.js', 'client');
});

// Package.on_test(function (api) {
//   api.use('slipsum-meteor');

//   api.add_files('/lib/slipsum-meteor_tests.js', 'client');
// });
