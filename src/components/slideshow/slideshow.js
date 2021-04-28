import React, { useState } from 'react';

const SlideShow = (props) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <div>
      <img src={`https://covers.openlibrary.org/b/id/${props.covers[currentIdx]}-M.jpg`} alt="book cover" />
      <div>
        <button onClick={()=>setCurrentIdx(currentIdx-1)}>prev</button>
        <button onClick={()=>setCurrentIdx(currentIdx+1)}>next</button>
      </div>
    </div>
  );
};

export default SlideShow;
