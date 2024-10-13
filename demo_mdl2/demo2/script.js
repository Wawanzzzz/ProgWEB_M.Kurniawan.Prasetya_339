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

    // Membuat tombol edit
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = '✏️';
    editBtn.onclick = function() {
        // Mengubah teks menjadi input untuk diedit
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = taskSpan.textContent;
        listItem.insertBefore(editInput, taskSpan);
        listItem.removeChild(taskSpan);

        // Mengubah tombol edit menjadi tombol simpan
        editBtn.textContent = '💾';
        editBtn.onclick = function() {
            // Menyimpan perubahan
            const newValue = editInput.value.trim();
            if (newValue === '') {
                alert('Task cannot be empty.');
                return;
            }
            taskSpan.textContent = newValue;
            listItem.insertBefore(taskSpan, editInput);
            listItem.removeChild(editInput);

            // Mengembalikan tombol simpan menjadi tombol edit
            editBtn.textContent = '✏️';
            editBtn.onclick = editTask;
        };
    };

    // Membuat tombol hapus
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = function() {
        todoList.removeChild(listItem);
    };

    // Menyusun item, tombol edit, dan tombol hapus ke dalam list
    listItem.appendChild(taskSpan);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    // Menambahkan item ke dalam daftar
    todoList.appendChild(listItem);

    // Mengosongkan input setelah menambahkan tugas
    input.value = '';
}
