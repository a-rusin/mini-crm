const tableView = (function() {
    const tableDOMElements = {
        tableBody: document.querySelector('#tbody'),
        statusBar: document.querySelectorAll('[data-value]'),
        badgeNew: document.querySelector('#badge-new'),
        productSelect: document.querySelector('#productSelect')
    }

    const prodcutsNames = {
        'course-html' : 'Курс по верстке',
        'course-js' : 'Курс по JavaScript',
        'course-vue' : 'Курс по VUE',
        'course-php' : 'Курс по PHP',
        'course-wordpress' : 'Курс по WordPress',
    }

    const statusName = {
        'new' : '<div class="badge badge-pill badge-danger">Новый</div>',
        'inwork' : '<div class="badge badge-pill badge-warning">В работе</div>',
        'complete' : '<div class="badge badge-pill badge-success">Завершенный</div>'
    }

    function getTableDOMElements() {
        return tableDOMElements;
    }

    function renderData(data) {
        tableDOMElements.tableBody.innerHTML = "";
        data.forEach((item) => {
            const htmlTemplateTableItem = `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.date} <span class = 'blue'>${item.time}</span></td>
                <td>${prodcutsNames[item.product]}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>
                ${statusName[item.status]}
                </td>
                <td>
                    <a href="edit.html?id=${item.id}">Редактировать</a>
                </td>
            </tr>
            `;
            tableDOMElements.tableBody.insertAdjacentHTML("afterbegin", htmlTemplateTableItem);
        });
    }

    function updateActiveClass(value) {
        tableDOMElements.statusBar.forEach(item => {
            item.classList.remove('active');
        })

        tableDOMElements.statusBar.forEach(item => {
            if (item.getAttribute('data-value') == value) {
                item.classList.add('active')
            }
        })
        return value;
    }

    function updateBadgeNew(value) {
        tableDOMElements.badgeNew.textContent = value;
    }

    return {
        updateBadgeNew: updateBadgeNew,
        updateActiveClass: updateActiveClass,
        getTableDOMElements: getTableDOMElements,
        renderData: renderData,
    }
})()