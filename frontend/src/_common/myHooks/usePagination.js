import React, { useEffect, useState } from "react";

const usePagination = (data, offset) => {
  const [dataChunk, setDataChunk] = useState([]);
  const [position, setPosition] = useState(0);
  const [navigation, setNavigation] = useState([]);

  useEffect(() => {
    setDataChunk(data.slice(0, offset));
    const nav = [...Array(Math.ceil(data.length / offset) + 1).keys()];
    nav.shift();
    setNavigation(nav);
  }, []);

  const nextChunk = () => {
    // console.log(`position [${position}],offset[${offset}]`);
    const newPosition = position + offset;
    if (newPosition >= data.length) {
      setPosition(0);
      setDataChunk(data.slice(0, offset));
      return;
    }
    setDataChunk(data.slice(newPosition, newPosition + offset));
    setPosition((prevPosition) => prevPosition + offset);
  };

  const prevChunk = () => {
    // console.log(`position [${position}],offset[${offset}] prev`);
    if (position - offset < 0) {
      const startPosition = (Math.ceil(data.length / offset) - 1) * offset;
      setPosition(startPosition);
      setDataChunk(data.slice(startPosition, data.length));
      return;
    }
    setPosition((prevPosition) => prevPosition - offset);
    setDataChunk(data.slice(position - offset, position));
  };

  const goToPage = (page) => {
    // console.log('goToPage', page);
    setPosition((page - 1) * offset);
    setDataChunk(data.slice((page - 1) * offset, page * offset));
  };

  return [dataChunk, nextChunk, prevChunk, navigation, goToPage];
};
export default usePagination;
