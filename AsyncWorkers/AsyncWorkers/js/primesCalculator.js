/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

var PrimesCalculator = WinJS.Class.define(function ()
{
    this._primesWorkers = new Array();
    this._freeWorkers = new Array();

    this._primesWorkers[0] = new Worker("/js/primesWorker.js");
    this._freeWorkers[0] = true;

    this._primesWorkers[1] = new Worker("/js/primesWorker.js");
    this._freeWorkers[1] = true;

    this._primesWorkers[2] = new Worker("/js/primesWorker.js");
    this._freeWorkers[2] = true;
},
{
    calculate: function(firstNumber, secondNumber, numberOfPrimes)
    {
        var freeworkerIndex = -1;
        for (var i = 0; i <= 2; i++)
        {
            if (this._freeWorkers[i]==true)
            {
                freeworkerIndex = i;
                break;
            }
        }

        if (freeworkerIndex == -1)
        {
            return new WinJS.Promise(function (complete, error)
            {
                error("There is no free worker available now");
            });
        }
        else
        {
            var self = this;
            return new WinJS.Promise(function (complete)
            {
                var primes = {};
                self._primesWorkers[freeworkerIndex].onmessage = function (event)
                {
                    self._freeWorkers[freeworkerIndex] = true;
                    self._primesWorkers[freeworkerIndex].onmessage = null;
                    primes = event.data;
                    complete(primes);
                }
                self._freeWorkers[freeworkerIndex] = false;
                self._primesWorkers[freeworkerIndex].postMessage({ firstNumber: firstNumber, lastNumber: secondNumber, numberOfPrimes: numberOfPrimes });
            });
        }
    }
});