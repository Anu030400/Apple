//map
//reduce
//filter

//map - make changes for every element inside array, all arithmetic operators

//syntax -> variable name.map((value,index,accumulator)=>)

    const a = [10,20,30,40,50,60]
    const b = a.map((val,ind,acc)=>val+5) //values
    const c = a.map((val,ind,acc)=>ind*5) //index
    const d = a.map((val,ind,acc)=>acc*5) //array
    console.log(b);
    console.log(c);
    console.log(d);


//filter - all comparison operator

//syntax -> variable name.filter((value,index,accumulator)=>)

    const e = [10,20,30,40,50,456,34,546,765,89,34,4,33,3,5,2,22,11,56,76] 
    let f = e.filter((x,y,z)=>x<=50) //x-val, y-ind, z-acc (any variable name can be used for x,y,z)
    let g = e.filter((x,y,z)=>y>10)
    let h = e.filter((x,y,z)=>z<=50)
    console.log(f);
    console.log(g);
    console.log(h);
    

//reduce - addition, subtraction, multiplication can be used

//syntax-> variable name.reduce((accumulator,acctualarray)=>)

    let aa = [10,20,30,40]
    let bb = aa.reduce((a,b)=>a+b) //a-accumulator, b-actualarray
    let cc = aa.reduce((a,b)=>a-b)
    let dd = aa.reduce((a,b)=>a*b)
    console.log(bb);
    console.log(cc);
    console.log(dd);
