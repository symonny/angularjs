var app = angular.module('myApp', [ ]);
app.controller('ContactsController', function(){
               this.contact = info; 
                              this.newContact ={};
                              this.isAddNewContact = false;
                              
                              this.addNewContact = function(){
                              this.isAddNewContact = true;
                              };
                              
                              this.saveContact = function(){
                              this.contact = this.newContact;
                              this.isAddNewContact = false;
                              }
               });

var info = {
firstName: 'John',
lastName:'Smith',
email: 'john@leanometry.com',
phone:'777.922.2321'
};