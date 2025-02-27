let objArr=[
    {
        name:'John',
        age: 23,
        gender: 'male'
    },
    {
        name: 'Ayla',
        age: 20,
        gender: 'female'
    },
    {
        name: 'Sam',
        age: 24,
        gender: 'male'
    }
];
function print_data(data){
    console.log(data.name);
}
let new_arr = objArr.map(print_data);
console.log(new_arr);