"use strict";angular.module("worldWideApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/charter",{templateUrl:"views/charter.html",controller:"CharterCtrl",controllerAs:"charter"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("worldWideApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("worldWideApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("worldWideApp").controller("CharterCtrl",["$scope",function(a){var b=["Commercial Charter / Public (*) (More than 17 Paxs)","Group Charter / Private (**) (More than 17 Paxs)","Private/VIP Charter (1 to 17 Paxs Maximum)","Aero-Ambulance","Cargo Charter","Helicopter Charter"];a.charterType=b;var c=["ALL Coach","1st Class + Coach","VIP"];a.aircraft=c;var d=["Round Trip","One Way","Multi-City"];a.flightOp=d;var e=["Standard Service (No Alcoholic Beverages)","Open Bar","Cash Bar","See Remarks"];a.beverage=e;var f=["Standard Service","VIP / Premium","Athletic Portions (1.5 to 2 X Standard Service)","Kosher","NO Catering Service","See Remarks"];a.catering=f;var g=1;a.numberFlight=[g],a.Add=function(){g++,a.numberFlight.push(g)},a.Delete=function(){g--,a.numberFlight.splice(-1,1)},a.charter={}}]),angular.module("worldWideApp").controller("MenuCtrl",["$scope",function(a){a.menuItem="Home",a.MenuClicked=function(b){a.menuItem=b}}]),angular.module("worldWideApp").controller("ContactCtrl",["$scope","apiContact",function(a,b){a.Works=function(){var c="<h3>"+a.info.name+"</h3>";c+="<h4>"+a.info.company+"</h4>",c+="<h5>"+a.info.website+"</h5>",c+="<h6>"+a.info.memo+"</h6>",b.event("From Contact Us",c)}}]),angular.module("worldWideApp").service("apiContact",["$http",function(a){return{event:function(b,c){a.post("http://localhost:9000/api/contact.php",{params:{title:b,data:c}}).then(function(a){console.log(a)})}}}]),angular.module("worldWideApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="row"> <div class="col-md-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">About Us</h3> </div> <div class="panel-body"> <p> Air Charters Worldwide is a Canadian Aviation Charters Broker, specialized in chartering aircrafts worldwide. No matter where or what kind of plane are you looking for, we can help. </p> <p> The services we provide include the aircraft chartering for a single flight (one way, multi destination, round trip), or multiple / seasonal flights, we have access to hundreds of aircraft located all around the world. </p> <p> Thanks to our experience in civil aviation, we can assist individual clients, companies, tour operators and travel agencies on finding the best aircraft according their needs, with the best price within the budget. </p> </div> </div> <p> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">We are Specialized in</h3> </div> <div class="panel-body"> Commercial/Group Charters, Private/VIP Charters, Cargo Charters, Corporate Travels, Aero-Ambulance, Helicopter Charters. </div> </div> </p> <p> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Disclaimer</h3> </div> <div class="panel-body"> <b>Air Charters Worldwide</b> serves as an agent in obtaining air charter services for our customers. ACWW is not a direct or indirect “Air Carrier”. <br> <b>Air Charters Worldwide</b> does not own or operate any aircraft. All flights are operated by FAR Part 135 or 121 air carriers or foreign equivalent (“Operators”), who shall maintain full operational control of charter flights at all times. </div> </div> </p> </div> </div>'),a.put("views/charter.html",'<form name="charterForm"> <div class="row"> <div class="col-md-12"> <h2>Charter Quote Request Form</h2> <hr> <p> <b>Please, choose one of the Charter Options :</b> </p> </div> </div> <div class="row"> <div class="col-md-8"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title text-uppercase">Type of Charter Flight :*</h4> </div> <div class="panel-body"> <div ng-repeat="item in charterType"> <label><input type="checkbox"> {{item}}</label><br> </div> </div> </div> </div> <div class="col-md-4"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title text-uppercase">Aircraft Seating Configuration :*</h4> </div> <div class="panel-body"> <div ng-repeat="item in aircraft"> <label><input type="checkbox"> {{item}}</label> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title text-uppercase">Total Number of Passengers :*</h4> </div> <div class="panel-body"> <div class="input-group-md col-md-3"> <input ng-model="charter.npassengers" ng-change="PassengerChange(charterForm.passengerNumber.$error.pattern)" name="passengerNumber" ng-pattern="/^[0-9]{1,12}$/" type="text" class="form-control" required> <p ng-show="charterForm.passengerNumber.$error.pattern" class="label label-danger">Please write only numbers</p> {{ charterForm.passengerNumber.$error.pattern === undefined ? continue : charter.npassengers = \'\' }} </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 text-info"> <div class="panel panel-default"> <div class="panel-body"> (*) You DO intend to sell seats to the general public. (**) You DO NOT intend to sell seats to the general public. <br> Please Note: For Public Charters, the aircrafts are generally configured to carry from 17 to around 400 passengers. For an specific aircraft configuration, please provide more details about your charter needs.<br> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title text-uppercase">Trip Options :*</h4> </div> <div class="panel-body"> <div ng-repeat="item in flightOp"> <label><input type="radio" name="flightOp" ng-checked="$index === 0 ? true : false"> {{item}} </label> </div> </div> </div> </div> </div> <!-- Important region --> <div class="row"> <div class="col-md-12"> <div class="panel panel-default"> <table class="table" ng-repeat="item in numberFlight"> <tr> <td>LEG {{item}} - Departure City :*</td> <td>Arrival City :*</td> <td>Date :*</td> <td>Time :*</td> </tr> <tr> <td> <div class="input-group-md"> <input type="text" class="form-control" required> </div> </td> <td> <div class="input-group-md"> <input type="text" class="form-control" required> </div> </td> <td> <div class="input-group-md"> <input type="text" class="form-control" required> </div> </td> <td> <div class="input-group-md"> <select class="form-control"> <option value="00:00">00:00</option> <option value="01:00">01:00</option> <option value="02:00">02:00</option> <option value="03:00">03:00</option> <option value="04:00">04:00</option> <option value="05:00">05:00</option> <option value="06:00">06:00</option> <option value="07:00">07:00</option> <option value="08:00">08:00</option> <option value="09:00">09:00</option> <option value="10:00">10:00</option> <option value="11:00">11:00</option> <option value="12:00">12:00</option> <option value="13:00">13:00</option> <option value="14:00">14:00</option> <option value="15:00">15:00</option> <option value="16:00">16:00</option> <option value="17:00">17:00</option> <option value="18:00">18:00</option> <option value="19:00">19:00</option> <option value="20:00">20:00</option> <option value="21:00">21:00</option> <option value="22:00">22:00</option> <option value="23:00">23:00</option> <option value="24:00">24:00</option> </select> </div> </td> </tr> </table> <button class="btn btn-default btn-success btn-xs" style="margin: 8px" ng-model="btnAdd" ng-click="Add()">Add Flight</button> <button ng-show="numberFlight.length > 1 ? true : false" class="btn btn-default btn-danger btn-xs" style="margin: 8px" ng-model="btDelete" ng-click="Delete()">Delete Flight</button> </div> </div> </div> <div class="row"> <div class="col-md-12 text-info"> <div class="panel panel-default"> <div class="panel-body"> For "Multi-City" Trips, please use the "Remarks Field" to provide the information about the additional Departure and Arrival Cities, as well as the Departure Dates and Times for each LEG not listed before. </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title text-uppercase">Beverage Service :*</h4> </div> <div class="panel-body"> <div ng-repeat="item in beverage"> <label><input type="radio" name="beverage" ng-checked="$index === 0 ? true : false"> {{item}}</label><br> </div> </div> </div> </div> <div class="col-md-12"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title text-uppercase">Catering Service :*</h4> </div> <div class="panel-body"> <div ng-repeat="item in catering"> <label><input type="radio" name="catering" ng-checked="$index === 0 ? true : false"> {{item}}</label><br> </div> </div> </div> </div> </div> <!-- contact --> <div class="row"> <div class="col-md-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Contact Us</h3> </div> <div class="panel-body"> <div class="col-md-6"> <p>Name</p> <div class="input-group-md"> <input type="text" placeholder="Name" class="form-control" ng-model="charter.name" required> </div> </div> <div class="col-md-6"> <p>Email</p> <div class="input-group-md"> <input type="text" name="email" placeholder="Email" class="form-control" ng-model="charter.email" ng-pattern="/^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$/" required> <p ng-show="charterForm.email.$error.pattern" class="label label-danger">Please write a correct email</p> </div> </div> <div style="margin-top: 70px"></div> <div class="col-md-6"> <p>Company</p> <div class="input-group-md"> <input type="text" placeholder="Company" class="form-control" ng-model="charter.company" required> </div> </div> <div class="col-md-6"> <p>Phone</p> <div class="input-group-md"> <input name="phone" type="text" placeholder="Phone" class="form-control" ng-model="charter.phone" ng-pattern="/^[0-9]{1,12}$/" required> <p ng-show="charterForm.phone.$error.pattern" class="label label-danger">Only numbers</p> </div> </div> <div style="margin-top: 140px"></div> <div class="col-md-6"> <p>Website</p> <div class="input-group-md"> <input type="text" name="website" placeholder="Website" class="form-control" ng-model="charter.website" required> <!-- <p ng-show="charterForm.website.$error.pattern" class="label label-danger">Invalid Website</p> --> </div> </div> <div class="col-md-6"> <p>Memo</p> <div class="input-group-md"> <input type="text" placeholder="Memo" class="form-control" ng-model="charter.memo" required> </div> </div> <div style="margin-top: 210px"></div> <div class="col-md-12 text-right"> <input type="submit" class="btn btn-default btn-success" ng-invalid="charterForm.$invalid" value="Submit"> </div> </div> </div> </div> </div> </form>'),a.put("views/contact.html",'<div class="row"> <div class="col-md-12"> <form name="myForm" ng-submit="Works()"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Contact Us</h3> </div> <div class="panel-body"> <div class="col-md-6"> <p>Name</p> <div class="input-group-md"> <input type="text" placeholder="Name" class="form-control" ng-model="info.name" required> </div> </div> <div class="col-md-6"> <p>Email</p> <div class="input-group-md"> <input type="text" name="email" placeholder="Email" class="form-control" ng-model="info.email" ng-pattern="/^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$/" required> <p ng-show="myForm.email.$error.pattern" class="label label-danger">Please write a correct email</p> </div> </div> <div style="margin-top: 70px"></div> <div class="col-md-6"> <p>Company</p> <div class="input-group-md"> <input type="text" placeholder="Company" class="form-control" ng-model="info.company" required> </div> </div> <div class="col-md-6"> <p>Phone</p> <div class="input-group-md"> <input name="phone" type="text" placeholder="Phone" class="form-control" ng-model="info.phone" ng-pattern="/^[0-9]{1,12}$/" required> <p ng-show="myForm.phone.$error.pattern" class="label label-danger">Only numbers</p> </div> </div> <div style="margin-top: 140px"></div> <div class="col-md-6"> <p>Website</p> <div class="input-group-md"> <input type="text" name="website" placeholder="Website" class="form-control" ng-model="info.website" required> <!-- <p ng-show="myForm.website.$error.pattern" class="label label-danger">Invalid Website</p> --> </div> </div> <div class="col-md-6"> <p>Memo</p> <div class="input-group-md"> <input type="text" placeholder="Memo" class="form-control" ng-model="info.memo" required> </div> </div> <div style="margin-top: 210px"></div> <div class="col-md-12 text-right"> <input type="submit" class="btn btn-default btn-success" ng-invalid="myForm.$invalid" value="Submit"> </div> </div> </div> </form> </div> </div>'),a.put("views/main.html",'<div class="row marketing"> <h1>Air Charters Worldwide <br> A Canadian Aviation Charter Broker </h1> <p> Count with us for your Next Charter Flight ! </p> </div>')}]);