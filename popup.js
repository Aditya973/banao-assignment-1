let title = document.getElementById("title");
let btn = document.getElementById("btn")

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.title;
}

btn.addEventListener("click",async()=>{
    let tabTitle = await getCurrentTab();
    title.innerText = tabTitle;
})
