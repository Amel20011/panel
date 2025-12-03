// --- KONFIGURASI PENTING ---
// Ganti dengan nomor WhatsApp Anda (format: 628xxx)
const nomerWA = "13658700681"; 
// Ganti harga paket Unlimited (dalam Rupiah)
const unlimitedPrice = 15000; 
const defaultCpu = "30% CPU"; 
const defaultStorage = "1GB Storage"; 

// --- ELEMENTS ---
const productContainer = document.getElementById('product-list');

// --- FUNCTIONS ---
// Fungsi Format Rupiah
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

// Logic Harga: 1GB = 2k, Setiap naik 1GB tambah 1k
const basePrice = 2000;
const priceIncrement = 1000;
const maxGB = 8; // Menampilkan paket 1GB sampai 8GB

// --- GENERATE PRODUCTS ---

// 1. Loop untuk generate paket 1GB - 8GB
for (let i = 1; i <= maxGB; i++) {
    let ram = i + "GB RAM";
    // CPU dinaikkan sedikit untuk variasi
    let cpu = i === 1 ? defaultCpu : `${30 + (i * 5)}% CPU`; 
    let storage = i + "GB Storage";
    
    // Rumus Harga
    let price = basePrice + ((i - 1) * priceIncrement);
    let message = `Halo Liviaa SHOP, saya ingin beli Panel Pterodactyl ${ram} seharga ${formatRupiah(price)}`;
    let linkWA = `https://wa.me/${nomerWA}?text=${encodeURIComponent(message)}`;

    productContainer.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="product-card">
                <div class="text-center">
                    <div class="mb-3">
                        <span class="badge rounded-pill text-bg-dark">${i === 1 ? 'Starter' : `Paket ${i}GB`}</span>
                    </div>
                    <div class="ram-badge">${formatRupiah(price)}<small>/bln</small></div>
                </div>
                <ul class="feature-list mt-4">
                    <li><i class="fas fa-check-circle"></i> ${cpu}</li>
                    <li><i class="fas fa-check-circle"></i> ${ram}</li>
                    <li><i class="fas fa-check-circle"></i> ${storage}</li>
                    <li><i class="fas fa-check-circle"></i> Anti-Theft</li>
                    <li><i class="fas fa-check-circle"></i> Support 24/7</li>
                </ul>
                <a href="${linkWA}" target="_blank" class="btn btn-buy">
                    Pilih Paket
                </a>
            </div>
        </div>
    `;
}

// 2. Tambahkan Paket UNLIMITED Manual (dengan efek Blinking/Pulsating)
let unlimitedMsg = `Halo Liviaa SHOP, saya mau beli Panel Pterodactyl UNLIMITED seharga ${formatRupiah(unlimitedPrice)}`;
let unlimitedLink = `https://wa.me/${nomerWA}?text=${encodeURIComponent(unlimitedMsg)}`;

productContainer.innerHTML += `
    <div class="col-12 col-md-4 col-lg-3">
        <div class="product-card card-unlimited">
            <div class="text-center">
                <div class="mb-3">
                    <span class="badge rounded-pill text-bg-light text-dark">BEST VALUE</span>
                </div>
                <div class="ram-badge">${formatRupiah(unlimitedPrice)}<small>/bln</small></div>
            </div>
            <ul class="feature-list mt-4">
                <li><i class="fas fa-star text-warning"></i> UNLIMITED CPU</li>
                <li><i class="fas fa-star text-warning"></i> UNLIMITED RAM</li>
                <li><i class="fas fa-star text-warning"></i> UNLIMITED Storage</li>
                <li><i class="fas fa-check-circle"></i> Prioritas Support</li>
                <li><i class="fas fa-check-circle"></i> Keamanan Berlapis</li>
            </ul>
            <a href="${unlimitedLink}" target="_blank" class="btn btn-buy">
                Pilih Paket
            </a>
        </div>
    </div>
`;
