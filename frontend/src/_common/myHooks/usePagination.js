import React, {useEffect, useState} from 'react';

const usePagination = (data, offset) => {

    // const [data, setData] = useState(data);
    const [dataChunk, setDataChunk] = useState([]);
    const [position, setPosition] = useState(offset);

    useEffect(() => {
        setDataChunk(data.slice(0, offset))
    }, []);


    const nextChunk = () => {
        setDataChunk(data.slice(position, position + offset));
        setPosition(prevPosition => prevPosition + offset);
    };

    const prevChunk = () => {
        setDataChunk(data.slice(position - offset,position ));
        setPosition(prevPosition => prevPosition - offset);
    };


    return [dataChunk, nextChunk, prevChunk]
};
export default usePagination;