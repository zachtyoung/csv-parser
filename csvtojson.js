
const csvFilePath='./Parser/miniSdn.csv'
const csv=require('csvtojson')
const FileSystem = require("fs");
const db = require('./data/helpers/model');
csv({
    noheader: true,
    headers: ['Ent_num','SDN_Name','SDN_Type','Program','Title','Call_Sign','Vess_type','Tonnage','GRT','Vess_flag','Vess_owner','Remarks']
})

.fromFile(csvFilePath)
.on('done',(error)=>{
    console.log('done')
})
.then((jsonObj)=>{
    jsonObj.forEach( el =>{
        if(el.SDN_Type == 'vessel'){
            db.insert5({'text_type':"vessel"})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        } else if(el.SDN_Type == 'individual'){
            db.insert3({'test_type':"individual"})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        } else if(el.SDN_Type == 'aircraft'){
            db.insert4({'test_type':"aircraft"})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }else{
            db.insert6({'text_type':"unknown"})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }

    })
})

 