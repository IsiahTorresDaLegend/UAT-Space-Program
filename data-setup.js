// This code was written for CSC 102 class at UAT, DOM assignment. Written by Isiah Torres.


// Best practice to place class declarations on top of file because it is important that the computer sees our class definition before we use the class.
// "class" is the keyword we use to when were creating a new class. This code creates the "InputData" class.
class InputData {
    // Constructor sets the properties of the class. Properties describe what an "object" is.
    constructor(
        // Every "InputData" object will contain all of these properties.
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        // "this." is used because the computer needs to know we are talking about THIS specific object and we do not mean to specify variables for anything else.
        // For instance, we can create many objects, but we want to set values for "this" specific object. So, for example, when we use .time_seconds we are talking about the 
        // time_seconds property of that certain object belonging to this class.
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

// Function to load and display data, called on by the start() function (attached to start button).
function updateDisplay() {
    // "theTime" is a new object created with the Date() class type.
    // "new" is the keyword used when we make a new variable from a class type.
    theTime = new Date();
    // Debugging time, console.log is often used when debugging. Below is how the Date() class should appear. 
    console.log(
        // This keeps the time displayed in 00:00:00 format. if the .getHours(), getMinutes(), or getSeconds() value is less than 10, then a "0" padding will be added.
        // Ex: if .getHours == 12 it will be displayed as 12:00:00. if .getHours == 9 it will be displayed as 09:00:00.
        // These functions obtain the local time.
        //               the statment      tenary        if true                 if false 
        "Display : " + (theTime.getHours() < 10 ? "0"+ theTime.getHours() : theTime.getHours()) +
        " : " + (theTime.getMinutes() < 10 ? "0"+ theTime.getMinutes() : theTime.getMinutes()) + 
        " : " + (theTime.getSeconds() < 10 ? "0"+ theTime.getSeconds() : theTime.getSeconds())
    );

    // Arrays start at the index 0. At index 0, the time_seconds == 10, and the time continues to increase.
    // This code says, as we go through the array, fill the table rows with dataRow() which adds the values from the "data" array within "<td>" tags.
    // Since the "id" of the table elements are organized with the properties of the InputData class, it is easier to make sure the data goes in the right place.
    var timeRead = data[index].time_seconds;
    if (timeRead >= 10) {
    // Within the element with the id "data", .row means table row, [""] specifies the id of the rows within that "data" element, .innerHTML will update the content between those HTML tags.
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds,"seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude," ");
        document.getElementById("data").rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude," ");
        document.getElementById("data").rows["gps_altitude"].innerHTML = dataRow("gps Altitude", data[index].gps_altitude,"");
        document.getElementById("data").rows["bmpSensor_altitude"].innerHTML = dataRow("BMP Sensor Altitude", data[index].bmpSensor_altitude,"");
        document.getElementById("data").rows["bmpSensor_pressure"].innerHTML = dataRow("BMP Sensor Pressure", data[index].bmpSensor_pressure,"");
        document.getElementById("data").rows["bmpSensor_temp"].innerHTML = dataRow("BMP Sensor Temp", data[index].bmpSensor_temp,"");
        document.getElementById("data").rows["cssSensor_temp"].innerHTML = dataRow("CSS Sensor Temp", data[index].cssSensor_temp,"");
        document.getElementById("data").rows["cssSensor_eCO2"].innerHTML = dataRow("CSS Sensor eCO2", data[index].cssSensor_eCO2,"");
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = dataRow("CSS Sensor TVOC", data[index].cssSensor_TVOC,"");
        document.getElementById("data").rows["UV"].innerHTML = dataRow("UV", data[index].UV,"");
        document.getElementById("data").rows["accelX"].innerHTML = dataRow("accelX", data[index].accelX,"");
        document.getElementById("data").rows["accelY"].innerHTML = dataRow("accelY", data[index].accelY,"");
        document.getElementById("data").rows["accelZ"].innerHTML = dataRow("accelZ", data[index].accelZ,"");
        document.getElementById("data").rows["magneticX"].innerHTML = dataRow("magneticX", data[index].magneticX,"");
        document.getElementById("data").rows["magneticY"].innerHTML = dataRow("magneticY", data[index].magneticY,"");
        document.getElementById("data").rows["magneticZ"].innerHTML = dataRow("magneticZ", data[index].magneticZ,"");
        document.getElementById("data").rows["gyroX"].innerHTML = dataRow("gyroX", data[index].gyroX,"");
        document.getElementById("data").rows["gyroY"].innerHTML = dataRow("gyroY", data[index].gyroY,"");
        document.getElementById("data").rows["gyroZ"].innerHTML = dataRow("gyroZ", data[index].gyroZ,"");

    // This will go on until the index is at 500 (when the array is done), if it is not at the end, move on to the next index (index++).
        if (index < 500) {
            index++;
        } else {
        // Otherwise we start over.
            index = 0;
        }
    }

    // Displays the time at the bottom using "theTime" object with the Date() class type specified earlier. .getHours(), .getMinutes(), .getSeconds() would be the Date() class methods.
    // A method is the things that an object does. All Date() objects have and can use these methods. However "theTime" can have a method that is not accessable to other Date() objects.
    document.getElementById("time").innerHTML = (theTime.getHours() < 10 ? "0"+ theTime.getHours() : theTime.getHours()) +
        " : " + (theTime.getMinutes() < 10 ? "0"+ theTime.getMinutes() : theTime.getMinutes()) + 
        " : " + (theTime.getSeconds() < 10 ? "0"+ theTime.getSeconds() : theTime.getSeconds())
    // Time is in 00:00:00 format
}

// This function starts the above function. This is basically the start of the data loading. (attached to start button)
function start() {
    // Lets user know that data is being retrieved in the first section of the table.
    document.getElementById("data").rows["seconds"].innerHTML = "Reading data...";
    // This ensures the global variable  "index" is set to 0 before continuing.
    index = 0;
    // setInterval(callback, delay, [arg1, arg2,...]);
    // setInterval() repeatedly calls a function (in this case: updateDisplay) repeatedly with a fixed delay (time_interval) between each call.
    // Thus, updateDisplay is called every 5 seconds since time_interval == 5000 (which is miliseconds in time, so 5 seconds.)
    timer = setInterval(updateDisplay, time_interval);
    // Button then disables itself and enables the corresponding stop button.
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}

// This function clears the "timer" specified in start() which stops updateDisplay and clears its place. Hitting start again would start the process over, not resume.
// Attached to stop button.
function stop() {
    clearInterval(timer);
    // Button then disables itself and enables the corresponding start button.
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}




// Function to get the data. Returns loadData(), which defines the "data" array and returns it. function/array attached to the global variable "data".
function getData() {
    var loadedData = loadData();
    return loadedData;
}

// This function organizes the data that is displayed in the table. When dataRow() is called, these parameters need to be specified.
function dataRow(legend, value, units) {
    // Adds two td cells for the two table columns and aligns the data in the desired format. "msg" variable starts with td tag then the rest is added to it with "+="
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
