/*
DESAFIO FETCH
Consumir la api fake de https://jsonplaceholder.typicode.com/ implementando API Fetch y pintar en nuestro html (utilizando bootstrap vía cdn para los estilos) una tabla de 10 usuarios y debe contener las propiedades en sus columnas de Id, name, username, email y address-street.
*/ 
const datosUsuarios = async()=>{
    const datos = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await datos.json();
    printUser(res);
}
datosUsuarios();

function printUser(res){
    let users = res;
    const table = document.getElementById('dataUsersRows');
    users.forEach((element)=>{
        const {id,name,username,email,address} = element;
        const street = address.street;

        let tr = document.createElement('tr');
        let th = document.createElement('th');

        let tdName= document.createElement('td');
        let tdUsername= document.createElement('td');
        let tdEmail= document.createElement('td');
        let tdStreet= document.createElement('td');

        tr.classList.add('table-active');
        th.textContent=id;
        tdName.textContent = name;
        tdUsername.textContent = username;
        tdEmail.textContent = email;
        tdStreet.textContent = street;

        tr.append(th,tdName,tdUsername,tdEmail,tdStreet);
        
        table.appendChild(tr)
    })

}

