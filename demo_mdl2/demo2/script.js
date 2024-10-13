function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const todoList = document.getElementById('todo-list');

    // Membuat elemen list baru
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // Menambahkan teks tugas
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Membuat tombol hapus
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = function() {
        todoList.removeChild(listItem);
    };

    // Menyusun item dan tombol hapus ke dalam list
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // Menambahkan item ke dalam daftar
    todoList.appendChild(listItem);

    // Mengosongkan input setelah menambahkan tugas
    input.value = '';
}
