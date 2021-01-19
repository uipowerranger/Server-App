/*
 * author: Shankar
 */

var moment = require("moment");
var base64ToImage = require("base64-to-image");
const ip = require("ip");
let ipAddress = ip.address();
// ipAddress = ipAddress.replace(/\./g, "_");

exports.getCurrentUTCTime = function () {
  var now = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  return now;
};

exports.getCurrentISTTime = function () {
  var now = moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
  return now;
};

exports.getOTPHeartBeatCode = function () {
  var now = moment().tz("Asia/Kolkata").format("DDHHmm");
  return now;
};

exports.getCurrentDate = function () {
  var now = moment().utc().format("YYYY-MM-DD");
  return now;
};

exports.getCurrentMonth = function () {
  var now = moment().utc().format("MM");
  return now;
};

exports.getCurrentYear = function () {
  var now = moment().utc().format("YYYY");
  return now;
};

exports.getCurrentUTCTimestamp = function () {
  var now = moment().utc().valueOf();
  return now;
};

exports.getStartDayOfMonth = function () {
  var value = moment().startOf("month").format("YYYY-MM-DD");
  return value;
};

exports.getStartDayOfPrevMonth = function () {
  var value = moment()
    .startOf("month")
    .subtract(1, "month")
    .format("YYYY-MM-DD");
  return value;
};

exports.getStartDayOfWeek = function () {
  var value = moment().startOf("week").add(1, "days").format("YYYY-MM-DD");
  return value;
};

