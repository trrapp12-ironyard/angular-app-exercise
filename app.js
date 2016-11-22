var app = angular.module('app', [])

app.controller("SuperDuckCtrl", SuperDuckCtrl)

function SuperDuckCtrl () {
  var self = this;
  self.duckname;
}

app.directive("superDuck", function() {
  return {
    restrict: "ACE",
    scope: {
      text: '='
    },
    link: function(scope, element, attrs) {
      scope.duckname = attrs.duckname || "Default Duck"
    },
    template: "<div>Please tell me your coding woes so we can paddle to the finish line together!<br>Yours truly, {{duckname}}</div>"

  }
})
