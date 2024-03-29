import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const ChessBoard = ({ size = 8, lightColor = '#FFF', darkColor = '#000' }) => {
  const windowWidth = Dimensions.get('window').width;
  const squareSize = windowWidth / size;

 
  const renderSquares = () => {
    let squares = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // Determine the color of the square
        const color = (i + j) % 2 === 0 ? lightColor : darkColor;
        squares.push(
          <View
            key={`${i}-${j}`}
            style={[
              styles.square,
              { backgroundColor: color },
              { left: j * squareSize, top: i * squareSize },
            ]}
          />
        );
      }
    }
    return squares;
  };

  return (
    <View style={[styles.board, { width: windowWidth, height: windowWidth }]}>
      {renderSquares()}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    position: 'relative',
  },
  square: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#000', 
  },
});

export default ChessBoard;

    