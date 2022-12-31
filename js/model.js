const model = (function() {

    let requests = (localStorage.getItem('requests')) ? JSON.parse(localStorage.getItem('requests')) : [];


    // ПРОСТО ДЛЯ ТЕСТИВРОНИЯ ФИЛЬТРОВ, ПОТОМ МОЖНО УДАЛИТЬ
    function randomStatus() {
        const statuses = ['new', 'inwork', 'complete']
        let randomValue = Math.floor(Math.random() * statuses.length);
        return statuses[randomValue];
    }

    function postDataToLocalStorage(data) {
        let request = {
            id: requests.length,
            ...data,
            status: randomStatus(), // ПРОСТО ДЛЯ ТЕСТИВРОНИЯ ФИЛЬТРОВ, ПОТОМ МОЖНО УДАЛИТЬ
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),


        }
        requests.push(request);
        localStorage.setItem('requests', JSON.stringify(requests))
    }

    function getDataFromLocalStorageById(id) {
        return requests.find(request => request.id == id)
    }

    function updateLocalStorage(form, id) {
        let request = getDataFromLocalStorageById(id);
        request.name = form.name;
        request.product = form.product;
        request.email = form.email;
        request.phone = form.phone;
        request.status = form.status;
        localStorage.setItem('requests', JSON.stringify(requests))
        window.location = "table.html";
    }

    const filter = {
        status: 'all',
        products: 'all'
    }

    function changeFilter(prop, value) {
        filter[prop] = value;
        return filter;
    }

    function filterData(filter) {

        let filteredData;

        if (filter.products != 'all') {
            filteredData = requests.filter(request => request.product == filter.products);   
        } else {
            filteredData = [...requests]
        }

        if (filter.status != 'all') {
            filteredData = filteredData.filter(request => request.status == filter.status);   
        }

        return filteredData;
    }
    

    function getRequests() {
        return requests
    }

    return {
        filterData: filterData,
        updateLocalStorage: updateLocalStorage,
        getDataFromLocalStorageById: getDataFromLocalStorageById,
        getRequests:  getRequests,
        postDataToLocalStorage: postDataToLocalStorage,
        changeFilter: changeFilter,
    }

})()