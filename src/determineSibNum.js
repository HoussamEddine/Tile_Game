const determineSibNum = (elem) => {

  let columnNumOfClickedElem = Number(elem.getAttribute("data-column")),
    rowNumOfClickedElem = Number(elem.getAttribute("data-row")),
    number = Number(elem.getAttribute("data-number")),
    siblingsArr = [];

  siblingsArr = [
    number - 6,
    number - 1,
    number + 1,
    number + 6
  ];

  if ((rowNumOfClickedElem === 1)) {
    if ((columnNumOfClickedElem !== 1) && (columnNumOfClickedElem !== 6)) {

      siblingsArr = [
        number - 1,
        number + 1,
        number + 6
      ]
    } else {

      siblingsArr = [
        number + 1,
        number + 6
      ]
    }
  }
  if ((rowNumOfClickedElem === 6)) {
    if ((columnNumOfClickedElem !== 1) && (columnNumOfClickedElem !== 6)) {

      siblingsArr = [
        number - 6,
        number - 1,
        number + 1,
      ]
    } else {

      siblingsArr = [

        number - 6,
        number + 1
      ]
    }
  }
  if (columnNumOfClickedElem === 1) {
    if (rowNumOfClickedElem !== 1 && rowNumOfClickedElem !== 6) {

      siblingsArr = [
        number - 6,
        number + 1,
        number + 6
      ]
    }

  }
  if (columnNumOfClickedElem === 6) {
    if (rowNumOfClickedElem !== 1 && rowNumOfClickedElem !== 6) {

      siblingsArr = [
        number - 6,
        number - 1,
        number + 6
      ]
    }
    else if (rowNumOfClickedElem === 1) {

      siblingsArr = [
        number - 1,
        number + 6
      ]

    } else {
      siblingsArr = [
        number - 6,
        number - 1,
      ]
    }
  }
  return siblingsArr;

}

export default determineSibNum;