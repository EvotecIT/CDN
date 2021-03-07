/*!
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and Mapael
*
* Map of france_region_25 for Mapael
* Equirectangular projection
* 
* @author CCM Benchmark Group
* @source http://fr.m.wikipedia.org/wiki/Fichier:France_location_map-Departements.svg
*/
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";

    $.extend(true, Mapael,
        {
            maps :  {
                france_region_25 : {
                    width : 133.6552,
                    height : 102.0807,
                    getCoords : function (lat, lon) {
                        var xfactor = 45.48385;
                        var xoffset = 89.96;
                        var x = (lon * xfactor) + xoffset;
                        
                        var yfactor = -65.97284;
                        var yoffset = 3280.8834;
                        var y = (lat * yfactor) + yoffset;
                        return {x : x, y : y};
                    },
                    elems : {
                        "department-50" : "m 0.84,0.09 c -1.31,-0.14 -0.55,1.58 -0.75,2.35 -0.43,1.27 0.75,1.42 1.69,1.61 1.24,0.22 2.52,1.01 2.65,2.38 0.54,1.8 0.64,4 -0.89,5.37 -0.69,0.48 -1,1.49 -0.27,2.07 0.74,0.66 1.57,1.44 1.29,2.54 0.29,1.1 1.35,1.91 1.19,3.16 0.18,1.21 -0.03,2.54 0.32,3.69 0.54,0.35 1.35,-0.32 1.8,-0.01 0.55,1.1 1.61,1.86 2.31,2.83 0.64,0.4 0.69,-0.55 0.77,-0.95 0.3,-0.4 0.56,0.69 0.71,0.89 0.32,0.58 -0.44,0.7 -0.8,0.83 0.34,0.95 1.14,1.81 1.96,2.33 -0.31,0.96 0.51,1.66 0.66,2.57 0.29,0.64 0.4,1.75 1.07,1.94 0.47,-1.34 2.16,-0.96 3,-0.3 0.63,0.33 0.12,0.34 -0.29,0.2 -0.75,-0.13 -2.12,-0.05 -1.86,1.06 0.16,1.26 0.21,2.62 0.68,3.79 0.37,0.17 0.85,-0.16 0.88,0.5 0.28,0.94 -1.5,0.25 -1.37,1.36 -0.08,0.98 -0.43,2.46 0.67,2.92 -0.81,1.29 -0.29,2.88 0.14,4.22 0.62,0.42 0.73,-0.84 1.13,-1.14 0.53,-0.75 2.1,-0.62 2.4,0.27 -0.13,0.3 -0.66,-0.48 -1.05,-0.38 -1.23,-0.01 -1.11,1.55 -1.11,2.4 0.08,0.96 -0.46,2.09 -0.01,2.96 0.31,0.1 0.83,0.02 0.64,0.54 -0.12,0.28 -0.09,1.42 -0.49,0.9 -0.68,0.02 -0.42,1.16 -0.59,1.62 -0.12,1.43 -0.35,3 -1.4,4.05 0.48,0.18 1.03,0.43 1.12,1.04 0.69,1.72 0.15,3.71 0.75,5.43 0.52,0.77 1.72,0.88 1.91,1.94 0.33,0.94 0.75,2.04 1.91,2.15 0.71,0.16 1.15,0.77 1.71,1.14 0.54,-0.06 1.03,-0.82 1.42,-0.03 0.59,0.67 2.03,0.59 2.18,1.61 -0.44,0.12 -0.97,-0.39 -1.49,-0.24 -1.33,-0.11 -2.59,0.36 -3.8,0.74 -1.46,0.13 -2.92,-0.36 -4.35,-0.37 -0.1,1.06 0.97,1.66 1.52,2.4 0.08,0.49 0.01,1.11 0.53,1.32 0.55,0.81 -0.55,1.86 0.34,2.54 0.37,1.07 1.16,1.97 1.47,3.09 0.62,0.73 1.96,0.12 2.37,1.16 0.19,1.14 1.69,0.94 2.52,1.21 0.95,-0.25 1.4,-1.21 1.79,-1.98 0.52,-0.18 0.69,-0.84 1.33,-0.73 0.63,-0.12 1.08,-0.62 1.59,-0.92 0.53,-0.56 -0.04,-1.54 0.8,-1.85 0.75,-0.46 1.55,0.28 2.37,0.09 0.58,0.06 0.76,0.92 1.45,0.67 0.77,0.01 1.28,0.97 2.09,0.54 1.1,-0.09 2.11,1.21 3.21,0.49 1.27,0.36 2.39,2.05 3.84,1.24 0.76,-0.22 0.39,-1.47 1.32,-1.44 0.62,0.04 1.33,0.17 1.45,0.88 0.82,0.83 2.47,0.49 2.88,-0.61 0.83,-1.02 1.69,-2.21 2.91,-2.76 1.01,-0.7 0.49,-2.14 1.48,-2.87 0.49,-0.49 -0.05,-1.22 0.42,-1.72 -0.13,-0.42 -0.79,-0.38 -0.81,-0.94 -0.25,-0.58 -0.52,-1.29 0.14,-1.71 0.17,-0.62 0.75,-0.89 1.15,-1.32 -1.06,-0.59 -2.41,-1.11 -3.08,-2.22 -0.15,-0.86 -1.05,-0.82 -1.68,-0.69 -0.79,-0.38 -0.33,-1.46 0.19,-1.88 0.34,-0.67 -0.65,-0.44 -0.92,-0.17 -0.55,0.25 -1.28,0.34 -1.63,-0.22 -0.92,-0.41 -1.87,-0.77 -2.66,-1.41 -0.72,-0.23 -0.92,0.86 -1.66,0.65 -0.74,0.06 -1.55,0.11 -2.11,-0.41 -0.6,-0.09 -0.96,0.75 -1.62,0.38 -0.75,-0.18 -1.54,-0.84 -1.24,-1.7 -0.3,-1.26 -2.05,-0.97 -2.79,-1.73 -0.29,-0.85 0.87,-0.95 1.23,-1.52 0.74,-0.53 1.19,-1.46 1.88,-1.96 0.27,0.34 0.76,0.76 1.09,0.2 0.56,-0.55 0.67,-1.4 1.48,-1.7 0.58,-0.14 0.98,-1.05 0.59,-1.48 -0.81,-0.25 -1.67,0.44 -2.42,0.28 -0.35,-0.49 0.51,-0.8 0.19,-1.36 -0.24,-0.52 0.51,-0.58 0.5,-1.09 0.55,-0.41 1.45,-0.45 1.93,0.03 1.14,0.74 2.11,-0.49 3.14,-0.8 1.01,-0.71 1.54,-1.87 2.06,-2.91 0.57,-0.35 1.07,-0.85 1.62,-1.18 0.24,-0.73 -1.26,-0.3 -0.95,-1.07 0.66,-0.75 0.94,-1.76 0.47,-2.68 -0.18,-0.55 0.3,-1.98 -0.72,-1.79 -0.5,0.07 -0.97,0.84 -1.41,0.74 0.03,-0.86 1.42,-0.87 1.48,-1.63 -0.33,-0.24 -0.71,-0.37 -0.93,-0.73 -0.55,-0.33 -1.09,-0.65 -1.41,-1.19 -0.38,-0.15 -1.09,-0.46 -0.37,-0.6 1.03,0.37 1.65,-0.78 1.76,-1.63 0.2,-0.34 0.83,-0.61 0.38,-1.05 -0.54,-1.06 -1.35,-1.19 -1.96,-0.06 -0.52,0.71 -1.47,1.21 -2.25,0.57 -0.57,-0.24 -1.33,-0.14 -1.58,-0.85 -0.92,-0.95 -2.24,-1.4 -3.1,-2.46 -0.49,-0.57 -1.29,-1.1 -1.48,-1.81 0.09,-0.67 -0.58,-1.24 -0.37,-1.96 -0.12,-0.86 1.55,-1.12 0.94,-2.02 -0.44,-0.33 -1.42,0.04 -1.31,-0.83 0.15,-0.63 -0.54,-0.66 -0.93,-0.4 -0.33,0.09 -1.17,0.34 -0.81,-0.28 0.46,-1.01 0.69,-2.25 0.55,-3.37 -1.21,-1.85 -2.97,-3.25 -4.03,-5.2 -0.99,-1.74 -2.86,-3.67 -1.88,-5.79 0.41,-0.69 1.74,-0.13 1.83,-1.12 -0.04,-0.74 0.44,-1.45 1.23,-1.11 0.58,-0.35 -0.1,-1.24 -0.14,-1.76 -0.2,-1.12 -0.97,-1.96 -1.26,-3 0.06,-0.99 -1.28,-0.59 -1.86,-0.85 -2.46,-0.57 -5.19,-0.82 -7.6,0.13 -0.61,1.24 -1.56,2.61 -3.14,2.36 -1.05,0.05 -2.22,-0.04 -3.09,0.58 -0.69,0.09 -1,-0.87 -1.78,-0.63 -0.58,0.05 -1.3,0.09 -1.46,-0.6 -0.47,-0.65 -1.42,-0.21 -2.03,-0.63 -1.09,-0.2 -2.24,-0.19 -3.25,-0.62 -0.64,0.04 -1.54,-0.13 -1.57,-0.9 -0.44,-0.96 -1.59,-0.82 -2.38,-0.44 -0.83,-0.09 -1.31,-1.39 -2.31,-1.19 z",
                        "department-61" : "m 106.66,50.02 c -0.77,0.5 -1.11,1.89 -2.28,1.67 -0.69,-0.29 -1.38,-0.67 -2.15,-0.32 -0.68,0.1 -0.09,-1.27 -0.92,-1 -0.67,0.09 -0.84,0.72 -1.03,1.24 -0.32,0.48 -0.87,0.35 -1.25,0.07 -0.88,-0.15 -1.31,0.75 -1.92,1.16 -0.65,0.17 -1.23,-0.15 -1.26,-0.86 -0.1,-0.69 -0.92,-0.81 -1.29,-0.26 -0.35,0.53 -0.9,0.64 -1.47,0.55 -1.19,0.44 -0.7,2.55 -2.17,2.57 -0.68,0.26 -1.67,0.38 -1.98,1.1 0.3,0.47 -0.21,0.48 -0.54,0.38 -1.36,0.48 -1.93,2.49 -3.61,2.17 -0.6,0.09 -1.76,0.05 -1.89,0.8 0.05,0.25 0.91,0.86 0.23,0.77 -0.93,-0.06 -1.84,-0.46 -2.37,-1.24 -0.78,-0.56 -1.82,-0.12 -2.58,-0.74 -1.07,-0.39 -2.36,0.05 -3.28,-0.64 -0.91,-0.18 -0.73,0.93 -0.9,1.46 -0.13,0.45 -0.51,1.2 -0.99,0.59 -0.47,-0.25 -0.82,-0.65 -0.75,-1.18 -0.35,-0.29 -0.94,-0.16 -1.16,-0.68 -0.28,-0.5 -0.77,-0.97 -1.34,-0.87 -0.72,-0.51 -1.91,-0.35 -2.33,0.49 -0.36,0.19 -0.83,0.27 -0.91,0.75 -0.95,0.21 -2.23,-0.27 -2.83,0.79 -0.31,0.61 -0.84,0.32 -1.27,0.1 -0.88,-0.08 -1.87,0.91 -2.67,0.39 -0.18,-0.84 -1.4,-0.71 -2.07,-0.8 -0.84,0.14 -0.09,0.99 0.23,1.29 -0.84,1.26 -2.31,1.92 -3.76,2.32 -1.39,0.44 -1.71,2.33 -3.3,2.43 -0.93,0.18 -0.29,1.88 0.46,1.17 1.04,-0.06 1.11,1.2 1.83,1.65 0.67,0.74 1.86,0.87 2.44,1.62 -0.21,0.46 -0.96,0.58 -1.09,1.18 -0.49,0.4 -0.64,1.03 -0.27,1.58 0.16,0.64 0.93,0.72 1.18,1.21 -0.31,0.27 -0.65,0.64 -0.54,1.15 -0.16,0.82 -1.08,1.35 -0.92,2.29 -0.14,1.22 -1.59,1.31 -2.2,2.16 -0.5,0.72 -1.65,1.38 -1.53,2.35 0.64,0.52 1.08,1.33 1.56,2.02 0.08,0.35 0.26,1.15 0.75,0.7 0.37,-0.45 1.47,-0.48 1.23,0.38 -0.12,0.71 0.55,1.35 1.22,0.96 0.6,-0.12 1.45,-0.66 0.75,-1.28 -0.3,-0.51 0.27,-1.15 0.84,-0.83 0.47,0.02 1.37,0.55 1.43,-0.24 0.25,-0.43 0.86,-0.77 1.03,-0.12 0.44,0.52 0.08,1.63 0.76,1.89 0.91,-0.25 1.5,-1.16 2.36,-1.42 0.5,0.1 0.9,-0.23 1.31,-0.31 0.94,0.19 1.02,-1.21 1.85,-1.37 0.3,-0.23 0.45,-1.04 0.98,-0.66 0.53,0.4 1.23,0.4 1.63,-0.2 1.03,-0.81 2.12,0.48 3.22,0.03 0.25,0.23 0.41,0.77 0.88,0.83 0.39,0.12 0.67,0.66 1.05,0.16 0.78,-0.39 0.85,-1.53 1.62,-1.85 0.54,0.37 1.41,0.07 1.73,0.75 0.61,0.09 0.43,-0.96 1.07,-1 0.62,-0.27 0.51,-0.98 -0.01,-1.28 -0.27,-0.37 0.41,-1.12 0.81,-1.36 1,0.21 2.06,0.42 2.7,1.31 0.45,0.6 1.35,0.81 1.72,1.41 -0.24,0.55 -1.41,0.76 -0.94,1.55 0.88,0.88 0.31,2.59 1.42,3.25 1,0.3 2.17,0.25 3.05,-0.31 0.62,-0.06 0.93,0.8 0.66,1.28 -0.02,1.18 -0.34,2.53 0.16,3.63 0.76,0.32 1.14,-0.96 1.92,-0.92 0.73,-0.14 0.81,1.11 1.62,1 0.58,0.13 1.34,-0.04 1.22,-0.77 0.25,-0.93 1.31,-1.04 2.02,-1.41 0.34,-0.53 0.41,-1.48 1.27,-1.42 0.51,0.12 1.46,-0.16 0.95,-0.82 -0.58,-0.42 0.25,-0.67 0.54,-0.39 0.56,0.13 0.38,-0.82 1,-0.6 0.94,-0.19 1.71,-0.79 2.71,-0.82 0.7,-0.08 1.19,-0.81 1.94,-0.45 0.96,0.39 1.99,0.59 2.76,1.35 1.1,0.3 1.12,1.6 1.69,2.4 0.28,0.67 -0.48,1.25 -0.18,1.98 -0.04,1.15 0.71,2.29 0.45,3.41 -0.51,1.08 0.91,1.76 1.79,1.73 0.41,1 1.82,1.1 2.74,0.88 0.43,-0.28 0.96,0.6 0.89,0.93 -0.87,0.43 0.29,1.49 0.86,1.63 0.75,-0.05 0.46,1.01 1.17,1.08 1.15,0.32 2.48,0.58 3.64,0.2 0.17,-0.58 0.7,-1.32 1.41,-0.97 0.64,0.17 1.28,0.55 1.38,1.28 0.84,1.45 1.6,3.09 3.07,4.01 0.82,-0.2 1.76,-0.7 2.24,-1.39 0.29,-0.37 1.27,-0.52 0.73,-1.15 -0.55,-1.2 -1.92,-2.44 -1.48,-3.86 0.78,-0.82 -0.54,-1.59 -1.29,-1.28 -0.41,-0.39 0.39,-0.95 0.33,-1.44 0.38,-0.72 0.73,-1.62 1.66,-1.76 0.59,-0.22 1.34,0.16 1.78,-0.42 1.08,0.2 1.98,-0.68 2.69,-1.35 0.95,-0.42 1.63,-1.47 1.92,-2.44 -0.12,-0.85 1.19,-1.18 1.07,-1.98 -0.86,-0.3 -1.54,-1.39 -1.38,-2.29 0.39,-0.28 0.88,-0.73 0.45,-1.22 -0.51,-0.74 1.3,-1.32 0.51,-2 -0.43,-0.43 -1.47,-0.45 -1.54,-1.13 0.48,-0.38 0.33,-1.07 -0.26,-1.26 -0.92,-0.87 -2.62,-0.56 -3.19,-1.79 -0.19,-0.59 -0.14,-1.64 -1.06,-1.46 -0.68,-0.16 -0.17,-1.09 -0.16,-1.55 -0.07,-0.9 -0.31,-1.97 -0.95,-2.59 -0.65,0.27 -1.4,0.52 -1.76,-0.33 -0.13,-0.58 0.27,-1.62 -0.67,-1.66 -0.37,0.08 -1.17,-0.05 -0.8,-0.59 0.53,-0.7 1.93,-1.05 1.62,-2.15 -0.36,-0.53 -0.82,-1.04 -0.72,-1.7 -0.89,-1.29 -2.74,-1.36 -3.83,-2.47 -0.91,-0.58 -1.94,-1.12 -2.72,-1.81 0.42,-0.53 0.97,-1.2 0.06,-1.61 -0.46,-0.25 0.12,-1.11 -0.57,-1.01 -0.66,0.22 -0.58,-0.6 -0.33,-0.93 -0.3,-0.76 -1.22,0.21 -1.5,0.55 -0.49,0.58 -1.29,-0.1 -1.94,0.03 -0.81,0.09 -1.5,-0.59 -2.26,-0.53 -0.29,0.46 -0.81,0.58 -1.26,0.21 -0.78,-0.43 -1.23,-1.24 -2.06,-1.62 -0.93,-0.87 0.66,-1.88 0.44,-2.81 -0.32,-0.29 0.09,-0.94 -0.48,-1.11 -0.16,-0.09 -0.34,-0.19 -0.53,-0.16 z",
                        "department-14" : "m 100.99,19.69 c -1.73,0.02 -3.21,0.92 -4.83,1.36 -1.77,0.55 -2.51,2.39 -3.83,3.51 -3.2,1.85 -6.52,3.77 -10.28,4.11 -0.98,0.29 -2.34,0.09 -3.03,0.96 0.02,0.68 -0.63,-0.17 -0.77,-0.37 -1.09,-0.83 -2.58,-0.93 -3.77,-1.61 -1.62,-0.57 -3.04,-1.71 -4.72,-2.06 -1.98,0.35 -3.85,-0.59 -5.79,-0.7 -1.22,0.39 -2.48,0.62 -3.76,0.34 -3.68,-0.35 -7.47,-0.54 -11.01,-1.54 -0.91,-0.31 -1.69,-0.87 -2.35,-1.49 -2.19,-0.3 -4.45,-0.08 -6.66,-0.02 -0.87,0.18 -1.49,1 -2.06,1.61 -0.1,0.93 0.43,2.08 -0.06,2.91 -1.18,0.58 -1.03,2.1 -0.17,2.88 -0.54,0.57 0.51,1.26 0.96,1.57 0.85,0.65 1.38,1.88 2.6,2.04 0.74,0.18 0.68,1.38 1.57,1.27 0.74,0.14 1.57,1.22 2.19,0.29 0.68,-0.56 1.18,-1.42 1.63,-2.07 0.48,0.7 0.9,1.58 1.72,1.96 -0.35,0.38 -1.07,0.56 -1.01,1.19 -0.26,0.74 -1.55,1.7 -0.71,2.46 0.72,0.38 1.75,0.85 1.75,1.77 0.53,0.2 0.6,0.75 0.6,1.29 -0,1.09 0.66,2.34 -0.28,3.23 -0.92,0.8 1.17,0.74 0.82,1.49 -1.08,0.55 -1.97,1.47 -2.42,2.6 -0.97,1.22 -2.41,2.4 -3.99,2.52 -0.75,0.13 -1.2,-0.74 -1.9,-0.59 -0.44,0.24 -0.46,0.84 -0.91,1.04 0.27,0.55 -0.64,1.15 -0.16,1.57 0.74,-0.18 1.68,-0.48 2.38,-0.16 0.27,0.98 -0.62,1.47 -1.27,1.93 -0.49,0.56 -0.75,1.58 -1.63,1.62 -0.24,-0.42 -0.89,-0.54 -0.93,0.06 -0.33,0.47 -0.92,0.75 -1.07,1.32 -0.46,0.19 -0.79,0.58 -1.13,0.88 -0.76,0.1 -0.18,0.96 0.34,0.92 0.79,0.22 1.87,0.18 2.04,1.2 0.38,0.45 -0.28,0.98 0.29,1.32 0.65,0.72 1.61,0.43 2.32,0.03 1,0.57 2.55,0.68 3.39,-0.23 0.9,-0.32 1.46,0.92 2.32,1.03 0.84,0.11 1.66,1.29 2.5,0.54 0.53,-0.16 1.28,-0.3 1.72,-0.54 -0.18,0.27 -0.45,1.15 0.18,0.89 0.95,-0.79 1.46,-2.25 2.89,-2.27 1.17,-0.24 2.46,-0.93 2.91,-2.04 -0.54,-0.4 -1.01,-1.26 -0.11,-1.52 0.73,0.21 1.59,0.27 2.3,0.37 -0.16,0.7 0.66,1.13 1.19,0.63 0.59,-0.34 1.46,-0.67 2.02,-0.16 0.8,0.01 0.85,-1.26 1.75,-1.1 0.58,-0.12 1.6,0.25 1.8,-0.51 0.87,-0.13 1.34,-1.22 2.33,-0.97 0.7,0.07 1.85,-0.27 1.98,0.75 0.3,0.87 1.3,0.57 1.88,0.96 0.06,0.33 -0.41,0.7 0.03,1 0.51,0.81 1.33,-0.12 1.1,-0.77 -0.04,-0.54 0.16,-1.2 0.85,-0.97 1.22,0.3 2.51,0.27 3.73,0.67 1.08,0.11 2.34,0.34 2.96,1.28 0.34,0.27 1.31,0.73 1.24,-0.08 -0.26,-0.6 0.62,-0.64 0.87,-1.06 1,0.25 2.35,0.3 3.09,-0.62 0.61,-0.63 1.25,-1.31 2.04,-1.65 0.51,-0.82 1.69,-1.02 2.56,-1.35 1.05,-0.43 0.75,-2.12 1.89,-2.51 0.87,0.19 1.44,-0.64 2.09,-1.01 0.85,0.32 0.68,1.58 1.63,1.7 0.7,-0.1 0.74,-1.13 1.53,-1.16 0.62,-0.48 1.22,0.54 1.74,-0.06 0.3,-0.42 0.18,-1.15 0.89,-1.18 0.43,-0.22 1.16,-0.27 0.96,0.44 0.21,0.92 1.25,-0.23 1.72,0.37 0.81,0.75 1.95,0.14 2.33,-0.72 0.23,-0.43 0.58,-0.9 1.05,-0.45 0.49,0.16 0.7,0.63 0.93,1 0.64,-0.21 1.27,-1.23 0.75,-1.87 -0.07,-0.53 0.31,-1.05 0.38,-1.57 0.44,-0.34 0.55,-0.96 -0.03,-1.23 -0.75,-0.77 -2.1,-0.28 -2.64,-1.34 -0.59,-0.5 0.06,-1.1 0.08,-1.69 0.36,-0.66 1.72,0.02 1.72,-0.85 -0.17,-0.28 -0.67,-0.18 -0.59,-0.67 -0.04,-0.97 0.01,-2.34 1.06,-2.75 0.27,-0.77 -1.01,-0.72 -1.44,-1.01 -0.67,-0.25 -0.13,-1.27 -0.29,-1.79 -0.12,-0.76 0.47,-1.99 -0.33,-2.49 -1.27,-0.07 -2.42,-1.25 -2.65,-2.44 0.8,-0.44 2.31,-0.27 2.61,-1.35 0.28,-1.07 -1.12,-2.01 -1.9,-1.11 -0.27,0.26 -1.16,0.99 -1.36,0.37 0.21,-0.55 0.8,-1.37 0.08,-1.81 -0.42,0.02 -0.71,-0.41 -0.23,-0.67 0.53,-0.63 0.83,-1.52 0.17,-2.17 -0.64,-1.55 -0.11,-3.45 -0.73,-4.96 -0.53,-0.08 -1.15,0.08 -1.7,0.09 z"
                    }
                }
            }
        }
    );

    return Mapael;

}));