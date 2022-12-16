/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

//Intl api (internacionalización de moneda y fechas)
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};

//web api
window
  .fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item) => {
      const image = document.createElement("img");
      image.src = baseUrl.concat(item.image);

      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "text-base";

      const price = document.createElement("div");
      price.className = "text-gray-600";
      price.textContent = formatPrice(item.price);

      const container = document.createElement("div");
      container.append(image, title, price);
      allItems.push(container);
    });

    appNode.append(...allItems);
  });
