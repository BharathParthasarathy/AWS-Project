// Show Add Workout Form
function showAddWorkoutForm() {
    document.getElementById('addWorkoutForm').style.display = 'flex';
}

// Hide Add Workout Form
function hideAddWorkoutForm() {
    document.getElementById('addWorkoutForm').style.display = 'none';
}

// Add New Workout
function addNewWorkout() {
    const imageUrl = document.getElementById('workoutImage').value;
    const workoutName = document.getElementById('workoutName').value;
    const workoutLink = document.getElementById('workoutLink').value;

    if (imageUrl && workoutName && workoutLink) {
        const workoutContainer = document.querySelector('.workout-container');
        const workoutPost = document.createElement('div');
        workoutPost.className = 'workout-post';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Workout Image';
        
        const p = document.createElement('p');
        p.textContent = workoutName;
        
        const a = document.createElement('a');
        a.href = workoutLink;
        a.target = '_blank';
        a.textContent = 'Watch on YouTube';
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deletePost(deleteButton);
        };
        
        workoutPost.appendChild(img);
        workoutPost.appendChild(p);
        workoutPost.appendChild(a);
        workoutPost.appendChild(deleteButton);
        
        workoutContainer.insertBefore(workoutPost, workoutContainer.querySelector('.add-workout'));

        hideAddWorkoutForm();
        document.getElementById('workoutImage').value = '';
        document.getElementById('workoutName').value = '';
        document.getElementById('workoutLink').value = '';
    } else {
        alert('Please fill in all fields');
    }
}

// Delete Post
function deletePost(element) {
    element.parentElement.remove();
}
