import determineSibNum from './determineSibNum';

const accessDOMElem = (elem) => {
  const sibsNum = determineSibNum(elem);

  let siblingsArr = [];
  const getByClass = (e) => (document.getElementsByClassName(e));
  sibsNum.forEach((e) => {
    siblingsArr.push(getByClass("game-tile")[e]);
  });
  return siblingsArr;

};

export default accessDOMElem;