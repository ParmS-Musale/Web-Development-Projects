document.getElementById('searchInput').addEventListener('input', function() {
    var clearButton = document.getElementById('clearButton');
    if (this.value.trim()) {
        clearButton.style.display = 'inline';
    } else {
        clearButton.style.display = 'none';
    }
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    var searchInput = document.getElementById('searchInput');
    if (!searchInput.value.trim()) {
        event.preventDefault();
    }
});

function clearInput() {
    var searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    searchInput.focus();
    document.getElementById('clearButton').style.display = 'none';
}
