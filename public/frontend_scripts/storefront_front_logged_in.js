//FRONT END JS FOR PRACTICE STORE

document.addEventListener('DOMContentLoaded', (event) => {
  fetch("./jsonFiles/items.json")
    .then(response => {
      return response.json();
    })
    .then(
      data => {
        //document.getElementById("footer").innerHTML = JSON.stringify(data)
        let myJson = JSON.parse(JSON.stringify(data))
        let count = 0;
        myJson.All.forEach(element => {
          console.log(element.name);
          document.getElementsByClassName("product_name")[count].innerHTML = element.name;
          document.getElementsByClassName("product_id")[count].innerHTML = element.product_id;
          document.getElementsByClassName("product_price")[count].innerHTML = element.price + " kr";
          count += 1;
        })
      }
    );
  var e = document.getElementById("mugsDropDown");
  e.addEventListener("change", (event) => {
    //window.location.href = e.options[e.selectedIndex].text;
    if (e.options[e.selectedIndex].text == "All categories") {
      fetch("./jsonFiles/items.json")
        .then(response => {
          return response.json();
        })
        .then(
          data => {
            //document.getElementById("footer").innerHTML = JSON.stringify(data)
            let myJson = JSON.parse(JSON.stringify(data))
            let count = 0;
            clearFooter();
            myJson.All.forEach(element => {
              console.log(element.name);
              document.getElementsByClassName("product_name")[count].innerHTML = element.name;
              document.getElementsByClassName("product_id")[count].innerHTML = element.product_id;
              document.getElementsByClassName("product_price")[count].innerHTML = element.price + " kr";
              count += 1;
            })
          }
        );
    }
    if (e.options[e.selectedIndex].text == "Computers") {
      fetch("./jsonFiles/items.json")
        .then(response => {
          return response.json();
        })
        .then(
          data => {
            //document.getElementById("footer").innerHTML = JSON.stringify(data)
            let myJson = JSON.parse(JSON.stringify(data))
            let count = 0;
            clearFooter();
            myJson.Computers.forEach(element => {
              console.log(element.name);
              document.getElementsByClassName("product_name")[count].innerHTML = element.name;
              document.getElementsByClassName("product_id")[count].innerHTML = element.product_id;
              document.getElementsByClassName("product_price")[count].innerHTML = element.price + " kr";
              count += 1;
            })
          }
        );
    }
    if (e.options[e.selectedIndex].text == "Phones") {
      fetch("./jsonFiles/items.json")
        .then(response => {
          return response.json();
        })
        .then(
          data => {
            //document.getElementById("footer").innerHTML = JSON.stringify(data)
            let myJson = JSON.parse(JSON.stringify(data))
            let count = 0;
            clearFooter();
            myJson.Phones.forEach(element => {
              console.log(element.name);
              document.getElementsByClassName("product_name")[count].innerHTML = element.name;
              document.getElementsByClassName("product_id")[count].innerHTML = element.product_id;
              document.getElementsByClassName("product_price")[count].innerHTML = element.price + " kr";
              count += 1;
            })
          }
        );
    }
    if (e.options[e.selectedIndex].text == "Screens") {
      fetch("./jsonFiles/items.json")
        .then(response => {
          return response.json();
        })
        .then(
          data => {
            //document.getElementById("footer").innerHTML = JSON.stringify(data)
            let myJson = JSON.parse(JSON.stringify(data))
            let count = 0;
            clearFooter();
            myJson.Screens.forEach(element => {
              console.log(element.name);
              document.getElementsByClassName("product_name")[count].innerHTML = element.name;
              document.getElementsByClassName("product_id")[count].innerHTML = element.product_id;
              document.getElementsByClassName("product_price")[count].innerHTML = element.price + " kr";
              count += 1;
            })
          }
        );
    }
    if (e.options[e.selectedIndex].text == "TV") {
      fetch("./jsonFiles/items.json")
        .then(response => {
          return response.json();
        })
        .then(
          data => {
            //document.getElementById("footer").innerHTML = JSON.stringify(data)
            let myJson = JSON.parse(JSON.stringify(data))
            let count = 0;
            clearFooter();
            myJson.TV.forEach(element => {
              console.log(element.name);
              document.getElementsByClassName("product_name")[count].innerHTML = element.name;
              document.getElementsByClassName("product_id")[count].innerHTML = element.product_id;
              document.getElementsByClassName("product_price")[count].innerHTML = element.price + " kr";
              count += 1;
            })
          }
        );
    }
    if (e.options[e.selectedIndex].text == "Headphones") {
      fetch("./jsonFiles/items.json")
        .then(response => {
          return response.json();
        })
        .then(
          data => {
            //document.getElementById("footer").innerHTML = JSON.stringify(data)
            let myJson = JSON.parse(JSON.stringify(data))
            let count = 0;
            clearFooter();
            myJson.Headphones.forEach(element => {
              console.log(element.name);
              document.getElementsByClassName("product_name")[count].innerHTML = element.name;
              document.getElementsByClassName("product_id")[count].innerHTML = element.product_id;
              document.getElementsByClassName("product_price")[count].innerHTML = element.price + " kr";
              count += 1;
            })
          }
        );
    }
  })
})

function buildJson(name, product_id, price, sale) {
  let toBuild = "";
  toBuild += '{ "name":"' + name + '", "product_id":"' + product_id + '", "price":"' + price + '", "sale":"' + sale + '"}';
  return toBuild;
}

function clearFooter() {
  let count = 0;
  for (count = 0; count < document.getElementsByClassName("product_name").length; count = count + 1) {
    document.getElementsByClassName("product_name")[count].innerHTML = "";
    document.getElementsByClassName("product_id")[count].innerHTML = "";
    document.getElementsByClassName("product_price")[count].innerHTML = "";
  }
}