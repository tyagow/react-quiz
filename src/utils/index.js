export const generateId = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4();
};

export const swapLeft = (elements, id) => {
  let index = elements.indexOf(id);
  console.log(elements);
  console.log(index);
  if (index > 0) {
    const targetElement = elements[index - 1];
    return elements.map(element => {
      if (element === targetElement) {
        return elements[index];
      } else if (element === elements[index]) {
        return targetElement;
      }
      return element;
    });
  } else {
    return elements;
  }
};

export const swapRight = (elements, id) => {
  let index = elements.indexOf(id);
  if (0 <= index && index < elements.length - 1) {
    const targetElement = elements[index + 1];
    return elements.map(element => {
      if (element === targetElement) {
        return elements[index];
      } else if (element === elements[index]) {
        return targetElement;
      }
      return element;
    });
  } else {
    return elements;
  }
};
