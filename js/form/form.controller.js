const formController = (function(formView, model) {

    const formDOMElements = formView.getFormDOMElements();

    testData.postRandomDataForm(); 

    function addEventListeners() {
        formDOMElements.inputForm.addEventListener('submit', sendDataToLocalStorage)
    }

    function sendDataToLocalStorage(e) {
        e.preventDefault();
        let formValue = formView.getFormValues();
        model.postDataToLocalStorage(formValue);
        testData.postRandomDataForm(); 
    }

    return {
        init: function () {
            addEventListeners();
        },
    }

})(formView, model)

formController.init()