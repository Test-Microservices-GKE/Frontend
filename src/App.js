import React, { useEffect, useState } from 'react';

const App = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiCommentUrl = `${apiUrl}/comment`;
  const apiVideoUrl = `${apiUrl}/video`;

  const [comments, setComments] = useState(null);
  const [videos, setVideos] = useState(null);
  console.log(apiCommentUrl)
  useEffect(() => {
    // Fetch comments
    fetch(apiCommentUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Comments:', data);
        setComments(data);
      })
      .catch(error => console.error('Error fetching comments:', error));

    // Fetch videos
    
  }, [apiCommentUrl]);
  const fetchComments = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/comment`);
      if (response.ok) {
          const data = await response.json();
          console.log(data);
          return data;
      } else {
          console.error('Fetch error:', response.statusText);
      }
  };

  fetchComments();
  
  console.log(comments)
  return (
    <div>
      <h1>API Data</h1>
      <h2>Comments</h2>
      <pre>{JSON.stringify(comments, null, 2)}</pre>

    </div>
  );
};

export default App;
