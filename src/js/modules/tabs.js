const tabs = (headerTabsSelector, tabSelector, contentSelector, activeTab) => {
    const headerTabs = document.querySelector(headerTabsSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector),
            activeTab = document.querySelector(activeTab);

    function hideContent() {
        content.forEach(item => {item.style.display = "none";});
        tab.forEach(item => {item.classList.remove(activeTab);});
    }
    function showContent(i) {
        content[i].style.display = "block";
        tab[i].classList.add(activeTab);
    }


    hideContent();
    showContent(0);

};

export default tabs;