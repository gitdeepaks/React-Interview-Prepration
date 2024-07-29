document.addEventListener("DOMContentLoaded", function () {
  const app = document.querySelector(".app");
  let products = [];
  let page = 1;

  async function fetchProd() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      if (data && data.products) {
        products = data.products;

        console.log(products);
        render();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  function render() {
    app.innerHTML = "";

    const prodContainer = document.createElement("div");
    prodContainer.classList.add("products");

    const pagination = document.createElement("div");
    pagination.classList.add("pagination");

    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((prod) => {
        const prodElement = document.createElement("div");
        prodElement.classList.add("products__single");
        prodElement.innerHTML = `
                <img src="${prod.thumbnail}" alt="${prod.title}"/>
                <span>${prod.title}</span>
            `;
        prodContainer.appendChild(prodElement);
      });

      // Pagination buttons
      if (page > 1) {
        const prevButton = createPaginationButton("<", () => {
          selectPageHandler(page - 1);
        });
        pagination.appendChild(prevButton);
      }

      for (let i = 0; i < products.length / 10; i++) {
        const pageButton = createPaginationButton(
          i + 1,
          () => {
            selectPageHandler(i + 1);
          },
          page === i + 1
        );
        pagination.appendChild(pageButton);
      }

      if (page < products.length / 10) {
        const nextButton = createPaginationButton(">", () => {
          selectPageHandler(page + 1);
        });
        pagination.appendChild(nextButton);
      }
    }
    app.appendChild(prodContainer);
    app.appendChild(pagination);
  }

  function createPaginationButton(text, clickHandler, isSelected = false) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", clickHandler);
    if (isSelected) {
      button.classList.add("pagination_selected");
    }
    return button;
  }

  function selectPageHandler(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      page = selectedPage;
      render();
    }
  }

  fetchProd();
});
