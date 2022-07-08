const rating = document.getElementsByClassName("rating");
const damage = document.getElementsByClassName("damage");

//If the rating is 1 Damage is = No Damage
//if Rating is 2/5 3/5 or 4/5 Damage is = Minor Damage
//if Rating is 5/5 Damage is = Major Damage

for (var i = 0; i < rating.length; i++) {
  if (rating[i].innerHTML == "1/5") {
    damage[i].innerHTML = "No Damage";
    damage[i].style.backgroundColor = "#29c40a";
  } else if (
    rating[i].innerHTML == "2/5" ||
    rating[i].innerHTML == "3/5" ||
    rating[i].innerHTML == "4/5"
  ) {
    damage[i].innerHTML = "Minor Damage";
    damage[i].style.backgroundColor = "rgb(255, 174, 0)";
  } else if (rating[i].innerHTML == "5/5") {
    damage[i].innerHTML = "Major Damage";
    damage[i].style.backgroundColor = "red";
  }
}
