// Fungsi untuk scroll kembali ke atas
// function backToStart() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   // Tampilkan tombol ketika halaman discroll
//   window.onscroll = function () {
//     var button = document.getElementById("backToStart");
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       button.style.display = "block";
//     } else {
//       button.style.display = "none";
//     }
//   };



// Form
// document.getElementById('contact-form').addEventListener('submit', function (event) {
//   event.preventDefault();
//   var nameProduct = document.getElementById('nameProduct').value;
//   var name = document.getElementById('name').value;
//   var address = document.getElementById('address').value;
//   var message = document.getElementById('message').value;

//   // Menyusun pesan dengan informasi nama, alamat, dan pesan
//   var whatsappMessage = 'Nama Produk: ' + nameProduct +  '\nNama Pembeli: ' + name + '\nAlamat: ' + address + '\nPesan: ' + message;

//   var whatsappURL = 'https://wa.me/6281288230894?text=' + encodeURIComponent(whatsappMessage);
//   window.open(whatsappURL, '_blank');
// });




// Menambahkan event listener ke ikon panah
document.querySelector('.fas fa-chevron-down').addEventListener('click', function () {
  toggleDropdown();
});

// Menambahkan event listener ke ikon panah
document.querySelector('.fas fa-chevron-down').addEventListener('click', function () {
  toggleDropdown();
});


function toggleEWalletDropdown() {
  var dropdown = document.getElementById("ewalletDropdown");
  dropdown.classList.toggle("show");
}

function toggleTransferVADropdown() {
  var dropdown = document.getElementById("transferBankDropdown");
  dropdown.classList.toggle("show");
}

function toggleTransferBankDropdown() {
  var dropdown = document.getElementById("transferBankDropdown2");
  dropdown.classList.toggle("show");
}


// Tutup dropdown jika pengguna mengklik di luar dropdown atau ikon panah
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-toggle')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

