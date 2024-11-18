const createAcceptRegex = (accept: string) => {
  const types = accept.split(",").map((type) => type.trim());

  const regexParts = types.map((type: string) => {
    if (type.includes("/*")) {
      return `^${type.replace("/*", "/.+")}$`;
    } else if (type.startsWith(".")) {
      return `\\${type}$`;
    } else {
      return `^${type}$`;
    }
  });

  return new RegExp(regexParts.join("|"));
};

export default createAcceptRegex;
