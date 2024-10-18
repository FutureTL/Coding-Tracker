chrome.runtime.onMessage.addListener(function(request, _sender, sendResponse) {
  if (request.action === 'log_submission') {
      // Existing code to log submissions...
      const questionSlug = getQuestionSlug(request.link);
      if (!questionSlug) {
          console.error('Invalid URL format:', request.link);
          return;
      }

      // Retrieve the list of logged questions
      chrome.storage.local.get(['loggedQuestions'], function(result) {
          let loggedQuestions = result.loggedQuestions || [];

          if (!loggedQuestions.includes(questionSlug)) {
              loggedQuestions.push(questionSlug);
              chrome.storage.local.set({ loggedQuestions: loggedQuestions });
          }
      });

  } else if (request.action === 'get_logs') {
      // Send back the stored logs to the popup
      chrome.storage.local.get(['loggedQuestions'], function(result) {
          const loggedQuestions = result.loggedQuestions || [];
          sendResponse({ loggedQuestions: loggedQuestions });
      });
      return true; // Indicate async response
  }
});

// Utility function to extract the slug from the URL
function getQuestionSlug(url) {
  const match = url.match(/problems\/([^\/]+)\//);
  return match ? match[1] : null;
}









// chrome.runtime.onMessage.addListener(function(request, _sender, _sendResponse) {
//   if (request.action === 'log_submission') {
//       // Existing code to log submissions...
//       const questionSlug = getQuestionSlug(request.link);
//       if (!questionSlug) {
//           console.error('Invalid URL format:', request.link);
//           return;
//       }

//       // Retrieve the list of logged questions
//       chrome.storage.local.get(['loggedQuestions'], function(result) {
//           let loggedQuestions = result.loggedQuestions || [];

//           if (!loggedQuestions.includes(questionSlug)) {
//               loggedQuestions.push(questionSlug);
//               chrome.storage.local.set({ loggedQuestions: loggedQuestions });

//               // Log the submission to the backend
//               fetch('http://localhost:3000/log-submission', {
//                   method: 'POST',
//                   headers: { 'Content-Type': 'application/json' },
//                   body: JSON.stringify({
//                       title: request.title,
//                       link: request.link,
//                       status: request.status
//                   })
//               }).then(response => response.json())
//               .then(data => console.log('Successfully logged:', data))
//               .catch(error => console.error('Error logging submission:', error));
//           }
//       });

//   } else if (request.action === 'get_logs') {
//       // Send back the stored logs when requested
//       chrome.storage.local.get(['loggedQuestions'], function(result) {
//           const loggedQuestions = result.loggedQuestions || [];
//           _sendResponse({ loggedQuestions: loggedQuestions });
//       });
//       return true; // Indicate async response
//   }
// });

// // Utility function to extract the slug from the URL
// function getQuestionSlug(url) {
//   const match = url.match(/problems\/([^\/]+)\//);
//   return match ? match[1] : null;
// }







// // Add a listener for messages from the content script
// chrome.runtime.onMessage.addListener(function(request, _sender, _sendResponse) {

//     console.log('Received submission in background script:', request);

//     if (request.action === 'log_submission') {
//       _sendResponse({status:'Message recieved'});

//     // Extract the question slug from the URL
//     const questionSlug = getQuestionSlug(request.link);
//     console.log('question slug:',questionSlug);

//     if (!questionSlug) {
//       console.error('Invalid URL format:', request.link);
//       return;
//     }

//     // Retrieve the list of logged question slugs from local storage
//     chrome.storage.local.get(['loggedQuestions'], function(result) {
//       let loggedQuestions = result.loggedQuestions || [];

//       // Check if the question slug has already been logged
//       if (loggedQuestions.includes(questionSlug)) {
//         console.log('Question already logged:', questionSlug);
//         return; // Exit if the question has already been logged
//       }

//       // Log the submission to the backend server
//       fetch('http://localhost:3000/log-submission', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           title: request.title,
//           link: request.link,
//           status: request.status
//         })
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Successfully logged:', data);

//         // Add the question slug to the list and store it
//         loggedQuestions.push(questionSlug);
//         chrome.storage.local.set({ loggedQuestions: loggedQuestions });
//       })
//       .catch(error => console.error('Error logging submission:', error));
//     });
//   }else{
//     console.error('unknown action:',request.action);
//   }
// });

// // Function to extract the question slug from the URL
// function getQuestionSlug(url) {
//   const match = url.match(/problems\/([^\/]+)\//);
//   return match ? match[1] : null;
// }















//"https://leetcode.com/problems/two-sum/submissions/1387748529/"

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === 'log_submission') {
//     console.log('Received submission in background script:', request);

//     // Extract the question slug from the URL
//     const questionSlug = getQuestionSlug(request.link);

//     if (!questionSlug) {
//       console.error('Invalid URL format:', request.link);
//       sendResponse({ success: false, error: 'Invalid URL format' });
//       return;
//     }

//     // Retrieve the list of logged question slugs from local storage
//     chrome.storage.local.get(['loggedQuestions'], function(result) {
//       let loggedQuestions = result.loggedQuestions || [];

//       // Check if the question slug has already been logged
//       if (loggedQuestions.includes(questionSlug)) {
//         console.log('Question already logged:', questionSlug);
//         sendResponse({ success: true, slug: questionSlug, alreadyLogged: true });
//         return;
//       }

//       // Log the submission to the backend server
//       fetch('http://localhost:3000/log-submission', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           title: request.title,  // Pass the slug instead of the title
//           link: request.link,
//           status: request.status
//         })
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Successfully logged:', data);

//         // Add the question slug to the list and store it
//         loggedQuestions.push(questionSlug);
//         chrome.storage.local.set({ loggedQuestions: loggedQuestions });

//         // Respond back with success and the question slug
//         sendResponse({ success: true, slug: questionSlug, alreadyLogged: false });
//       })
//       .catch(error => {
//         console.error('Error logging submission:', error);
//         sendResponse({ success: false, error: 'Failed to log submission' });
//       });

//       // Need to return true to indicate async response
//       return true;
//     });
//   }
//   return true; // Indicates response will be sent asynchronously
// });

// // Function to extract the question slug from the URL
// function getQuestionSlug(url) {
//   const match = url.match(/problems\/([^\/]+)\//);
//   return match ? match[1] : null;
// }
