const testData = (function () {
    function TestData(name, phone, email, product) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }

    let testItems = [];

    testItems.push(
        new TestData(
            "Карбаинова Ярослава",
            "+7 (944) 818-53-80",
            "yaroslava.karbainova@ya.ru",
            "course-html"
        ),

        new TestData("Богун Феликс", "+7 (990) 332-65-26", "feliks1991@rambler.ru", "course-js"),

        new TestData("Каипова Анна", "+7 (949) 457-51-75", "anna4843@gmail.com", "course-vue"),

        new TestData(
            "Шихранова Надежда",
            "+7 (933) 194-39-92",
            "nadejda01091966@hotmail.com",
            "course-php"
        ),

        new TestData(
            "Косыгин Юрий",
            "+7 (963) 905-95-66",
            "yuriy14041978@hotmail.com",
            "course-wordpress"
        ),

        new TestData("Куроптев Антон", "+7 (923) 256-74-40", "anton20@rambler.ru", "course-html"),

        new TestData("Едемский Юрин", "+7 (911) 230-13-56", "yurin1967@ya.ru", "course-js"),

        new TestData(
            "Бесфамильнов Леонтний",
            "+7 (909) 227-28-76",
            "levaleva1998@ya.ru",
            "course-vue"
        ),

        new TestData("Батрутдинов Марк", "+7 (935) 743-67-38", "mark91@outlook.com", "course-php"),

        new TestData(
            "Курчин Георгий",
            "+7 (979) 600-42-44",
            "georgiy70@outlook.com",
            "course-wordpress"
        )
    );

    function getRandomItem() {
        return testItems[Math.floor(Math.random() * testItems.length)];
    }

    function postRandomDataForm() {
        const randomElem = getRandomItem();
        const form = document.querySelector("#form");
        form.querySelector("#name").value = randomElem.name;
        form.querySelector("#phone").value = randomElem.phone;
        form.querySelector("#email").value = randomElem.email;
        form.querySelector("#product").value = randomElem.product;
    }

    return {
        postRandomDataForm: postRandomDataForm,
    };
})();
