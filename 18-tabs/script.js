const tabsData = [
  {
    id: "tab1",
    title: "Tab 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis autem distinctio, molestias magni sunt sed consectetur blanditiis perferendis eveniet recusandae 1111",
  },
  {
    id: "tab2",
    title: "Tab 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis autem distinctio, molestias magni sunt sed consectetur blanditiis perferendis eveniet recusandae2222",
  },
  {
    id: "tab3",
    title: "Tab 3",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis autem distinctio, molestias magni sunt sed consectetur blanditiis perferendis eveniet recusandae 3333",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let activeTab = tabsData[0].id;

  function renderTabs() {
    const tabContainer = document.querySelector("#tabContainer");
    const contentContainer = document.querySelector("#tabContentContainer");

    tabsData.forEach((tab) => {
      const tabBtn = document.createElement("button");
      tabBtn.className = "tabLinks";
      tabBtn.textContent = tab.title;
      tabBtn.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabBtn);

      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.className = "tabContent";
      tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      contentContainer.appendChild(tabContent);
    });

    tabContainer.addEventListener("click", function (e) {
      if (e.target.matches(".tabLinks")) {
        const tabId = e.target.getAttribute("data-tab");

        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
    });
  }

  function openTab(tabId) {
    const tabContents = document.querySelectorAll(".tabContent");
    const tabLinks = document.querySelectorAll(".tabLinks");
    tabContents.forEach((tab) => tab.classList.remove("active"));
    tabLinks.forEach((tab) => tab.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    document
      .querySelector(`button[data-tab='${tabId}']`)
      .classList.add("active");
  }

  renderTabs();
  document.getElementById(activeTab).classList.add("active");
  document
    .querySelector(`button[data-tab='${activeTab}']`)
    .classList.add("active");
});
