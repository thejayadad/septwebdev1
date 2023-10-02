
function toggletext(){
    const hiddentext = document.getElementById('hidden-text')
    if(hiddentext.style.display === 'none'){
        hiddentext.style.display = "block";
    } else {
        hiddentext.style.display = "none";
    }
}