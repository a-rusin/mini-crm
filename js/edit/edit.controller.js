const editController = (function(editView, model) {

    const editDOMElements = editView.getEditDOMElements();

    function addEventListeners() {
        editDOMElements.form.addEventListener('submit', sendDataToLocalStorage)
    }

    function sendDataToLocalStorage(e) {
        e.preventDefault();
        let formData = editView.getFormData();
        let id = getRequestId();
        model.updateLocalStorage(formData, id)
    }

    function getRequestId() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        return id;
    }

    let elemData = model.getDataFromLocalStorageById(getRequestId());

    editView.fillEditFormByElementId(elemData);

    return {
        init: function() {
            addEventListeners();
        }
    }

})(editView, model)

editController.init()