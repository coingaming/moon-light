/**
 * Places tab characters in structured text data
 * @param {string} contents - data to arrange.
 */
String.prototype.tabulate = function() {
  let level = 0;
  return this.split('\n')
    .map((line) => {
      if (line.match(/[\}\]]/)) level--;
      if (level > 0) line = "\t".repeat(level) + line;
      if (line.match(/[\{\[]/)) level++;
      return line;
    })
    .join('\n');
}

export const tabulate = String.prototype.tabulate;