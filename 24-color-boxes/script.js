const boxConfig = [
  {
    color: "red",
    width: "33.33%",
  },
  {
    color: "green",
    width: "33.33%",
  },
  {
    color: "blue",
    width: "33.33%",
  },
  {
    color: "yellow",
    width: "50%",
  },
  {
    color: "orange",
    width: "50%",
  },
  {
    color: "purple",
    width: "70%",
  },
  {
    color: "pink",
    width: "30%",
  },
  {
    color: "#262666",
    width: "30%",
  },
  {
    color: "black",
    width: "30%",
  },
  {
    color: "gray",
    width: "40%",
  },
];

const container = document.createElement("div");

container.classList = "container";

boxConfig.forEach((config, index) => {
  const box = document.createElement("div");
  box.classList = "box";
  box.style.backgroundColor = config.color;
  box.style.width = config.width;

  container.appendChild(box);
});

container.addEventListener("click", (e) => {
  const clickElement = e.target;

  if (clickElement.classList.contains("box")) {
    const index = Array.from(container.children).indexOf(clickElement);
    const config = boxConfig[index];
    alert(`Box ${index + 1} is ${config.color} in color`);
  }
});

document.body.appendChild(container);
