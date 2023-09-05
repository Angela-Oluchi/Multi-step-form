let nextBtn = document.getElementById("next-btn")
let genSteps = document.getElementById("all-step")

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        genSteps.classList.add('active')
    })
}