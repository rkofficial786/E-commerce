
//active
function active(button){
    let menu = document.querySelectorAll(".nav2")
    let ul = document.querySelectorAll("ul")
    let buttons = document.querySelectorAll("li")

    for(let i=0 ; i<buttons.length ; i++){
        buttons[i].classList.remove('active')
    }

    button.classList.add('active')
}

//view more

window.onload = function() {
    var itemsToShow = 5; // Change this number to control how many items are shown by default
    var items = document.querySelectorAll('.product-list .product');
    for (var i = 0; i < itemsToShow; i++) {
      items[i].classList.add('visible');
    }
  
    var viewMoreButton = document.querySelector('.view-more');
    viewMoreButton.addEventListener('click', function() {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.add('visible');
      }
      viewMoreButton.style.display = 'none';
    });
  };


//search
  
//   document.getElementById('search').addEventListener('keyup', searchfun);

//   function searchfun(event) {
// if (event.keyCode === 13) {
// let search_input = document.getElementById('search').value.toUpperCase();
// let container = document.querySelector('.search-container');
// let product_list = document.getElementsByClassName('product-list');
// let product_section = document.getElementsByClassName('product-section');
// let products = document.getElementsByClassName('product');

// for (var i = 0; i < products.length; i++) {
// let h3 = products[i].getElementsByTagName('h3')[0];

// if (h3) {
//   let textvalue = h3.textContent || h3.innerHTML;
//   if (textvalue.toUpperCase().indexOf(search_input) > -1) {
//     products[i].style.display = "";
//   } else {
//     products[i].style.display = "none";
//   }
// }
// }
// }
// }



function searchfun() {
    //to make it visible first
    var items = document.querySelectorAll('.product-list .product');
    for (var i = 0; i < items.length; i++) {
        items[i].classList.add('visible');
      }

    let search_input = document.getElementById('search').value.toUpperCase()
    let container = document.querySelector('.container');
    let product_list = document.getElementsByClassName('product-list')
    let products = document.getElementsByClassName('product')

    for (var i = 0; i < products.length; i++) {
        let h1 = products[i].getElementsByTagName('h3')[0];

        if (h1) {
            let textvalue = h1.textContent || h1.innerHTML;
            if (textvalue.toUpperCase().indexOf(search_input) > -1) {
                products[i].style.display = "";
            }

            else {
                products[i].style.display = "none";
            }

        }
    }
}
  



// title line break

const productHeadings = document.querySelectorAll('.product h3');

productHeadings.forEach((heading) => {
  let text = heading.textContent;
  let newText = '';

  for (let i = 0; i < text.length; i++) {
    newText += text[i];

    if ((i + 1) % 25 === 0) {
      newText += '<br>';
    }
  }

  heading.innerHTML = newText;
});



// filter 
function filter(filter) {
    const products = document.getElementsByClassName('product');
    
    for (let i = 0; i < products.length; i++) {
        let h3 = products[i].getElementsByTagName('h3')[0];
        let textvalue = h3.textContent || h3.innerHTML;
        if (textvalue.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
}



