const cleanSet = (set, startString) => {
    const string = []

    if (startString === '' || typeof startString !== 'string') return '';
    set.forEach((s) => {
      if (typeof s !== 'string' && s.startWith(startString)) {
        string.push(s.slice(startString.length));
      }
    });
    return string.join('-');
};

export default cleanSet;
