const sections = [
  {
    title: "Section 1",
    constent: "Content for section 1",
  },
  {
    title: "Section 2",
    constent: "Content for section 2",
  },
  {
    title: "Section 3",
    constent: "Content for section 3",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const accContainer = document.querySelector("#accordian");

  sections.forEach((section, index) => {
    const sectionItem = document.createElement("div");
    sectionItem.classList.add("accordian-item");

    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("accordian-header");
    sectionHeader.textContent = section.title;

    const sectionContent = document.createElement("div");
    sectionContent.classList.add("accordian-content");
    sectionContent.innerHTML = `<p>${section.constent}</p>`;

    sectionItem.appendChild(sectionHeader);
    sectionItem.appendChild(sectionContent);
    accContainer.appendChild(sectionItem);
    if (index === 0) {
      sectionItem.classList.add("active");
      sectionContent.style.display = "block";
    }
  });
  accContainer.addEventListener("click", function (e) {
    const header = e.target.closest(".accordian-header");
    if (!header) {
      return;
    }
    const sectionItem = header.parentNode;
    const content = sectionItem.querySelector(".accordian-content");
    const isActive = sectionItem.classList.contains("active");

    document.querySelectorAll(".accordian-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordian-content").style.display = "none";
    });

    if (!isActive) {
      sectionItem.classList.add("active");
      content.style.display = "block";
    }
  });
});
