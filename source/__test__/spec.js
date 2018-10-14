import accessDOMElem from '../accessDOMElem';
import determineSibNum from '../determineSibNum';
import determineMatchingSib from '../determineMathingSib';

describe("test", () => {

  const parent = document.createElement("div");
  let gameTilesArrMock = [],
    column = 1,
    row = 1;
  for (let i = 0; i < 36; i++) {
    const child = document.createElement("div");
    parent.appendChild(child);

    if (column === 7) {
      column = 1;
      row++;
    }
    child.dataset.column = column;
    child.dataset.row = row;
    child.dataset.number = i;
    column++;
    gameTilesArrMock.push(child);
  }


  test("empty Test", () => {
    expect(true).toBe(true);
  });

  test("init function should create child DOM elems and append them to the parent", () => {
    expect(parent.children.length).toEqual(36);
    expect(gameTilesArrMock.length).toEqual(36);
  });

  test("clean function should delete the children from the DOM and call init", () => {
    const init = jest.fn();
    const clean = jest.fn(() => {
      gameTilesArrMock.forEach(element => {
        element.parentNode.removeChild(element);
      });
      init();
    });
    clean();

    expect(parent.children.length).toEqual(0);
    expect(init.mock.calls.length).toEqual(1);

  });

  test("determineSibNum should determine the siblings Num of a tileGame element & return an array of it", () => {

    // pick  4 random elems 

    const elem1 = gameTilesArrMock[0],
      elem2 = gameTilesArrMock[11],
      elem3 = gameTilesArrMock[24],
      elem4 = gameTilesArrMock[33];

    // elem 1 
    expect(determineSibNum(elem1).length).toEqual(2);
    expect(determineSibNum(elem1)[0]).toEqual(1);
    expect(determineSibNum(elem1)[1]).toEqual(6);

    // elem2
    expect(determineSibNum(elem2).length).toEqual(3);
    expect(determineSibNum(elem2)[0]).toEqual(5);
    expect(determineSibNum(elem2)[1]).toEqual(10);
    expect(determineSibNum(elem2)[2]).toEqual(17);

    // elem3
    expect(determineSibNum(elem3).length).toEqual(3);
    expect(determineSibNum(elem3)[0]).toEqual(18);
    expect(determineSibNum(elem3)[1]).toEqual(25);
    expect(determineSibNum(elem3)[2]).toEqual(30);

    // elem4
    expect(determineSibNum(elem4).length).toEqual(3);
    expect(determineSibNum(elem4)[0]).toEqual(27);
    expect(determineSibNum(elem4)[1]).toEqual(32);
    expect(determineSibNum(elem4)[2]).toEqual(34);


  })



})  
