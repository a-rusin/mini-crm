const tableController = (function(tableView, model) {

    const tableDOMElements = tableView.getTableDOMElements();

    function addEventListeners() {
        tableDOMElements.statusBar.forEach(item => {
            item.addEventListener('click', filterByStatus)
        })

        tableDOMElements.productSelect.addEventListener('change', filterByProduct)
    }

    function filterByStatus(e) {
        e.preventDefault();
        let filterValue = model.changeFilter('status', this.getAttribute('data-value'));
        let filterData = model.filterData(filterValue);
        tableView.updateActiveClass(this.getAttribute('data-value'));
        tableView.renderData(filterData)
    }

    function filterByProduct(e) {
        e.preventDefault();
        let filterValue = model.changeFilter('products', this.value);
        let filterData = model.filterData(filterValue);
        tableView.renderData(filterData)
    }

    let requests = model.getRequests();

    tableView.renderData(requests);

    return {
        init: function() {
            addEventListeners();

            let filterData = model.filterData({
                status: 'all',
                products: 'all'
            });
            tableView.updateBadgeNew(filterData.length);
        }
    }

})(tableView, model)

tableController.init()