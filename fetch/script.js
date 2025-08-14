async function fetchLatestXKCD() {
    const apiEndpoint = 'https://xkcd.now.sh/?comic=latest';

    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error(`Fetching error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received data:', data);

      if (data.img) {
        const imgElement = document.createElement('img');
        imgElement.src = data.img;
        imgElement.alt = data.alt || 'XKCD Comic';

        const container = document.getElementById('image-container');
        container.innerHTML = ''; 
        container.appendChild(imgElement);
      } else {
        console.warn('No "img" property found in the data.');
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      const errorMsg = document.createElement('div');
      errorMsg.className = 'error';
      errorMsg.textContent = `Error fetching data: ${error.message}`;
      document.body.appendChild(errorMsg);
    }
  }

  fetchLatestXKCD();

