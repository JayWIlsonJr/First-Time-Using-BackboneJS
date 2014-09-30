/* global describe, it */

(function () {
    'use strict';

    describe('Backbone Homework', function () {
        describe('Should have a list', function () {

            it('should be an array', function () {
              expect(titles).to.be.an('array');
            });

            it('should have a object(s) in the array', function () {
              expect(titles[0]).to.be.an('object');              
            });
        });

        describe('Should have HTML elements render to the page', function () {
          
          it('should have a <ul> render on the page', function () {
            expect($('ul.list_holder').length).to.equal(1);
          });

          it('should have a <li> render to the page', function() {
            expect($('li.single_item').length).to.equal(7);
          });

          it('should have a <input> render to the page', function() {
            expect($('input[type=search]').length).to.equal(1);
          })
        });
    });
})();








