const block = document.querySelectorAll('.block')
const flexGroup = document.querySelectorAll('.flex-group')

block.forEach((eachBlock, i) => {
    flexGroup[i].addEventListener('click', () => {
        const isActive = block[i].classList.toggle('active')
        const isExpanded = isActive ? 'true' : 'false';
        block[i].setAttribute('aria-expanded', isExpanded);
    })
})