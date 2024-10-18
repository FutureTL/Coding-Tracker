

function generateUniqueId(text) {
  return btoa(text); // This should be adjusted to ensure it’s truly unique.
}

if (typeof chrome.runtime !== 'undefined') {
  console.log('chrome.runtime is available.');
} else {
  console.error('chrome.runtime is undefined. Ensure the content script is running as part of a Chrome extension.');
}

window.addEventListener('load', () => {
  console.log('Window fully loaded. Looking for parent div...');

  const intervalId = setInterval(() => {
      const parentDiv = document.getElementById('__next');

      if (parentDiv) {
        

          const observer = new MutationObserver((mutationsList) => {
              for (let mutation of mutationsList) {
                  if (mutation.type === 'childList') {
                      mutation.addedNodes.forEach((node) => {
                          if (node.nodeType === Node.ELEMENT_NODE) {
                              
                              if (node.textContent.includes('Accepted')) {
                                  

                                  const uniqueId = generateUniqueId(node.textContent);

                                  chrome.runtime.sendMessage({
                                      action: 'log_submission',
                                      id: uniqueId,
                                      title: document.title || 'Some title',
                                      link: window.location.href,
                                      status: 'Accepted'
                                  });
                              }
                          }
                      });
                  }
              }
          });
          const config = { childList: true, subtree: true };
          observer.observe(parentDiv, config);

          clearInterval(intervalId);
      } else {
          console.log('Parent div not yet found, retrying...');
      }
  }, 1000); // Check every second
});


































