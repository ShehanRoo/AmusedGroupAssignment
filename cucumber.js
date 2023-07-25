require('dotenv').config({
  path: '.env'
});

let options = [
  '--require-module ts-node/register',
  '--require src/stepDefinitions/*.ts',
  '--format summary',
  '--format json:./test-results/reports/cucumber-result.json',
  '--format html:./test-results/reports/cucumber-result.html',
  '--publish-quiet true',
  `--parallel=${process.env.PARALLEL_THREAD}`,
  `--retry=${process.env.RETRIES}`,
  `--format-options '{"snippetInterface":"async-await"}'`,
].join(' ');

let runner = [
  'features/*.feature',
  options,
].join(' ');

module.exports = { runner }