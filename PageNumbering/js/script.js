/*
* Author: Hyekyung Ko 
* StudentID : 300323007
* Course: CSIS 3380
*/
const MAX_NUMBER = 10;
const contactList = document.querySelectorAll('.contact-list');
const contactItems = document.querySelectorAll(".contact-item.cf");
const contactItemsSize = contactItems.length;

/*
console.log(contactList);
console.log("*** contactList[0]  ********");
console.log(contactList[0]);
console.log("*** contactList[0].children  ********");
console.log(contactList[0].children);
console.log(contactItems);
*/

//Display specific page's contact lists
//It shows maximum 10 lists.
function displayList(pageNumber){
    console.log("displayList:" + pageNumber);
    startIndex = (pageNumber - 1) * MAX_NUMBER;
    endIndex = startIndex + MAX_NUMBER -1;
    if(endIndex >= contactItemsSize) {
        endIndex = contactItemsSize -1;
    }
    console.log(startIndex + ", " + endIndex);

    let index = 0;
    while( index < contactItemsSize){
        if( index >= startIndex && index <= endIndex){
            contactItems[index].style.display = 'block';
        }else{
            contactItems[index].style.display = 'none';
        }
        index++;
    }
}

/*
      <ul class="pagination">
        <li><a href="#" onclick="selectPage(1)">1</a></li>
        <li><a href="#" onclick="selectPage(2)">2</a></li>
        <li><a href="#" onclick="selectPage(3)">3</a></li>
        <li><a href="#" onclick="selectPage(4)">4</a></li>
        <li><a href="#" onclick="selectPage(5)">5</a></li>
        </ul>
*/
//It add button to HTML dynamically
function addPaginationBtn(){
    let numOfBtn = Math.ceil(contactItemsSize / MAX_NUMBER);

    const ul = document.createElement("ul");
    for(var i = 0; i < numOfBtn; i++){

        ul.className = "pagination";
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = '#';
        
        a.innerText = i+1;
                                                     
        li.appendChild(a);
        ul.appendChild(li);
        
        const page = document.querySelector('.page');
        page.appendChild(ul);
    }  

    //addEventListener
    const attribute = document.querySelectorAll('a');        
    for(var i = 0; i < numOfBtn; i++){
        attribute[i].addEventListener('click', (e) => {
            console.log("target: " + e.target + ", text:" + e.target.innerText);
            displayList(Number(e.target.innerText));
        });        
    }  

    let body = document.querySelector('body');
   
}

//add button to HTML dynamically
addPaginationBtn();
//show first page's contacts list
displayList(1);

