import React, {useEffect, useState} from 'react';

const usePagination = (data, offset) => {

    // const [data, setData] = useState(data);
    const [dataChunk, setDataChunk] = useState([]);
    const [position, setPosition] = useState(offset);

    useEffect(() => {
        setDataChunk(data.slice(0, offset))
    }, []);


    const nextChunk = () => {
        if (position > data.length) {
            setDataChunk(data.slice(0, offset));
            setPosition(offset);
            return;
        }
        setDataChunk(data.slice(position, position + offset));
        setPosition(prevPosition => prevPosition + offset);
    };

    const prevChunk = () => {

        if (position - offset < 0 ) {
            console.log('position',position);
            const startPosition = Math.floor((data.length / offset)) * offset;
            setDataChunk(data.slice(startPosition, data.length ));
            setPosition(startPosition);
            return;
        }
        setDataChunk(data.slice(position - offset, position));
        setPosition(prevPosition => prevPosition - offset);
    };


    return [dataChunk, nextChunk, prevChunk]
};
export default usePagination;