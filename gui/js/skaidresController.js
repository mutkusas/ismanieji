angular.module('myApp', ['ngMaterial'])
    .controller('controller', ["$scope", "$rootScope", "$http", function ($scope, $rootScope, $http) {

        console.log('ZAIDZIAM');

        $scope.isVerificated = false;

        $scope.turai = [{ "id": "1", "pavadinimas": "1. Bendrieji" },
        { "id": "2", "pavadinimas": "2. Geografija" },
        { "id": "3", "pavadinimas": "3. Istorija" },
        { "id": "4", "pavadinimas": "4. Vaizdai" },
        { "id": "5", "pavadinimas": "5. Dar kažkoks" },
        { "id": "6", "pavadinimas": "6. Muzika" }];

        $scope.klausimai = [{
            "id": "1", "tekstas": "čia bus pirmo klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        }, {
            "id": "2", "tekstas": "čia bus antro klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        }, {
            "id": "3", "tekstas": "čia bus trecio klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        }, {
            "id": "4", "tekstas": "čia bus ketvirto klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        }, {
            "id": "5", "tekstas": "čia bus penkto klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        }, {
            "id": "6", "tekstas": "čia bus sesto klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        }, {
            "id": "7", "tekstas": "čia bus septinto klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        }, {
            "id": "8", "tekstas": "čia bus astunto klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        }, {
            "id": "9", "tekstas": "čia bus devinto klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        }, {
            "id": "10", "tekstas": "čia bus desimto klausimo tekstas",
            "atsakymai":
                [{ "atsakymas": "a", "identifikatorius": "A" },
                { "atsakymas": "a", "identifikatorius": "B" },
                { "atsakymas": "a", "identifikatorius": "C" },
                { "atsakymas": "a", "identifikatorius": "D" }]
            , "pasirinktas": ""
        },];

        $scope.myStyle= function(chosen, current){
            return chosen == current ? { color: 'green'} : {color:"gray"};
        }

    }]);