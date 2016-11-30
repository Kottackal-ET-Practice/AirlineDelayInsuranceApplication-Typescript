// Whole-script strict mode syntax
'use strict';
var models = require('../models/weather');
var weatherCollection = require('./quote_controllers/weatherCollectionsCreation');
var accountCollection = require('./quote_controllers/account-collection-creation');
var timeConversion = require('./quote_controllers/validations/timeconversion');
var userinputValidation= require('./quote_controllers/validations/userinputvalidation');
var quoteGeneration = require('./quote_controllers/quote-generation');

exports.quoteCreate = function(req, res) {

    //Drop Collections
    models.Weather.collection.drop();
    models.Account.collection.drop();
    //Define the variables for input
    var source = req.body.source;
    var destination = req.body.destination;
    var persons = req.body.persons;
    var date = req.body.date;
    var time1 = req.body.time;
    //Assign value to variable 'time'
    var time= timeConversion.timeConversion(time1);
    //Assign value to variable 'check'
    var check = userinputValidation.userInputValidation(source,destination,persons,date,time,res); 
    //Define variable for data & time
    var datetime;

     //Function for time conversion
    //Function for user input validation

    //Sets 'check' flag as 1 for succesful validation using 'userInputValidation()'
    if (check == 1) {
        //Define for storing time range
        var timeperiod;
        //Finds Time range period for user input time
        if ((time >= '00:00:00') && (time < '03:00:00')) {
            timeperiod = '00:00:00';
        } else if ((time >= '03:00:00') && (time < '06:00:00')) {
            timeperiod = '03:00:00';
        } else if ((time >= '06:00:00') && (time < '09:00:00')) {
            timeperiod = '06:00:00';
        } else if ((time >= '09:00:00') && (time < '12:00:00')) {
            timeperiod = '09:00:00';
        } else if ((time >= '12:00:00') && (time < '15:00:00')) {
            timeperiod = '12:00:00';
        } else if ((time >= '15:00:00') && (time < '18:00:00')) {
            timeperiod = '15:00:00';
        } else if ((time >= '18:00:00') && (time < '21:00:00')) {
            timeperiod = '18:00:00';
        } else if ((time >= '21:00:00') && (time < '24:00:00')) {
            timeperiod = '21:00:00';
        }
        //Combine date and time
        datetime = date + ' ' + timeperiod;
        //Insert Documents into 'Weather' Collection
        weatherCollection.weatherCollectionCreation(destination);
        //Insert Documents into 'Account' Collection
        accountCollection.accountCollectionCreation('Trivandrum', 'Mumbai', 1000);
        accountCollection.accountCollectionCreation('Trivandrum', 'Delhi', 1500);
        accountCollection.accountCollectionCreation('Banglore', 'Kochi', 2500);
        accountCollection.accountCollectionCreation('Banglore', 'Chennai', 2000);
        accountCollection.accountCollectionCreation('London', 'Genneva', 5000);
        accountCollection.accountCollectionCreation('Zurich', 'Frankfurt', 6000);
        //Function for generating quote
        quoteGeneration.quoteGeneration(datetime,source,destination,persons,res);   
    }
 
};