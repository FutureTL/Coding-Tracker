document.addEventListener('DOMContentLoaded', function () {
  // Attach click listener to the button
  const viewQuestionsBtn = document.getElementById('view-questions-btn');
  
  viewQuestionsBtn.addEventListener('click', function() {
      // Open the questions.html in a new tab
      chrome.tabs.create({ url: chrome.runtime.getURL('questions.html') });
  });
});









// document.addEventListener('DOMContentLoaded', function () {
//   // Fetch the logged questions from Chrome's local storage
//   chrome.storage.local.get(['loggedQuestions'], function(result) {
//       let questionList = document.getElementById('questionList');
//       const loggedQuestions = result.loggedQuestions || [];

//       loggedQuestions.forEach(function (slug) {
//           let listItem = document.createElement('li');
//           listItem.textContent = `${slug}`;

//           let link = document.createElement('a');
//           link.href = 'https://leetcode.com/problems/' + slug;
//           link.textContent = ' View';
//           link.target = '_blank';
          
//           listItem.appendChild(link);
//           questionList.appendChild(listItem);
//       });
//   });
// });





// document.addEventListener('DOMContentLoaded', function () {
//   fetch('http://localhost:3000/get-logs')
//     .then(response => response.json())
//     .then(data => {
//       let questionList = document.getElementById('questionList');
//       data.forEach(function (question) {
//         let listItem = document.createElement('li');
//         listItem.textContent = `${question.title} - ${question.status}`;
        
//         let link = document.createElement('a');
//         link.href = question.link;
//         link.textContent = ' View';
//         link.target = '_blank';
        
//         listItem.appendChild(link);
//         questionList.appendChild(listItem);
//       });
//     })
//     .catch(error => console.error('Error fetching logs:', error));
// });

  

// document.addEventListener('DOMContentLoaded', function () {
//   fetch('http://localhost:3000/get-logs')
//     .then(response => response.json())
//     .then(data => {
//       let questionList = document.getElementById('questionList');
      
//       // Clear the existing list to prevent duplicates
//      // questionList.innerHTML = '';

//       data.forEach(function (question) {
//         let listItem = document.createElement('li');

//         // Use the slug instead of the title
//         listItem.textContent = `${question.title} - ${question.status}`;

//         let link = document.createElement('a');
//         link.href = question.link;
//         link.textContent = ' View';
//         link.target = '_blank';

//         listItem.appendChild(link);
//         questionList.appendChild(listItem);
//       });
//     })
//     .catch(error => console.error('Error fetching logs:', error));
// });






  
// document.addEventListener('DOMContentLoaded', function () {
//   let testData = [
//       { title: "Test Problem 1", status: "Accepted", link: "https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array" },
//       { title: "Test Problem 2", status: "Accepted", link: "https://leetcode.com/test2" }
//   ];

//   let questionList = document.getElementById('questionList');
//   testData.forEach(function (question) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${question.title} - ${question.status}`;
//       let link = document.createElement('a');
//       link.href = question.link;
//       link.textContent = ' View';
//       link.target = '_blank';
//       listItem.appendChild(link);
//       questionList.appendChild(listItem);
//   });
// });
