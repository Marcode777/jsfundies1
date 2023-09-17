// var arr = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eigth"];

var newArr = [];

function scanner() {
    console.log('scanner triggered');
    setTimeout(function(){
        console.log('primary sTo triggered');
        var targets = document.querySelectorAll('a.nav-menu-button');
        for(var i = 0; i < targets.length; i++) {
            console.log('targets[i].textContent are', targets[i].textContent);
            setTimeout(function() {
                console.log('secondary sTo triggered');
                var targets = document.querySelectorAll('a.nav-menu-button');
                var newTargets = document.querySelectorAll('span.QuickLinks-quickLink');
                // for (var i = 0; i < targets.length; i++) {
                //     targets[i].innerHTML = arr[i];
                // }
                for(var j = 0; j < newTargets.length; j++) {
                    // console.log('newTargets[j]. are', newTargets[j]);
                    var newArr = [];
                    console.log('newTargets[j].textContent are', newTargets[j].textContent);
                    var newArr.push(newTargets[j].textContent);
                    // console.log('newArr is', newArr);
                }
                for(var i = 0; i < targets.length; i++) {
                    targets[i].innerHTML = newTargets[j].textContent;
                }
            }, 1300);
        }
    }, 1300);
}