let nextBtn = document.getElementById("next-btn")
let genSteps = document.getElementById("all-step")
let check = addDetails.getElementById("check")
let addDetails = document.querySelector(".add-details")

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        genSteps.classList.add('active')
    })
}
if (check) {
    check.addEventListener('click', () => {
        addDetails.classList.add('active')
    })
}