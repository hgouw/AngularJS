﻿/// <reference path="angular.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $log) {
                    var myArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
                    var index = 0;
                    //angular.forEach(myArray, function (obj) {
                    //    console.log(obj);
                    //});
                    for (var index in myArray) {
                        if (index < 12) {
                            console.log(myArray[index]);
                        }
                        else {
                            console.log('break');
                            break;
                        }
                    };
                });