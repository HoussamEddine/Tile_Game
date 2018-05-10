
import accessDOMElem from './accessDOMElem';

const determinMatchedSiblings = (matchedSiblings, targetBack) => {
  if (toString.call(matchedSiblings) === "[object Array]") {
    let siblings = [];
    const length = matchedSiblings.length;
    matchedSiblings.forEach((e) => {

      siblings.push(...accessDOMElem(e));

    });

    siblings.forEach((sibs) => {

      if (sibs.style.background === targetBack) {
        if (!matchedSiblings.includes(sibs)) {

          matchedSiblings.push(sibs);

        }
      }
      if (length !== matchedSiblings.length) {
        determinMatchedSiblings(matchedSiblings, targetBack);
      }
    });
    return matchedSiblings;
  }
  else {
    return false;
  }
}

export default determinMatchedSiblings;