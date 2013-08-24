﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    
    var primesCalculator;

    app.onactivated = function (args)
    {
        
        primesCalculator = new LocalNameSpace.PrimesCalculator();
        var calculatePrimesButton = document.getElementById("calculate-primes");
        var primesFirstInput = document.getElementById("primes-first");
        var primesLastInput = document.getElementById("primes-last");
        var primesCountInput = document.getElementById("primes-count");

        calculatePrimesButton.addEventListener("click", function ()
        {
            primesCalculator.calculate(primesFirstInput.value, primesLastInput.value, primesCountInput.value).then(function (primes)
            {
                var mainContentElement = document.getElementById("main-content-id");

                var innerHTML = "<br/> Calculator returned: ";


                for (var i = 0; i < primes.length; i++)
                {
                    innerHTML += primes[i] + " ";
                }

                mainContentElement.innerHTML += innerHTML;
            },
            function (error)
            {
                var mainContentElement = document.getElementById("main-content-id");

                
                var innerHTML = "<br/> Calculator returned: " + error;
                mainContentElement.innerHTML += innerHTML;

            });
        });
    };

    app.start();
})();
