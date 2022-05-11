(function () {
    // your page initialization code here
    // the DOM will be available here
    document.getElementById("btnAdd").addEventListener("click", myFunction);
    const certificateGroup = document.getElementById("certificateGroup")
    let currentId = 1

    function myFunction() {


        currentId++;
        let divAdd = document.createElement('div');
        divAdd.setAttribute('class', 'form-group row');
        let label = document.createElement('label');
        label.setAttribute('for', "txt0" + currentId);
        label.setAttribute('class', 'col-sm-2 col-form-label');
        label.innerHTML = "Bằng cấp"

        let divCon = document.createElement('div');
        divCon.setAttribute('class', 'col-sm-10');
        let newField = document.createElement('input');
        newField.setAttribute('class', 'form-control');

        newField.setAttribute('type', 'text');
        newField.setAttribute('id', "txt0" + currentId)
        newField.setAttribute('siz', 50);
        newField.setAttribute('placeholder', 'nhap bang cap');



        divCon.appendChild(newField);
        divAdd.appendChild(label);
        divAdd.appendChild(divCon);
        certificateGroup.appendChild(divAdd);



    }

})();