document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;
  
    fetch('/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: originalUrl }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.shortUrl) {
          document.getElementById('shortenedUrl').innerHTML = `
            <p>Your shortened URL:</p>
            <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>
          `;
        } else {
          document.getElementById('shortenedUrl').innerHTML = '<p>Error shortening URL</p>';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('shortenedUrl').innerHTML = '<p>Error shortening URL</p>';
      });
  });
  