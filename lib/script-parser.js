// Inputs is javascript arrays
// output vanilla js which browser understands
const { parse } = require('acorn');

function parseScript(scripts) {
  const code = scripts.join('\n');
  console.log(code);
  const ast = parse(code, { sourceType: 'module', ecmaVersion: 2015 });
  console.log(ast);
}

module.exports = {
  parseScript,
};
