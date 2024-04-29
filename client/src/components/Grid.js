import React, { useState, useEffect, useRef } from 'react';
import './styles/Grid.css'; // Import your CSS file for styling
import InfiniteScroll from 'react-infinite-scroll-component'; // Import InfiniteScroll component
import { data } from './Data';

const Gallery = () => {
  const [items, setItems] = useState(data.slice(0, 10)); // Initially load first 20 images
  const [showEndMessage, setShowEndMessage] = useState(false)

  const fetchMoreData = () => {
    // Simulating fetching more data by adding 10 more images
    setItems(prevItems => [...prevItems, ...data.slice(prevItems.length, prevItems.length + 10)]);
  };

  useEffect(() => {
    if (items.length === data.length) {
      setShowEndMessage(true)
    }

  }, [items])

  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < data.length} // Adjust hasMore condition based on total data length
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <div className="grid-container">
          {items.map((image, index) => (
            <div
              key={index}
              className="grid-item"
              style={{
                gridColumnEnd: `span ${Math.ceil(image.width / 100)}`,
                gridRowEnd: `span ${Math.ceil(image.height / 100)}`
              }}
            >
              <img src={image.src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      {showEndMessage && <div className='EndOfPage'>Yay ! You have reached the end of the page</div>}
    </>
  );
};

export default Gallery;
