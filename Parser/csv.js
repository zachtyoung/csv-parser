var fs = require('fs');
import * as csv from '@fast-csv/parse';
var csv = require('fast-csv');

let csvStream = csv.fromPath('')
    .on("data", function(record){
        csvStream.pause();

        if(counter < 100)
        {
            let policyID = record.policyID;
            let statecode = record.statecode;
            let county = record.county;
            let point_latitude = record.point_latitude;
            let point_longitude = record.point_longitude;
            let line = record.line;
            let construction = record.construction;
            ++counter;
        }

        csvStream.resume();

    }).on("end", function(){
        console.log("Job is done!");
    }).on("error", function(err){
        console.log(err);
    });