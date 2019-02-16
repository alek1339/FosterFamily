$('#showMenu').click(function () {
  $('#home').animate({ 'width': 'toggle' }, 500)
})

$('#hideMenu').click(function () {
  $('#home').animate({ 'width': 'toggle' }, 500)
})

function hideMenu() {
  $('#home').animate({ 'width': 'toggle' }, 500)
}

function goalsClicked() {
  let bckgImg = document.getElementById('bckgImg')

  let goalsFirstHalf = document.getElementsByClassName('goalsFirstHalf')[0]
  let goalsSecondHalf = document.getElementsByClassName('goalsSecondHalf')[0]

  let dayCareFirstHalf = document.getElementsByClassName('dayCareFirstHalf')[0]
  let dayCareSecondHalf = document.getElementsByClassName('dayCareSecondHalf')[0]
  let sundayWalksFirstHalf = document.getElementsByClassName('sundayWalksFirstHalf')[0]
  let sundayWalksSecondHalf = document.getElementsByClassName('sundayWalksSecondHalf')[0]
  let adoptedAnimalsFirstHalf = document.getElementsByClassName('adoptedAnimalsFirstHalf')[0]
  let adoptedAnimalsSecondHalf = document.getElementsByClassName('adoptedAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  goalsSecondHalf.style.display = 'block'
  goalsFirstHalf.style.display = 'block'

  sundayWalksFirstHalf.style.display = 'none'
  sundayWalksSecondHalf.style.display = 'none'
  dayCareFirstHalf.style.display = 'none'
  dayCareSecondHalf.style.display = 'none'
  adoptedAnimalsFirstHalf.style.display = 'none'
  adoptedAnimalsSecondHalf.style.display = 'none'
  contactsFirstHalf.style.display = 'none'
  contactsSecondHalf.style.display = 'none'
  bckgImg.style.backgroundImage = 'url(./images/slider_img3.jpg)'
  map.style.visibility = 'hidden'
}

function dayCareClicked() {
  let goalsFirstHalf = document.getElementsByClassName('goalsFirstHalf')[0]
  let goalsSecondHalf = document.getElementsByClassName('goalsSecondHalf')[0]

  let bckgImg = document.getElementById('bckgImg')
  let dayCareFirstHalf = document.getElementsByClassName('dayCareFirstHalf')[0]
  let dayCareSecondtHalf = document.getElementsByClassName('dayCareSecondHalf')[0]
  let sundayWalksFirstHalf = document.getElementsByClassName('sundayWalksFirstHalf')[0]
  let sundayWalksSecondHalf = document.getElementsByClassName('sundayWalksSecondHalf')[0]
  let adoptedAnimalsFirstHalf = document.getElementsByClassName('adoptedAnimalsFirstHalf')[0]
  let adoptedAnimalsSecondHalf = document.getElementsByClassName('adoptedAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  goalsSecondHalf.style.display = 'none'
  goalsFirstHalf.style.display = 'none'
  sundayWalksFirstHalf.style.display = 'none'
  sundayWalksSecondHalf.style.display = 'none'
  adoptedAnimalsFirstHalf.style.display = 'none'
  adoptedAnimalsSecondHalf.style.display = 'none'
  contactsFirstHalf.style.display = 'none'
  contactsSecondHalf.style.display = 'none'

  dayCareFirstHalf.style.display = 'block'
  dayCareSecondtHalf.style.display = 'block'
  bckgImg.style.backgroundImage = 'url(./images/slider_img2.jpg)'
  map.style.visibility = 'hidden'
}

function forAdoption() {
  let goalsFirstHalf = document.getElementsByClassName('goalsFirstHalf')[0]
  let goalsSecondHalf = document.getElementsByClassName('goalsSecondHalf')[0]
  let bckgImg = document.getElementById('bckgImg')
  let dayCareFirstHalf = document.getElementsByClassName('dayCareFirstHalf')[0]
  let dayCareSecondtHalf = document.getElementsByClassName('dayCareSecondHalf')[0]
  let sundayWalksFirstHalf = document.getElementsByClassName('sundayWalksFirstHalf')[0]
  let sundayWalksSecondHalf = document.getElementsByClassName('sundayWalksSecondHalf')[0]
  let adoptedAnimalsFirstHalf = document.getElementsByClassName('adoptedAnimalsFirstHalf')[0]
  let adoptedAnimalsSecondHalf = document.getElementsByClassName('adoptedAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  goalsSecondHalf.style.display = 'none'
  goalsFirstHalf.style.display = 'none'
  dayCareFirstHalf.style.display = 'none'
  dayCareSecondtHalf.style.display = 'none'
  adoptedAnimalsFirstHalf.style.display = 'none'
  adoptedAnimalsSecondHalf.style.display = 'none'
  contactsFirstHalf.style.display = 'none'
  contactsSecondHalf.style.display = 'none'

  sundayWalksFirstHalf.style.display = 'block'
  sundayWalksSecondHalf.style.display = 'block'
  bckgImg.style.backgroundImage = 'url(./images/care/3.jpg)'
  map.style.visibility = 'hidden'
}

function adoptedAnimalsClicked() {
  let goalsFirstHalf = document.getElementsByClassName('goalsFirstHalf')[0]
  let goalsSecondHalf = document.getElementsByClassName('goalsSecondHalf')[0]
  let bckgImg = document.getElementById('bckgImg')
  let dayCareFirstHalf = document.getElementsByClassName('dayCareFirstHalf')[0]
  let dayCareSecondtHalf = document.getElementsByClassName('dayCareSecondHalf')[0]
  let sundayWalksFirstHalf = document.getElementsByClassName('sundayWalksFirstHalf')[0]
  let sundayWalksSecondHalf = document.getElementsByClassName('sundayWalksSecondHalf')[0]
  let adoptedAnimalsFirstHalf = document.getElementsByClassName('adoptedAnimalsFirstHalf')[0]
  let adoptedAnimalsSecondHalf = document.getElementsByClassName('adoptedAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  goalsSecondHalf.style.display = 'none'
  goalsFirstHalf.style.display = 'none'
  dayCareFirstHalf.style.display = 'none'
  dayCareSecondtHalf.style.display = 'none'
  sundayWalksFirstHalf.style.display = 'none'
  sundayWalksSecondHalf.style.display = 'none'
  contactsFirstHalf.style.display = 'none'
  contactsSecondHalf.style.display = 'none'

  adoptedAnimalsFirstHalf.style.display = 'block'
  adoptedAnimalsSecondHalf.style.display = 'block'
  bckgImg.style.backgroundImage = 'url(./images/galeries/51174862_1026629644199484_998794679044538368_n.jpg)'
  map.style.visibility = 'hidden'
}

function contactsClicked() {
  let goalsFirstHalf = document.getElementsByClassName('goalsFirstHalf')[0]
  let goalsSecondHalf = document.getElementsByClassName('goalsSecondHalf')[0]
  let dayCareFirstHalf = document.getElementsByClassName('dayCareFirstHalf')[0]
  let dayCareSecondtHalf = document.getElementsByClassName('dayCareSecondHalf')[0]
  let sundayWalksFirstHalf = document.getElementsByClassName('sundayWalksFirstHalf')[0]
  let sundayWalksSecondHalf = document.getElementsByClassName('sundayWalksSecondHalf')[0]
  let adoptedAnimalsFirstHalf = document.getElementsByClassName('adoptedAnimalsFirstHalf')[0]
  let adoptedAnimalsSecondHalf = document.getElementsByClassName('adoptedAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  goalsSecondHalf.style.display = 'none'
  goalsFirstHalf.style.display = 'none'
  dayCareFirstHalf.style.display = 'none'
  dayCareSecondtHalf.style.display = 'none'
  sundayWalksFirstHalf.style.display = 'none'
  sundayWalksSecondHalf.style.display = 'none'
  adoptedAnimalsFirstHalf.style.display = 'none'
  adoptedAnimalsSecondHalf.style.display = 'none'

  contactsFirstHalf.style.display = 'block'
  contactsSecondHalf.style.display = 'block'

  map.style.visibility = 'visible'
}
