WinJS.Namespace.define("LocalControls", {
    TimeCalculator: WinJS.Class.define(function (element, options)
    {
        this._element = element;
        element.winControl = this;
        this._element.winControl = this;

        this._buildVisualTree();
    },
    {
        _element: null,
        _buildVisualTree: function ()
        {
            var controlField = document.createElement("fieldset");
            this._element.appendChild(controlField);

            var legend = document.createElement("legend");
            legend.textContent = "Days & Hours Calculator";
            controlField.appendChild(legend);

            var datePickersContainer = document.createElement("div");
            controlField.appendChild(datePickersContainer);

            //start date picker
            var startDatePickerLabel = document.createElement("label");
            startDatePickerLabel.textContent = "Start Date: ";
            datePickersContainer.appendChild(startDatePickerLabel);

            var startDatePicker = document.createElement("div");
            var startDatePickerControl = new WinJS.UI.DatePicker(startDatePicker);
            datePickersContainer.appendChild(startDatePicker);

            //end datepicker
            var endDatePickerLabel = document.createElement("label");
            endDatePickerLabel.textContent = "End Date: ";
            datePickersContainer.appendChild(endDatePickerLabel);

            var endDatePicker = document.createElement("div");
            var endDatePickerControl = new WinJS.UI.DatePicker(endDatePicker);
            datePickersContainer.appendChild(endDatePicker);

            var timePickersContainer = document.createElement("div");
            timePickersContainer.style.display = "none";
            controlField.appendChild(timePickersContainer);

            //start Time picker
            var startTimePickerLabel = document.createElement("label");
            startTimePickerLabel.textContent = "Start Time: ";
            timePickersContainer.appendChild(startTimePickerLabel);

            var startTimePicker = document.createElement("div");
            var startTimePickerControl = new WinJS.UI.TimePicker(startTimePicker);
            timePickersContainer.appendChild(startTimePicker);

            //end Timepicker
            var endTimePickerLabel = document.createElement("label");
            endTimePickerLabel.textContent = "End Time: ";
            timePickersContainer.appendChild(endTimePickerLabel);

            var endTimePicker = document.createElement("div");
            var endTimePickerControl = new WinJS.UI.TimePicker(endTimePicker);
            timePickersContainer.appendChild(endTimePicker);

           

            var showTimePanel = document.createElement("div");
            var showTimePickersSwitchControl = new WinJS.UI.ToggleSwitch(showTimePanel);
            showTimePickersSwitchControl.textContent = "Show/Hide Time Panel";
            showTimePickersSwitchControl.labelOn = "Visible";
            showTimePickersSwitchControl.labelOff = "Hidden";
            showTimePickersSwitchControl.addEventListener("change", function (e)
            {
                if (showTimePickersSwitchControl.checked)
                {
                    timePickersContainer.style.display = "block";
                } else
                {
                    timePickersContainer.style.display = "none";
                }
            });
            controlField.appendChild(showTimePanel);

            var calculateButton = document.createElement("button");
            calculateButton.textContent = "Calculate";
            calculateButton.addEventListener("click", function (e)
            {
                menuControl.show(calculateButton, "bottom");
            });
            controlField.appendChild(calculateButton);

            var menu = document.createElement("div");
            var menuControl = new WinJS.UI.Menu(menu);

            var resultMessageContainer = document.createElement("div");
            controlField.appendChild(resultMessageContainer);

            var calculateDaysButton = document.createElement("button");
            calculateDaysButton.textContent = "Calculate Days";
            calculateDaysButton.addEventListener("click", function (e)
            {
                var result = LocalControls.TimeCalculator.daysBetween(startDatePickerControl.current, endDatePickerControl.current);
                resultMessageContainer.innerHTML = "Days: " + result;
                menuControl.hide();
            });
            menu.appendChild(calculateDaysButton);

            var calculateHoursButton = document.createElement("button");
            calculateHoursButton.textContent = "Calculate Hours";
            calculateHoursButton.addEventListener("click", function (e)
            {
                var result = LocalControls.TimeCalculator.daysBetween(startDatePickerControl.current, endDatePickerControl.current) * 24;
                resultMessageContainer.innerHTML = "Hours: " + result;
                menuControl.hide();
            });
            menu.appendChild(calculateHoursButton);

            var calculateDaysAndHoursButton = document.createElement("button");
            calculateDaysAndHoursButton.textContent = "Calculate Days & Hours";
            calculateDaysAndHoursButton.addEventListener("click", function (e)
            {
                var resultDays = LocalControls.TimeCalculator.daysBetween(startDatePickerControl.current, endDatePickerControl.current);
                var resultHours = LocalControls.TimeCalculator.hoursBetween(startTimePickerControl.current, endTimePickerControl.current);
                resultMessageContainer.innerHTML = "Days: " + resultDays + " Hours: " + resultHours;
                menuControl.hide();
            });
            menu.appendChild(calculateDaysAndHoursButton);

            document.body.appendChild(menu);
        }
    },
    {
        daysBetween: function (startDate, endDate)
        {
            //Get 1 day in milliseconds
            var oneDay = 1000 * 60 * 60 * 24;

            // Convert both dates to milliseconds
            var date1Ms = startDate.getTime();
            var date2Ms = endDate.getTime();

            // Calculate the difference in milliseconds
            var differenceMs = date2Ms - date1Ms;

            // Convert back to days and return
            return Math.round(differenceMs / oneDay);
        },
        hoursBetween: function (startDate, endDate)
        {
            //Get 1 day in milliseconds
            var oneHour = 1000 * 60 * 60;

            // Convert both dates to milliseconds
            var date1Ms = startDate.getTime();
            var date2Ms = endDate.getTime();

            // Calculate the difference in milliseconds
            var differenceMs = date2Ms - date1Ms;

            // Convert back to days and return
            return Math.round(differenceMs / oneHour);
        }

    })
});