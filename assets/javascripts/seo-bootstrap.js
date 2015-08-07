/**
 * Created by NEOGEEK on 30/7/2015.
 */
;(function(){
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['MainModule','ReferringPages', 'Referrers', 'BlockedIPs', 'Statistics', 'AnchorDistribution','BrokenLinks']);
    });
}());