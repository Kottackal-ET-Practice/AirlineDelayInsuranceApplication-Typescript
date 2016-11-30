    'use strict';
    //Function for validation user inputs
    var datetimeValidation = require('./persons-date-time');
    exports.userInputValidation = function(source,destination,persons,date,time,res) {
        //Define variable for function return
        var check;
        //Verify Null Values
        if (source == null || destination == null || persons == null || date == null || time == null) {

            console.log('Fill all Columns');
            res.json({
                success: false,
                message: 'Fill all Columns',

            });

        } else if (source && destination && persons && date && time) {

            //Checks Source & Destination
             if ((source == 'Trivandrum' || source == 'Banglore' || source == 'London' || source == 'Zurich') && (destination == 'Mumbai' || destination == 'Delhi' || destination == 'Kochi' || destination == 'Chennai' || destination == 'Genneva' || destination == 'Frankfurt')) {

                 //Checks  source==Trivandrum
                 if (source == 'Trivandrum') {
                    //Checks Destination for Source=Trivandrum
                    if (!((destination == 'Mumbai') || (destination == 'Delhi'))) {

                        console.log('Destination not Valid for Trivandrum');
                        res.json({
                            success: false,
                            message: 'Destination not valid for Trivandrum',

                        });

                    } else {
                        //Function call for verifying persons,date,time
                        check = datetimeValidation.validationPersonsDateTime(persons, date, time,res); 
                    }
                }
                //Checks source==Banglore
                else if (source == 'Banglore') {
                    if (!((destination == 'Kochi') || (destination == 'Chennai'))) {

                        //Checks Destination for Source=Banglore
                        console.log('Destination not Valid for Banglore');
                        res.json({
                            success: false,
                            message: 'Destination not Valid for Banglore',

                        });

                    } else {
                         //Function call for verifying persons,date,time
                        check = datetimeValidation.validationPersonsDateTime(persons, date, time,res);
                    }

                }
                //Checks source=London
                else if (source == 'London') {
                    //Checks Destination Source=London
                    if (!(destination == 'Genneva')) {

                        console.log('Destination not Valid for Genneva');
                        res.json({
                            success: false,
                            message: 'Destination not Valid for Genneva',

                        });

                    } else {
                         //Function call for verifying persons,date,time
                        check = datetimeValidation.validationPersonsDateTime(persons, date, time,res);
                    }

                }
                //Checks Source=Zurich
                else if (source == 'Zurich') {
                    //Checks destination for Source=Zurich
                    if (!(destination == 'Frankfurt')) {

                        console.log('Destination not Valid for Frankfurt');
                        res.json({
                            success: false,
                            message: 'Destination not Valid for Frankfurt',

                        });

                    } else {
                        //Function call for verifying persons,date,time
                        check = datetimeValidation.validationPersonsDateTime(persons, date, time,res); 
                    }

                }

            }
            //Verify Source and Destination
            else {
                console.log('Source and Destination is not as per requirement');
                res.json({
                    success: false,
                    message: 'Source and Destination is not as per requirement',

                });
            }
        }
        return check;
    }