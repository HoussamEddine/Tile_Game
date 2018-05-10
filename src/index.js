(function (gb) {

  const document = gb.document,
    gameBoard = document.getElementById("game-board"),
    backgrounds = ['#d04141', "#5e88d4", "#aabd86"];

  let gameTiles;

  let gameTilesArr = [],
    mainTile,
    selectedElems,
    score = 0,
    bestScore = 0;


  const init = () => {

    let row = 1,
      column = 1;


    if (gameTiles === undefined) {
      gameTiles = document.createElement("div");
    }
    if (gameTilesArr.length !== 0) {
      gameTilesArr = [];
    }
    for (let i = 0; i < 36; i++) {
      const randomNumFromOneToThree = Math.floor(Math.random() * 3),
        gameTile = document.createElement("div");

      gameTile.className = "game-tile";
      if (column === 7) {
        column = 1;
        row++;
      }

      gameTile.dataset.column = column;
      gameTile.dataset.row = row;
      gameTile.dataset.number = i;
      gameTile.style.background = backgrounds[randomNumFromOneToThree];
      gameTiles.appendChild(gameTile);
      gameTiles.setAttribute("id", "game-tiles");
      gameBoard.appendChild(gameTiles);
      gameTilesArr.push(gameTile);
      column++;
      if (i === 0) {
        mainTile = document.getElementsByClassName("game-tile")[0];
        mainTile.classList.add("game-tile-origin");
      }
      selectedElems = [mainTile];

    }
    gameTilesArr.forEach((e) => {
      e.addEventListener("click", (e) => (handleClick(e)));
    });

  }

  init();
  const clean = () => {

    gameTilesArr.forEach((e) => {
      e.parentNode.removeChild(e);
    });
    init();
  }

  const determineSib = (elem) => {

    let columnNumOfClickedElem = Number(elem.getAttribute("data-column")),
      rowNumOfClickedElem = Number(elem.getAttribute("data-row")),
      number = Number(elem.getAttribute("data-number")),

      siblingsArr = [],
      getByClass = (e) => (document.getElementsByClassName(e));
    siblingsArr = [
      getByClass("game-tile")[number - 1],
      getByClass("game-tile")[number + 6],
      getByClass("game-tile")[number - 6],
      getByClass("game-tile")[number + 1]
    ];
    if ((rowNumOfClickedElem === 1)) {
      if ((columnNumOfClickedElem !== 1) && (columnNumOfClickedElem !== 6)) {

        siblingsArr = [
          getByClass("game-tile")[number + 1],
          getByClass("game-tile")[number - 1],
          getByClass("game-tile")[number + 6]
        ]
      } else {

        siblingsArr = [
          getByClass("game-tile")[number + 1],
          getByClass("game-tile")[number + 6]
        ]
      }
    }
    if ((rowNumOfClickedElem === 6)) {
      if ((columnNumOfClickedElem !== 1) && (columnNumOfClickedElem !== 6)) {

        siblingsArr = [
          getByClass("game-tile")[number - 1],
          getByClass("game-tile")[number + 1],
          getByClass("game-tile")[number - 6]
        ]
      } else {

        siblingsArr = [

          getByClass("game-tile")[number + 1],
          getByClass("game-tile")[number - 6]
        ]
      }
    }
    if (columnNumOfClickedElem === 1) {
      if (rowNumOfClickedElem !== 1 && rowNumOfClickedElem !== 6) {

        siblingsArr = [
          getByClass("game-tile")[number + 1],
          getByClass("game-tile")[number + 6],
          getByClass("game-tile")[number - 6]
        ]
      }

    }
    if (columnNumOfClickedElem === 6) {
      if (rowNumOfClickedElem !== 1 && rowNumOfClickedElem !== 6) {

        siblingsArr = [
          getByClass("game-tile")[number - 1],
          getByClass("game-tile")[number + 6],
          getByClass("game-tile")[number - 6]
        ]
      }
      else if (rowNumOfClickedElem === 1) {

        siblingsArr = [
          getByClass("game-tile")[number - 1],
          getByClass("game-tile")[number + 6]]

      } else {
        siblingsArr = [
          getByClass("game-tile")[number - 1],
          getByClass("game-tile")[number - 6]]
      }
    }
    return siblingsArr;

  }
  const determinMatchedSiblings = (matchedSiblings, targetBack) => {
    if (toString.call(matchedSiblings) === "[object Array]") {
      let siblings = [];
      const length = matchedSiblings.length;
      matchedSiblings.forEach((e) => {
        siblings.push(...determineSib(e));
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


  const handleClick = function (ev) {
    score++;
    const clickedElem = ev.target,
      tileClickedBakground = clickedElem.style.background,
      mainTileBackground = mainTile.style.background,
      gameScore = document.querySelector("#score h1"),
      gameBestScore = document.querySelector("#score #best-score");


    if (mainTileBackground !== tileClickedBakground) {
      mainTile.style.background = tileClickedBakground;
    }
    selectedElems = determinMatchedSiblings(selectedElems, tileClickedBakground);
    selectedElems.forEach((e) => {
      e.style.background = tileClickedBakground;
      e.style.border = "0";
    });
    const shouldClean = gameTilesArr.every((e) => {
      return e.style.background === tileClickedBakground;
    });
    if (shouldClean) {
      bestScore === 0 ? bestScore = score : bestScore;
      if (score < bestScore) {
        bestScore = score;
      }
      score = 0;
      clean();
    }
    gameScore.innerHTML = `SCORE: \n ${score}`;
    gameBestScore.innerHTML = `BEST SCORE: \n ${bestScore}`;
  }


})(window);
