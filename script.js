const urlForm = document.getElementById('urlForm');
  const imgBox = document.getElementById('imgBox');

  urlForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(urlForm);
    const originalUrl = formData.get('originalUrl');

    try {
      const response = await fetch('https://api.shorturl.com/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: originalUrl })
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      const shortUrl = data.shortUrl;

      imgBox.innerHTML = `
        <div class="show-img">
          <p>Your shortened URL:</p>
          <input type="text" value="${shortUrl}" readonly>
          <button onclick="copyToClipboard('${shortUrl}')">Copy</button>
        </div>
      `;
      imgBox.classList.add('show-img');
    } catch (error) {
      console.error('Error:', error);
      imgBox.innerHTML = '<p class="error">Failed to shorten URL. Please try again.</p>';
      imgBox.classList.add('show-img', 'error');
    }
  });

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