const editView = (function() {

    const editDOMElements = {
        form: document.querySelector('#form'),
        id: document.querySelector('#number'),
        date: document.querySelector('#date'),
        product: document.querySelector('#product'),
        name: document.querySelector('#name'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        status: document.querySelector('#status'),
    }

    function getEditDOMElements() {
        return editDOMElements;
    }

    function fillEditFormByElementId(data) {
        editDOMElements.id.textContent = data.id;
        editDOMElements.date.textContent = data.date + ' ' + data.time;
        editDOMElements.product.value = data.product;
        editDOMElements.name.value = data.name;
        editDOMElements.email.value = data.email;
        editDOMElements.phone.value = data.phone;
        editDOMElements.status.value = data.status;
    }

    function getFormData() {
        return {
            name: editDOMElements.name.value,
            product: editDOMElements.product.value,
            email: editDOMElements.email.value,
            phone: editDOMElements.phone.value,
            status: editDOMElements.status.value,
        }
    }

    return {
        getFormData: getFormData,
        fillEditFormByElementId: fillEditFormByElementId,
        getEditDOMElements: getEditDOMElements,
    }

})()