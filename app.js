 var ContactsApp = angular.module('ContactsApp', []);

 ContactsApp.controller('contactController', ['$scope', function ($contact, $window) {
     $contact.add = function () {
         if (angular.isDefined($contact.name) && $contact.name != '' && $contact.price != '') {

             $contact.list.splice(0, 0, {
                 name: $contact.name,
                 email: $contact.email,
                 mobile: $contact.mobile,
                 address: $contact.address
             });
             $contact.name = '';
             $contact.email = '';
             $contact.mobile = '';
             $contact.address = '';
         }

     }

     $contact.showAdd = false;
     $contact.toggle = function () {
         $contact.showAdd = !$contact.showAdd;
     };
     $contact.delete = function (item) {
         var index = $contact.list.indexOf(item);
         $contact.list.splice(index, 1);
     }
     $contact.hideModal = function () {
         angular.element($('.modal-backdrop')).removeClass('in');
         angular.element($('.modal-backdrop')).addClass('out');
         angular.element($('.modal-backdrop')).css('z-index', -1500);
     }
        }]);