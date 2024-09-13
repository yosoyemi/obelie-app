import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import '../WordSearchGame.css';

const generateGrid = (size, words) => {
  const grid = Array(size)
    .fill(null)
    .map(() => Array(size).fill(''));

  const placeWord = (word) => {
    const isHorizontal = Math.random() < 0.5;
    let row, col, fits;

    if (isHorizontal) {
      fits = (row, col) => col + word.length <= size;
    } else {
      fits = (row, col) => row + word.length <= size;
    }

    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 100) {
      row = Math.floor(Math.random() * size);
      col = Math.floor(Math.random() * size);
      if (fits(row, col) && canPlaceWord(word, row, col, isHorizontal)) {
        for (let i = 0; i < word.length; i++) {
          if (isHorizontal) {
            grid[row][col + i] = word[i];
          } else {
            grid[row + i][col] = word[i];
          }
        }
        placed = true;
      }
      attempts++;
    }
  };

  const canPlaceWord = (word, row, col, isHorizontal) => {
    for (let i = 0; i < word.length; i++) {
      if (isHorizontal) {
        if (grid[row][col + i] !== '') {
          return false;
        }
      } else {
        if (grid[row + i][col] !== '') {
          return false;
        }
      }
    }
    return true;
  };

  words.forEach((word) => placeWord(word));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (!grid[i][j]) {
        grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  }

  return grid;
};

const isValidWord = (grid, selectedCells, words) => {
  const selectedWord = selectedCells.map(cell => grid[cell.row][cell.col]).join('');
  return words.includes(selectedWord);
};

