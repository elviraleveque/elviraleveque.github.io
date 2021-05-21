
function add() {
   let formIds = ['name', 'surname', 'prefix', 'tel'];

    let values = {}
    for (let ids of formIds) {
        values[ids] = document.getElementById(ids).value;
    }
    console.log(values)

    let nContact = new Contact (values.name, values.surname, values.prefix, values.tel)
}