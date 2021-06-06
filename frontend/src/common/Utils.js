const Utils = {
  generateArrangementKey: (row, col) => `${row}|${col}`,
  extractArrangementKey: (key) => key.split('|'),

  extractArrangementRepresentation: (arrangement) => {
    const parsedArrangement = {};
    for (let key in arrangement) {
      parsedArrangement[key] = arrangement[key] && arrangement[key].representation;
    }
    return parsedArrangement;
  }
};

export default Utils;