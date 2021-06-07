let Min = {

'first name':'Min',
'last name':'Tan',
address:'WA',
age:30
};

Min.address="NZ";
Min["first name"]="Miean";
let Min2 = Object.assign({}, Min);
Min2["first name"]="Min2";



console.log(Min, Min2);