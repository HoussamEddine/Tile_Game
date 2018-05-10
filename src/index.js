import determineSibNum from './determineSibNum';
import determinMatchedSiblings from './determineMathingSib';

(function (gb) {

  const document = gb.document,
    gameBoard = document.getElementById("game-board"),
    backgrounds = ['#d04141', "#5e88d4", "#aabd86"];

  let gameTiles,
    gameTilesArr = [],
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
    return gameTilesArr;

  }

  const clean = () => {
    gameTilesArr.forEach((e) => {
      e.parentNode.removeChild(e);
    });
    init();
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
  init();

})(window);
