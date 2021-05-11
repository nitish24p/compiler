const { parseFragment } = require('parse5');
const fs = require('fs');

function readFile(path) {
  const source = fs.readFileSync(path, { encoding: 'utf8' });
  return source;
}

function extract(source) {
  const fragment = parseFragment(source);
  const scripts = [];
  const styles = [];
  const views = [];

  fragment.childNodes.forEach((node) => {
    if (node.nodeName === 'script') {
      scripts.push(node.childNodes[0].value);
    }

    if (node.nodeName === 'style') {
      styles.push(node.childNodes[0].value);
    }

    if (node.nodeName === 'view') {
      views.push(node.childNodes[0].value);
    }
  });

  return { scripts, styles, views };
}

function parseFile(path) {
  const source = readFile(path);
  return extract(source);
}

module.exports = {
  parseFile,
};
