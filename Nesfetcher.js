import React, { useEffect, useState } from 'react';

function News() {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.apikey.krg/news?apikey=6ab5c9d548c641469c7411788a7c6f27')
      .then(res => {
        if (!res.ok) throw new Error('Fehler beim Laden');
        return res.json();
      })
      .then(data => setNews(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>Fehler: {error}</div>;
  if (!news) return <div>Lade News...</div>;

  return (
    <div>
      <h2>News</h2>
      <pre>{JSON.stringify(news, null, 2)}</pre>
    </div>
  );
}

export default News;
