console.log("script")
var item = document.getElementById("inputElement");
var btn = document.getElementById("btn")
var container = document.getElementById("parent");

item.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {  //add item when user press enter
    addItem()
  }
})
btn.addEventListener("click", addItem);  //add item when user click button
btn.addEventListener("mouseover", () => document.getElementById("write").src = "yellowPencil.png");
btn.addEventListener("mouseout", () => document.getElementById("write").src = "pencil.png")

function addItem() {
  if (item.value) {
    if (localStorage.items === undefined)
    {
      let arr = []
      arr.push(item.value);
      localStorage.setItem('items', JSON.stringify(arr));
      document.location.reload(true)
    }
    else
      {
      let arr = JSON.parse(localStorage.getItem('items'));
      arr.push(item.value);
      localStorage.setItem('items', JSON.stringify(arr));
      document.location.reload(true)
    }
  }
}

function displayItem() {
  let arr = JSON.parse(localStorage.getItem('items'));
  console.log(arr)
  for (i of arr) {
    let text = document.createTextNode(i);
    let box = document.createElement('div');

    let delText = document.createTextNode("X");
    var delOpt = document.createElement('button');
    delOpt.setAttribute('id', 'cross')
    delOpt.appendChild(delText);
    delOpt.classList.add("delBtn")
    box.appendChild(text);
    box.appendChild(delOpt);
    box.classList.add("addedItems");
    container.appendChild(box);

    delOpt.addEventListener("click", deleteItem)
  }
}

function deleteItem(e) {
  let arr = JSON.parse(localStorage.getItem('items'));
  e.target.parentElement.remove()
  let text = e.target.parentElement.innerText;
  text = text.slice(0, text.length - 1)
  arr.splice(arr.indexOf(text),1)
  console.log(arr)
  localStorage.setItem("items",JSON.stringify(arr))
 document.location.reload(true)
}

window.addEventListener("load", displayItem)
