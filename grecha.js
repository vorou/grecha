console.log('hi');
var target = document.querySelector('form');
console.log(target); 
var observer = new MutationObserver(function(mutations) {
    console.log('triggered');
    document.querySelectorAll('.td-menuitemname-l').forEach(x => {
        const nameSpan = x.querySelector('span.menuitemname');
        if(nameSpan === null)
            return;
        if(nameSpan.innerText === "Греча отварная рассыпчатая")
            x.style['background-color'] = '#f2ffa2';
    })  
}); 
var config = { attributes: true, childList: true, characterData: true }; 
observer.observe(target, config);
console.log('observing');