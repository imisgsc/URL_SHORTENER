const urlForm = document.getElementById('urlForm');
  const imgBox = document.getElementById('imgBox');

  urlForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const originalUrl = urlForm.elements['originalUrl'].value.trim();

    if (originalUrl === '') {
      showError('Please enter a URL.');
      return;
    }

    // Simulate a shortened URL (replace this with actual API call in real scenario)
    const shortUrl = generateShortUrl(originalUrl);

    showShortenedUrl(shortUrl, originalUrl);
  });

  function generateShortUrl(originalUrl) {
    // In real scenario, you would send a request to a URL shortening API
    // and get back a short URL. For now, let's simulate it.
    const hash = Math.random().toString(36).substr(2, 7);
    return `https://short.url/${hash}`;
  }

  function showShortenedUrl(shortUrl, originalUrl) {
    imgBox.innerHTML = `
      <div class="show-img">
        <p>Your shortened URL:</p>
        <input type="text" id="shortUrlInput" value="${shortUrl}" readonly>
        <button onclick="copyToClipboard('${shortUrl}')">Copy</button>
      </div>
    `;
    imgBox.classList.add('show-img');

    // Redirect functionality (simulated)
    const shortUrlInput = document.getElementById('shortUrlInput');
    shortUrlInput.addEventListener('click', function() {
      window.location.href = originalUrl;
    });
  }

  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard');
  }

  function showError(message) {
    imgBox.innerHTML = `<p class="error">${message}</p>`;
    imgBox.classList.add('show-img', 'error');
  }