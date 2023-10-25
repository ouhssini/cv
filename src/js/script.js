var supportIcon = document.getElementById('support-icon')
var socialMedia =document.getElementById('social-media')

supportIcon.addEventListener('click', () => {
if (socialMedia.classList.contains('hidden')){
    socialMedia.classList.remove('hidden')
    supportIcon.style.color = 'var(--main-color)'
}
else {
    socialMedia.classList.add('hidden')
    supportIcon.style.color = 'black'
}})