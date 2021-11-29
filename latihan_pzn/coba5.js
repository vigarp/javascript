const listArticle = [
    {
        title: "Covid semakin menurun",
        content: "Kesehatan",
        writer: "Simon Alef",
    },
    {
        title: "DPR ada gedung di Senayan",
        content: "Politik",
        writer: "Daud Sihombing",
    },
    {
        title: "Hewan ras baru ditemukan",
        content: "Fauna",
        writer: "Teguh Saputra",
    }
];

const {title, content, writer} = listArticle[2];
const detailArticle = {
    title,
    writer,
    content,
    author: "Republika",
    like: "100k",
}

console.log(detailArticle);