const latestArticle = await (await fetch("/latest.json")).json();
const recent = document.getElementById("recent-articles");
for (let i = 0; i < latestArticle.length; i++) {
    let ID = latestArticle[i].id;
    let title = latestArticle[i].title;
    let publishDate = latestArticle[i].publishedAt.slice(0, 10);
    let recBlock = recent.appendChild(document.createElement("div"));
    recBlock.className = "recent";
    let pubDateBlock = recBlock.appendChild(document.createElement("div"));
    pubDateBlock.className = "recent-date";
    pubDateBlock.innerText = publishDate;
    let titleBlock = recBlock.appendChild(document.createElement("div"));
    titleBlock.className = "recent-title";
    let link = titleBlock.appendChild(document.createElement("a"));
    link.href="/articles/" + ID + ".html";
    link.innerText = title;
}