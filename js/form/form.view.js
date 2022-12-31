const formView = (function(){
    const formDOMElements = {
        inputForm: document.querySelector('#form'),
        inputName: document.querySelector('#name'),
        inputPhone: document.querySelector('#phone'),
        inputEmail: document.querySelector('#email'),
        inputProduct: document.querySelector('#product'),
    }

    function getFormDOMElements() {
        return formDOMElements;
    }

    function getFormValues() {
        return {
            name: formDOMElements.inputName.value,
            phone: formDOMElements.inputPhone.value,
            email: formDOMElements.inputEmail.value,
            product: formDOMElements.inputProduct.value,
        }
    }

    return {
        getFormValues: getFormValues,
        getFormDOMElements: getFormDOMElements,
    }

})()