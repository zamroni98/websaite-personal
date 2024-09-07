document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi") ? (
      parent.querySelector("deskripsi").innerHTML
    ) : (
      <i>tidak ada informasi yang tersedia</i>
    );

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();
  });
});
