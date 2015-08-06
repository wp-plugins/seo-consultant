;(function(){
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['MainModule','ReferringPages', 'Referrers', 'BlockedIPs', 'Statistics', 'AnchorDistribution','BrokenLinks']);
    });
}());