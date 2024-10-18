document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.sendMessage({ action: 'get_logs' }, function(response) {
        const questionList = document.getElementById('questionList');
        const loggedQuestions = response.loggedQuestions || [];
        
        questionList.innerHTML = ''; // Clear any existing list items
        
        loggedQuestions.forEach((slug) => {
            // Create list item for each question
            let listItem = document.createElement('li');
            listItem.className = 'list-item';

            // Create text content for the question
            let questionText = document.createElement('span');
            questionText.textContent = slug;
            questionText.className = 'question-text';

            // Create a link to the question
            let link = document.createElement('a');
            link.href = 'https://leetcode.com/problems/' + slug;
            link.textContent = 'View';
            link.className = 'view-link';

            // Create delete button
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            deleteButton.setAttribute('data-question', slug);

            // Append elements to list item
            listItem.appendChild(questionText);
            listItem.appendChild(link);
            listItem.appendChild(deleteButton);

            // Append list item to the list
            questionList.appendChild(listItem);

            // Attach event listener to delete button
            deleteButton.addEventListener('click', function () {
                const question = this.getAttribute('data-question');
                chrome.storage.local.get(['loggedQuestions'], function(result) {
                    let loggedQuestions = result.loggedQuestions || [];
                    loggedQuestions = loggedQuestions.filter(q => q !== question);
                    chrome.storage.local.set({ loggedQuestions: loggedQuestions }, function() {
                        // Remove the list item from the UI
                        questionList.removeChild(listItem);
                    });
                });
            });
        });
    });
});