const WordSearchGame = () => {
  const [grid, setGrid] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [revealedWords, setRevealedWords] = useState([]);
  const [startCell, setStartCell] = useState(null);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutos en segundos
  const [message, setMessage] = useState('');
  const [gameWon, setGameWon] = useState(false);
  const [totalTimeTaken, setTotalTimeTaken] = useState(0);
  const [words, setWords] = useState([]);

  const allWords = [
    'GUAYABA', 'OREO', 'ZANAHORIA', 'CAJETA', 'FRESA', 'CHOCOLATE', 'DULCE', 'LECHE', 'PISTACHE', 'VAINILLA', 
    'QUESO', 'LIMON', 'NUEZ', 'MANZANA', 'PERA', 'MANGO', 'CIRUELA', 'COCO', 'PLATANO', 'ARANDANO',
    'CEREZA', 'HIGO', 'KIWI', 'MANDARINA', 'MELON', 'SANDIA', 'TAMARINDO', 'TUNA', 'PAPAYA', 'DURAZNO',
    'FRAMBUESA', 'GROSELLA', 'GUANABANA', 'GUAYABA', 'LITCHI', 'MORA', 'NECTARINA', 'NARANJA', 'PARAISO', 
    'CARAMBOLA', 'POMELO', 'TANGERINA', 'ZAPOTE', 'AVELLANA', 'CASTAÑA', 'COCOA', 'CACAO', 'MAIZ', 'ARROZ'
  ];

  const selectRandomWords = () => {
    const selectedWords = [];
    while (selectedWords.length < 9) {
      const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
      if (!selectedWords.includes(randomWord)) {
        selectedWords.push(randomWord);
      }
    }
    return selectedWords;
  };

  const initializeGame = () => {
    const selectedWords = selectRandomWords();
    setWords(selectedWords);
    setGrid(generateGrid(12, selectedWords));
    setSelectedCells([]);
    setFoundWords([]);
    setRevealedWords([]);
    setTimeLeft(1800); // 30 minutos
    setMessage('');
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (!gameWon) {
          if (prevTime <= 1) {
            setMessage('Se acabó el tiempo. Inténtalo de nuevo.');
            initializeGame();
            return 1800;
          }
          return prevTime - 1;
        } else {
          clearInterval(timer);
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameWon]);

  useEffect(() => {
    if (foundWords.length === 9) {
      const totalTime = 1800 - timeLeft;
      setTotalTimeTaken(totalTime);
      const minutesTaken = Math.floor(totalTime / 60);
      const secondsTaken = totalTime % 60;
      setMessage('¡Felicidades! Has ganado la Sopa de Letras');
      setGameWon(true);
    }
  }, [foundWords, timeLeft]);

  const handleTouchStart = (event, row, col) => {
    event.preventDefault(); // Prevenir desplazamiento en dispositivos táctiles
    setStartCell({ row, col });
    setSelectedCells([{ row, col }]);
  };

  const handleTouchMove = (event) => {
    event.preventDefault(); // Prevenir desplazamiento en dispositivos táctiles
    const touch = event.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target && target.dataset.row && target.dataset.col) {
      const row = parseInt(target.dataset.row, 10);
      const col = parseInt(target.dataset.col, 10);
      const newSelectedCells = calculateSelection(startCell, { row, col });
      setSelectedCells(newSelectedCells);
    }
  };

  const handleTouchEnd = () => {
    if (isValidWord(grid, selectedCells, words)) {
      setFoundWords([...foundWords, selectedCells]);
    }
    setStartCell(null);
    setSelectedCells([]);
  };

  const calculateSelection = (start, end) => {
    const newSelectedCells = [];
    const minRow = Math.min(start.row, end.row);
    const maxRow = Math.max(start.row, end.row);
    const minCol = Math.min(start.col, end.col);
    const maxCol = Math.max(start.col, end.col);

    for (let i = minRow; i <= maxRow; i++) {
      for (let j = minCol; j <= maxCol; j++) {
        newSelectedCells.push({ row: i, col: j });
      }
    }
    return newSelectedCells;
  };

  const handleReset = () => {
    initializeGame();
  };

  const handleRevealWord = () => {
    const unrevealedWords = words.filter(word => !revealedWords.includes(word) && !foundWords.some(fw => fw.map(cell => grid[cell.row][cell.col]).join('') === word));
    if (unrevealedWords.length > 0) {
      const wordToReveal = unrevealedWords[Math.floor(Math.random() * unrevealedWords.length)];
      let revealedWordCells = [];

      outer: for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
          if (grid[rowIndex][colIndex] === wordToReveal[0]) {
            // Check horizontal
            if (colIndex + wordToReveal.length <= grid[rowIndex].length) {
              const horizontalMatch = [];
              for (let i = 0; i < wordToReveal.length; i++) {
                if (grid[rowIndex][colIndex + i] === wordToReveal[i]) {
                  horizontalMatch.push({ row: rowIndex, col: colIndex + i });
                } else {
                  break;
                }
              }
              if (horizontalMatch.length === wordToReveal.length) {
                revealedWordCells = horizontalMatch;
                break outer;
              }
            }
            // Check vertical
            if (rowIndex + wordToReveal.length <= grid.length) {
              const verticalMatch = [];
              for (let i = 0; i < wordToReveal.length; i++) {
                if (grid[rowIndex + i][colIndex] === wordToReveal[i]) {
                  verticalMatch.push({ row: rowIndex + i, col: colIndex });
                } else {
                  break;
                }
              }
              if (verticalMatch.length === wordToReveal.length) {
                revealedWordCells = verticalMatch;
                break outer;
              }
            }
          }
        }
      }

      if (revealedWordCells.length > 0) {
        setRevealedWords(prevRevealedWords => [...prevRevealedWords, wordToReveal]);
        setFoundWords(prevFoundWords => [...prevFoundWords, revealedWordCells]);
      }
    }
  };

  return (
    <div className="wordsearch-container">
      {gameWon && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className="modal">
            <div className="modal-content">
              <h2>¡Felicidades!</h2>
              <p>Has ganado la Sopa de Letras</p>
              <p>¡Eres increíble! Has encontrado todas las palabras.</p>
              <button onClick={handleReset} className="modal-button">Jugar de nuevo</button>
            </div>
          </div>
        </>
      )}
      <h2 className="text-center text-3xl font-bold mb-4 font-serif" style={{ fontFamily: 'Dancing Script, cursive' }}>Sopa de Letras</h2>
      <div className="timer">Tiempo restante: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${
                selectedCells.some(sc => sc.row === rowIndex && sc.col === colIndex) ? 'selected' : 
                foundWords.some(wordCells => wordCells.some(wc => wc.row === rowIndex && wc.col === colIndex)) ? 'found' : 
                revealedWords.some(word => {
                  const wordCells = [];
                  // Check horizontal
                  if (colIndex + word.length <= grid[rowIndex].length) {
                    for (let i = 0; i < word.length; i++) {
                      if (grid[rowIndex][colIndex + i] === word[i]) {
                        wordCells.push({ row: rowIndex, col: colIndex + i });
                      } else {
                        wordCells.length = 0;
                        break;
                      }
                    }
                  }
                  // Check vertical
                  if (wordCells.length === 0 && rowIndex + word.length <= grid.length) {
                    for (let i = 0; i < word.length; i++) {
                      if (grid[rowIndex + i][colIndex] === word[i]) {
                        wordCells.push({ row: rowIndex + i, col: colIndex });
                      } else {
                        wordCells.length = 0;
                        break;
                      }
                    }
                  }
                  return wordCells.length === word.length;
                }) ? 'revealed' : ''
              }`}
              onTouchStart={(e) => handleTouchStart(e, rowIndex, colIndex)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              data-row={rowIndex}
              data-col={colIndex}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      <div className="word-list mt-4">
        <h3 className="text-lg font-semibold mb-2">Palabras a encontrar:</h3>
        <div className="words-grid">
          {words.map((word, index) => (
            <div key={index} className={`word-item ${foundWords.some(fw => fw.map(cell => grid[cell.row][cell.col]).join('') === word) ? (revealedWords.includes(word) ? 'revealed' : 'found') : ''}`}>
              • {word}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleReset}
          className="bg-[#5da559] text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Reiniciar Juego
        </button>
        <button
          onClick={handleRevealWord}
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300"
        >
          Pista
        </button>
      </div>
      {message && !gameWon && <div className="message mt-4">{message}</div>}
    </div>
  );
};

export default WordSearchGame;
