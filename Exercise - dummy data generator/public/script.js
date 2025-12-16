console.log("Working");

const entbtn = document.getElementById("gen");

entbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    async function gendata() {

        const cont = await fetch('/p', { method: "post" });
        const data = await cont.text();

        alert(data)
    }
    gendata();
})


// gendata();
async function deldata() {
    const a = await fetch('/d', { method: "delete" });
    const b = await a.text()
    alert(b)
}