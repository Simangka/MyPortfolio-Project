let nameInput = document.querySelector('#Nameinput')
let semInput = document.querySelector("#SemInput")
let workInput = document.querySelector("#WorkInput")
let addButton = document.querySelector(".add")
let tableBody = document.querySelector('.tBody');

addButton.addEventListener( 'click', () => {


    if(nameInput.value.length < 1 || semInput.value.length < 1 || workInput.value.length < 1 ){
        document.querySelector('.error').style.opacity = '1';
        setTimeout(()=>{
            document.querySelector('.error').style.opacity = '0';
        }, 2000);
     
    }
    else{


        let myTr = document.createElement('tr');
        let myTd1 = document.createElement('td');
        let myTd2 = document.createElement('td');
        let myTd3 = document.createElement('td');
        let myTd4 = document.createElement('td');
        
        myTd1.textContent = tableBody.childElementCount + 1;
        myTd2.textContent = nameInput.value;
        myTd3.textContent = semInput.value;
        myTd4.textContent = workInput.value;
        nameInput.value = '';
        semInput.value = '';
        workInput.value = '';
        
        
        
        myTr.append(myTd1, myTd2, myTd3, myTd4)
        tableBody.append(myTr);



    }

})