exports.getStartDateTimeOfWeek = function () {
  var value = moment()
    .startOf("week")
    .add(1, "days")
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.getEndDayOfWeek = function () {
  var value = moment().endOf("week").format("YYYY-MM-DD");
  return value;
};

exports.substractMinutes = function (datetime, minutes) {
  // console.log("substractMinutes datetime :: "+datetime +" "+minutes);
  /* if(Number(minutes) < 0){
            minutes = Number(minutes) * -1;
        } */
  // console.log("substractMinutes datetime :: "+datetime +" "+minutes);
  var value = moment(datetime)
    .subtract(minutes, "minutes")
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.getDayOfWeek = function (datetime) {
  let arr = new Array();
  arr.push("SUNDAY");
  arr.push("MONDAY");
  arr.push("TUESDAY");
  arr.push("WEDNESDAY");
  arr.push("THURSDAY");
  arr.push("FRIDAY");
  arr.push("SATURDAY");
  var value = arr[moment(datetime).weekday()];
  return value;
};

exports.getEndDateTimeOfWeek = function () {
  var value = moment()
    .endOf("week")
    .add(1, "days")
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.getStartDayOfPrevWeek = function () {
  var value = moment()
    .startOf("week")
    .add(1, "days")
    .subtract(7, "days")
    .format("YYYY-MM-DD");
  return value;
};

exports.getStartDateTimeOfMonth = function () {
  var value = moment().startOf("month").format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.getEndDateTimeOfMonth = function () {
  var value = moment().endOf("month").format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.getcurrentTime = function () {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var dateVal = date.getDate();
  var hours = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var dateTimeString =
    year + "-" + month + "-" + dateVal + " " + hours + ":" + min + ":" + sec;
  return dateTimeString;
};

exports.getcurrentTimeInMilliSecs = function () {
  var date = new Date();
  var year = date.getFullYear();

  var month = date.getMonth();
  month++;
  month = (month < 10 ? "0" : "") + month;

  var dateVal = date.getDate();
  var hours = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var ms = date.getMilliseconds();
  var dateTimeString = year + month + dateVal + "-" + hours + min + sec + ms;
  return dateTimeString;
};

// exports.getQueryString = function (callName, paramsArr) {
//     var queryString = "CALL " + callName + "(";
//     paramsArr.forEach(function (item, index) {
//         if (typeof item === 'string' || item instanceof String)
//             item = item.replace(/'/g, "\\'") // escaping single quote
//             .replace(/\"/g, '\\"') // escaping \" from UI
//             .replace(/\n/g, '\\n');
//         if (index === (paramsArr.length - 1))
//             queryString = queryString + "'" + item + "'";
//         else
//             queryString = queryString + "'" + item + "',";
//     }, this);
//     queryString = queryString + ");";
//     return queryString;

// };

exports.getRandomInt = function () {
  /*
         var min = 100000;
         var max = 999999;
         return Math.floor(Math.random() * (max - min)) + min;
         */
  return Math.floor(Math.random() * (999999 - 100000)) + 100000;
};

exports.getVerificationCode = function () {
  //var min = 1000;
  //var max = 9999;
  return Math.floor(Math.random() * (999999 - 100000)) + 100000;
};

exports.replaceDefaultNumber = function (value) {
  if (value === undefined || value === null || value === "" || isNaN(value))
    return Number(-1);
  else return Number(value);
};

exports.replaceZero = function (value) {
  if (value === undefined || value === null || value === "") {
    //console.log('inside null / undefined case of replaceZero')
    return Number(0);
  } else {
    var retValue = Number(value);
    if (isNaN(retValue)) {
      return 0;
    } else {
      return retValue;
    }
  }
};

exports.replaceOne = function (value) {
  if (
    value === undefined ||
    value === null ||
    value === "" ||
    value === 0 ||
    value === "0"
  )
    return Number(1);
  else return Number(value);
};

exports.replaceDefaultString = function (value) {
  if (value === undefined || value === null || value === "") return "";
  else return value;
};

exports.replaceDefaultJSON = function (value) {
  if (value === undefined || value === null || value === "") return "{}";
  else return value;
};

exports.replaceDefaultDatetime = function (value) {
  if (
    value === undefined ||
    value === null ||
    value === "" ||
    value === "1970-01-01" ||
    value === "1970-01-01 00:00:00"
  )
    return "1970-01-01 00:00:00";
  else return exports.getFormatedLogDatetime(value);
};

exports.replaceDefaultDate = function (value) {
  if (
    value === undefined ||
    value === null ||
    value === "" ||
    value === "1970-01-01" ||
    value === "1970-01-01 00:00:00"
  )
    return "1970-01-01";
  else return exports.getFormatedLogDate(value);
};

exports.getFormatedLogDatetime = function (timeString) {
  var value = moment(timeString, "DD-MM-YYYY").format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.getFormatedLogDate = function (timeString) {
  var value = moment(timeString).format("YYYY-MM-DD");
  return value;
};

exports.getFormatedSlashDate = function (timeString) {
  var value = moment(timeString).format("DD/MM/YYYY");
  return value;
};

exports.getFormatedLogTime = function (timeString) {
  var value = moment(timeString).format("HH:mm:ss");
  return value;
};

exports.getFormatedLogYear = function (timeString) {
  var value = moment(timeString).format("YYYY");
  return value;
};

exports.getFormatedLogMonth = function (timeString) {
  var value = moment(timeString).format("MM");
  return value;
};

exports.getTimestamp = function (timeString) {
  var value = moment(timeString, "DD-MM-YYYY").valueOf();
  return value;
};

exports.getDatetimewithAmPm = function (timeString) {
  var value = moment(timeString).format("YYYY-MM-DD hh:mm A");
  return value;
};

exports.getDatewithndrdth = function (timeString) {
  var value = moment(timeString).format("MMM Do");
  return value;
};

exports.addDays = function (timeString, days) {
  var value = moment(timeString, "YYYY-MM-DD HH:mm:ss")
    .add(days, "days")
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.addDaysToGivenDate = function (
  timeString,
  days,
  dateFormat = "YYYY-MM-DD"
) {
  var value = moment(timeString, dateFormat)
    .add(days, "days")
    .format("YYYY-MM-DD");
  return value;
};

exports.addUnitsToDateTime = function (timeString, days, unit) {
  var value = moment(timeString, "YYYY-MM-DD HH:mm:ss")
    .add(days, unit)
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.subtractDays = function (timeString, days) {
  var value = moment(timeString, "YYYY-MM-DD HH:mm:ss")
    .subtract(days, "days")
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.subtractUnitsFromDateTime = function (timeString, days, unit) {
  var value = moment(timeString, "YYYY-MM-DD HH:mm:ss")
    .subtract(days, unit)
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.differenceDatetimes = function (timeString1, timeString2) {
  var value = moment(timeString1, "YYYY-MM-DD HH:mm:ss").diff(
    moment(timeString2, "YYYY-MM-DD HH:mm:ss")
  );
  return value;
};

exports.differenceDatetime = function (timeString1, timeString2) {
  var value = moment(timeString1, "YYYY-MM-DD HH:mm:ss").diff(
    moment(timeString2, "YYYY-MM-DD HH:mm:ss")
  );
  return moment.duration(value)._data;
};

/*exports.getNoOfDays = function (timeString1, timeString2) {
        var value = moment(timeString1, "YYYY-MM-DD HH:mm:ss").diff(moment(timeString2, "YYYY-MM-DD HH:mm:ss"), 'days');
        return value;
    };*/

exports.getDayStartDatetime = function () {
  var value = moment()
    .startOf("day")
    .utcOffset("-05:30")
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.getDayEndDatetime = function () {
  var value = moment()
    .endOf("day")
    .utcOffset("-05:30")
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

/*exports.getGivenDayStartDatetime = function(timeString) {
        var value = moment(timeString, "YYYY-MM-DD HH:mm:ss").format('YYYY-MM-DD 00:00:00');
        return value;
    };
    
    exports.getGivenDayEndDatetime = function(timeString) {
        var value = moment(timeString, "YYYY-MM-DD HH:mm:ss").format('YYYY-MM-DD 23:59:59');
        return value;
    };*/

exports.getCurrentTimeHHmmIST = function () {
  var value = moment().tz("Asia/Kolkata").format("hh:mm A");
  return value;
};

exports.getCurrentTimeHHmmIST_ = function () {
  var value = moment().tz("Asia/Kolkata").format("HH:mm");
  return value;
};

exports.reminingTimeOfTheDay = function (startTime, endTime, currentTime) {
  let self = this;
  let startTimeTemp = startTime,
    endTimeTemp = endTime,
    currentTimeTemp = currentTime;

  // console.log("startTime :: "+startTime);
  // console.log("endTime :: "+endTime);
  // console.log("currentTime :: "+currentTime);

  let startTimeT = self.getCustomTimeHHmm(startTime);
  let endTimeT = self.getCustomTimeHHmm(endTime);
  let currentTimeT = self.getCustomTimeHHmm(currentTime);

  // console.log("startTime1 :: "+startTime);
  // console.log("endTime1 :: "+endTime);
  // console.log("currentTime1 :: "+currentTime);

  let startTimeT1 = Number(startTimeT[0] + startTimeT[1]);
  let endTimeT1 = Number(endTimeT[0] + endTimeT[1]);
  let currentTimeT1 = Number(currentTimeT[0] + currentTimeT[1]);

  // console.log("startTime2 :: "+startTimeT1);
  // console.log("endTime2 :: "+endTimeT1);
  // console.log("currentTime2 :: "+currentTimeT1);

  if (currentTimeT1 < endTimeT1 && currentTimeT1 < startTimeT1) {
    //console.log("reminingTimeOfTheDay :: 1")
    return self.getDiffAMPM(startTimeTemp, endTimeTemp);
  } else if (currentTimeT1 < endTimeT1 && currentTimeT1 >= startTimeT1) {
    //console.log("reminingTimeOfTheDay :: 2")
    return self.getDiffAMPM(currentTimeTemp, endTimeTemp);
  } else if (currentTimeT1 > endTimeT1 && currentTimeT1 >= startTimeT1) {
    //console.log("reminingTimeOfTheDay :: 3")
    return 0;
  }
};

exports.getCustomTimeHHmm = function (time) {
  //console.log("time :: ",time);
  if (time.indexOf("PM") >= 0) {
    time = time.split(" ")[0];
    time = time.split(":");
    time[0] = Number(time[0]) + 12;
    //console.log("time[0] "+time[0]);
  } else if (time.indexOf("AM") >= 0) {
    time = time.split(" ")[0];
    time = time.split(":");
    //console.log("time[0] "+time[0]);
  }
  return time;
};

exports.getCustomTimeHHmmNumber = function (time) {
  //console.log("time :: ",time);
  if (time.indexOf("PM") >= 0) {
    time = time.split(" ")[0];
    time = time.split(":");
    time[0] = Number(time[0]) + 12;
    //console.log("time[0] "+time[0]);
  } else if (time.indexOf("AM") >= 0) {
    time = time.split(" ")[0];
    time = time.split(":");
    //console.log("time[0] "+time[0]);
  }
  time = time.join("");
  return time;
};

exports.getCustomTimeHHmm24Hr = function (time) {
  // logger.info("time :: " + time);
  if (time.indexOf("PM") >= 0) {
    time = time.split(" ")[0];
    time = time.split(":");
    time[0] = Number(time[0]) + 12;
    //console.log("time[0] "+time[0]);
  } else if (time.indexOf("AM") >= 0) {
    time = time.split(" ")[0];
    time = time.split(":");
    //console.log("time[0] "+time[0]);
  }
  time = time.join(":") + ":00";
  return time;
};
exports.getDiffAMPM = function (startTime, endTime) {
  let self = this;
  let startTimeT = self.getCustomTimeHHmm(startTime);
  let endTimeT = self.getCustomTimeHHmm(endTime);

  // console.log(Number(endTime[0]) +" : "+Number(startTime[0]));
  let diff = (Number(endTimeT[0]) - Number(startTimeT[0])) * 60;
  //console.log("diff in minutes: "+diff);
  if (Number(startTimeT[1]) > Number(endTimeT[1]))
    diff = diff - (Number(startTimeT[1]) - Number(endTimeT[1]));
  else if (Number(startTimeT[1]) < Number(endTimeT[1]))
    diff = diff + (Number(endTimeT[1]) - Number(startTimeT[1]));

  //console.log("diff in minutes inculding minutes part : "+diff);
  return diff;
};

exports.getDueDate = function (minutes, businessDays, businessHours) {};

exports.getDayStartDatetimeIST = function () {
  var value = moment()
    .tz("Asia/Kolkata")
    .startOf("day")
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.getDayEndDatetimeIST = function () {
  var value = moment()
    .tz("Asia/Kolkata")
    .endOf("day")
    .format("YYYY-MM-DD HH:mm:ss");
  return value;
};

//getDay start time based on the TimeZone
exports.getDayStartDatetimeTZ = function (timezone) {
  timezone === "" ? (timezone = "Asia/Kolkata") : (timezone = timezone);
  var input = moment().tz(timezone).startOf("day");
  var format = "YYYY-MM-DD HH:mm:ss";
  var value = moment
    .tz(input, format, timezone)
    .utc()
    .format("YYYY-MM-DD HH:mm:ss");
  //console.log('TimeZone : ', timezone);
  //console.log('Start DateTime in given timezone: ', value);
  return value;
};

//getDay end time based on the TimeZone
exports.getDayEndDatetimeTZ = function (timezone) {
  timezone === "" ? (timezone = "Asia/Kolkata") : (timezone = timezone);
  var input = moment().tz(timezone).endOf("day");
  var format = "YYYY-MM-DD HH:mm:ss";
  var value = moment
    .tz(input, format, timezone)
    .utc()
    .format("YYYY-MM-DD HH:mm:ss");
  //console.log('TimeZone : ', timezone);
  //console.log('End DateTime in given timezone: ', value);
  return value;
};

exports.isDateBetween = function (startDt, endDt, compareDt) {
  var compareDate = moment(compareDt, "YYYY-MM-DD HH:mm:ss");
  var startDate = moment(startDt, "YYYY-MM-DD HH:mm:ss");
  var endDate = moment(endDt, "YYYY-MM-DD HH:mm:ss");

  var value = compareDate.isBetween(startDate, endDate);
  return value;
};

exports.getUniqueValuesOfArray = function (arr) {
  return Array.from(new Set(arr));
};

exports.getMinValueOfArray = function (arr) {
  return Math.min(arr);
};

exports.getMaxValueOfArray = function (arr) {
  return Math.max(arr);
};

exports.cleanPhoneNumber = function (phone) {
  if (typeof phone === "string") {
    phone.replace(" ", "");
    phone.replace("-", "");
    phone.replace("+", "");
  }
  return Number(phone);
};

exports.getRedableFormatLogDate = function (timeString, type) {
  if (typeof type == "undefined" || type == "" || type == null) type = 0;

  var value = "";

  if (type == 1) {
    value = moment(timeString).format("YYYY-MM-DD HH:mm");
  } else {
    value = moment(timeString).format("dddd, MMMM Do, YYYY");
  }
  return value;
};

exports.convertToTimezone = function (timeString, offsetValue) {
  var timeStringNew = moment(timeString).valueOf();
  timeString =
    timeStringNew > 0 && Number(offsetValue) != "NaN"
      ? Number(timeStringNew) + Number(offsetValue)
      : timeString;
  var value = moment(timeString).format("YYYY-MM-DD HH:mm:ss");
  return value;
};

exports.randomInt = function (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
};

exports.getUniqueArray = function (a) {
  return Array.from(new Set(a));
};

exports.mentionsDateFormat = async () => {
  const now = await moment().utc().format("DD-MM-YYYY HH:MM A");
  return now;
};

exports.getCurrentISTDDMMYY = function () {
  var now = moment().tz("Asia/Kolkata").format("DDMMYY");
  return now;
};

exports.saveImage = async (base64) => {
  var timeInMss = new Date().getTime();
  var baseUrl = `http://3.137.139.78:4949`;
  var base64Str = base64;
  var path = "./uploads/";
  var optionalObj = { fileName: timeInMss, type: "png" };
  let imageInfo = await base64ToImage(base64Str, path, optionalObj);
  let image_url = baseUrl + "/uploads/" + timeInMss + ".png";
  return image_url;
};
