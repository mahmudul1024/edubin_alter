function TransferName(that) {
  console.log(that);
  // console.log(that.parentNode.parentNode.firstChild.nextSibling.innerText)
  const Name = that.parentNode.parentNode.firstChild.nextSibling.innerText;
  // append the list item
  const listItem = document.getElementById("listId");

  // condition for not exceeding more than five
  const len = listItem.children.length + 1;
  if (len > 5) {
    alert("you can add maximum 5 playes");
    return;
  }

  //condition end

  const newElemnt = document.createElement("li");

  listItem.appendChild(newElemnt);

  newElemnt.innerText = Name;
}

// document.getElementById('cardDelegateId').addEventListener('click', function(event){

// // console.log(event.target.parentNode.parentNode.firstChild.nextSibling.innerText)
// const Name=event.target.parentNode.parentNode.firstChild.nextSibling.innerText

// // append the list item
// const listItem=document.getElementById('listId')
// const newElemnt =document.createElement('li')
// listItem.appendChild(newElemnt)
// newElemnt.innerText=Name

// })

document.getElementById("CalculateId").addEventListener("click", function () {
  const Stringlengh = document.getElementById("listId");
  // console.log(Stringlengh.childElementCount +1)

  const elemntsCount = Stringlengh.childElementCount;

  const perPlayer = parseInt(document.getElementById("perPlayerId").value);
  //this value should be inserted into the text field of expence
  const PlayerCost = elemntsCount * perPlayer;
  console.log(elemntsCount);
  console.log(perPlayer);
  console.log(PlayerCost);

  document.getElementById("expenseId").innerText = PlayerCost;
  // const expenceValue=parseInt(expenceString)
  //
});

document.getElementById("TotalBtn").addEventListener("click", function () {
  const PlayerExpense = parseInt(
    document.getElementById("expenseId").innerText
  );
  const managerCost = parseInt(document.getElementById("managerId").value);

  //  console.log(PlayerExpense,managerCost)
  const couchCost = parseInt(document.getElementById("couchId").value);

  const TotalCost = PlayerExpense + managerCost + couchCost;

  // console.log(TotalCost) this value should be inserted into total text field

  document.getElementById("FinalTotalId").innerText = TotalCost;
});
