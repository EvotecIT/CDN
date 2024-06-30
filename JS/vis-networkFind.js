// Example usage:
// setupSearch('searchInput', 'searchButton', true); // Enables typing search and button click
// setupSearch('searchInput', null, true); // Enables typing search only
// setupSearch('searchInput', 'searchButton'); // Enables button click only
// setupSearch('searchInput', null, true, 5); // Enables typing search only, with minimum 5 characters

function updateVisibility(searchQuery) {
    var filteredNodes = nodes.get({
        filter: function (item) {
            return item.label.toLowerCase().includes(searchQuery);
        }
    });
    var filteredEdges = edges.get({
        filter: function (item) {
            return filteredNodes.some(node => node.id === item.from || node.id === item.to);
        }
    });

    nodes.get().forEach(node => {
        nodes.update({ id: node.id, hidden: !filteredNodes.some(fNode => fNode.id === node.id) });
    });
    edges.get().forEach(edge => {
        edges.update({ id: edge.id, hidden: !filteredEdges.some(fEdge => fEdge.id === edge.id) });
    });
}

function setupSearch(inputId, buttonId = null, enableTypingSearch = false, minChars = 3) {
    if (enableTypingSearch) {
        document.getElementById(inputId).addEventListener('input', function () {
            if (this.value.length >= minChars) {
                updateVisibility(this.value.toLowerCase());
            } else {
                // Optionally, reset visibility when below minChars
                updateVisibility('');
            }
        });
    }

    if (buttonId) {
        document.getElementById(buttonId).addEventListener('click', function () {
            var searchQuery = document.getElementById(inputId).value;
            if (searchQuery.length >= minChars) {
                updateVisibility(searchQuery.toLowerCase());
            }
        });
    }
}