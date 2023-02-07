//5.Optional Parameter
function showDetail(id:number,name:string,email:string,staff?:string,greeting:string="Hello"){
    if(staff != undefined){
        console.log(`${greeting},Name:${name},${email},Staff:${staff}`)
    }
    console.log(`${greeting},Name:${name},${email}`)
}

showDetail(101,"Chananthon Thanomnoen","mark@gmail.com")
showDetail(102,"Chinnawat Rattanamun","Chin@gmail.com")
showDetail(103,"Chinwat Rattanamun","Chinw@gmail.com","BORAI DURIAN CEO")