export interface AnimeStory {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const storyCategories = [
  "Romance", "Comedy", "Adventure", "Drama", "Slice of Life", 
  "Action", "Fantasy", "Mystery", "Horror", "Sci-Fi"
];

export const animeStories: AnimeStory[] = [
  // Romance Stories (15)
  {
    id: "1",
    title: "Ketika Sakura Mekar di Musim Dingin",
    category: "Romance",
    excerpt: "Cerita tentang cinta yang mekar di tengah musim dingin yang dingin, seperti bunga sakura yang tak pernah menyerah.",
    content: `Di sebuah sekolah menengah di Tokyo, Yuki selalu merasa kesepian di tengah keramaian. Hingga suatu hari, dia bertemu dengan Hana, gadis transfer yang selalu membawa buku tentang bunga sakura.

"Tahukah kamu," kata Hana sambil menunjukkan gambar sakura di bukunya, "bunga sakura bisa mekar bahkan di musim dingin jika diberi cinta yang cukup?"

Yuki tertawa kecil, "Itu tidak mungkin. Sakura mekar di musim semi."

"Mungkin," Hana tersenyum, "tapi cinta bisa membuat yang mustahil menjadi mungkin."

Sejak hari itu, Yuki mulai memperhatikan hal-hal kecil yang sebelumnya tidak pernah dia sadari. Cara Hana tersenyum saat membaca, bagaimana dia selalu membagi bekalnya dengan kucing-kucing liar, dan kehangatan yang selalu dia bawa ke mana pun dia pergi.

Suatu hari di tengah musim dingin yang paling dingin, Yuki menemukan sebuah pohon sakura kecil di taman sekolah yang sedang berbunga. Dia ingat kata-kata Hana dan menyadari bahwa cintanya pada gadis itu telah membuat mustahil menjadi mungkin.

"Hana," bisiknya pada angin dingin, "kamu benar. Cinta bisa membuat sakura mekar kapan saja."`,
    author: "Tanaka Mei",
    publishDate: "2024-01-15",
    readTime: "5 menit",
    image: "/placeholder.svg",
    tags: ["romance", "school", "winter", "sakura"]
  },
  {
    id: "2",
    title: "Surat Cinta dari Masa Depan",
    category: "Romance",
    excerpt: "Akira menerima surat cinta dari dirinya sendiri 10 tahun kemudian, yang berisi petunjuk untuk menemukan cinta sejatinya.",
    content: `Akira hampir tidak percaya ketika dia menemukan surat dengan tulisan tangannya sendiri di dalam loker sekolah. Yang lebih aneh lagi, surat itu berasal dari "Akira masa depan" dan berisi instruksi yang sangat spesifik.

"Kepada diriku yang lebih muda," demikian surat itu dimulai, "jika kamu membaca ini, berarti waktunya telah tiba. Pergi ke taman kota setiap hari Rabu pukul 3 sore. Duduk di bangku ketiga dari kiri. Bawa buku matematika. Dan yang paling penting - jangan lupa tersenyum."

Meskipun merasa aneh, Akira memutuskan untuk mengikuti instruksi tersebut. Rabu pertama, tidak terjadi apa-apa. Rabu kedua, sama saja. Tapi di Rabu ketiga, seorang gadis cantik dengan kacamata tiba-tiba duduk di sebelahnya.

"Permisi," kata gadis itu, "apa kamu bisa membantuku dengan soal matematika ini?"

Ternyata gadis itu bernama Rina, dan dia selalu kesulitan dengan matematika. Akira yang kebetulan sangat pandai matematika dengan senang hati membantunya. Pertemuan mereka di taman menjadi rutinitas mingguan yang sangat ditunggu-tunggu.

Bulan demi bulan berlalu, dan hubungan mereka semakin dekat. Hingga suatu hari, Rina berkata, "Tahukah kamu, Akira? Aku selalu berharap suatu hari ada seseorang yang akan duduk di bangku itu dan membantuku dengan matematika. Seperti takdir yang indah."

Akira tersenyum, mengingat surat dari masa depannya. Mungkin kadang-kadang, cinta memang perlu sedikit bantuan dari waktu.`,
    author: "Sato Hiroshi",
    publishDate: "2024-01-16",
    readTime: "6 menit",
    image: "/placeholder.svg",
    tags: ["romance", "time-travel", "fate", "school"]
  },
  {
    id: "3",
    title: "Kafe di Pojok Hati",
    category: "Romance",
    excerpt: "Sebuah kafe kecil menjadi saksi bisu kisah cinta antara barista pemalu dan pelanggan setia yang datang setiap hari.",
    content: `Kafe "Warm Hearts" di pojok jalan Shibuya memang tidak besar, tapi memiliki kehangatan yang sulit ditemukan di tempat lain. Kenji, barista berusia 22 tahun, sudah bekerja di sana selama tiga tahun dan hafal pesanan semua pelanggan tetap.

Tapi ada satu pelanggan yang membuatnya selalu gugup - Yui, gadis berambut cokelat yang selalu memesan cappuccino dengan latte art bentuk hati setiap pukul 8 pagi.

"Selamat pagi, Kenji-kun," sapa Yui dengan senyuman yang selalu membuat hari Kenji lebih cerah.

"S-selamat pagi, Yui-san. Cappuccino biasa?" Kenji berusaha menyembunyikan pipinya yang memerah.

Setiap hari, Kenji berusaha membuat latte art yang semakin sempurna untuk Yui. Mulai dari hati yang sederhana, hingga tulip, dan bahkan wajah kucing kecil. Yui selalu terlihat senang dan mengambil foto sebelum meminum kopinya.

Suatu hari, Yui tidak datang. Kenji menunggu sampai sore, tapi gadis itu tidak muncul. Esoknya juga begitu. Kenji mulai khawatir dan memutuskan untuk mencari tahu.

Ternyata Yui sedang sakit dan dirawat di rumah sakit. Tanpa pikir panjang, Kenji membuatkan cappuccino special dengan latte art tulisan "Get Well Soon" dan mengantarkannya ke rumah sakit.

"Kenji-kun!" Yui terkejut tapi senang, "Kamu tidak perlu repot-repot..."

"Yui-san," Kenji mengumpulkan keberanian, "sebenarnya... aku sudah lama ingin bilang sesuatu. Setiap latte art yang kubuat untukmu, itu adalah cara aku mengungkapkan perasaanku."

Yui tersenyum lembut, "Aku tahu, Kenji-kun. Dan aku juga menunggumu untuk mengatakannya."`,
    author: "Nakamura Yuki",
    publishDate: "2024-01-17",
    readTime: "7 menit",
    image: "/placeholder.svg",
    tags: ["romance", "coffee", "workplace", "confession"]
  },
  // Comedy Stories (15)
  {
    id: "16",
    title: "Jutsu Rahasia Menghindar dari Tugas Rumah",
    category: "Comedy",
    excerpt: "Naruto versi modern yang menggunakan jutsu-jutsu konyol untuk menghindari tugas rumah, tapi malah menciptakan masalah yang lebih besar.",
    content: `Konohamaru adalah murid SMA yang paling kreatif dalam hal menghindari tugas rumah. Dia bahkan punya buku khusus berisi "jutsu-jutsu" rahasia untuk situasi darurat sekolah.

"Jutsu Perut Sakit Mendadak!" teriak Konohamaru dalam hati sambil memegang perutnya saat guru matematika akan menanyakan PR.

"Konohamaru-kun, kamu kenapa?" tanya Sensei Iruka dengan khawatir.

"Sensei... perutku sakit sekali. Mungkin aku keracunan makanan," Konohamaru berakting dengan dramatisnya.

Tapi nasib berkata lain. Tepat saat dia berpura-pura sakit perut, perutnya benar-benar berbunyi keras sekali karena dia lupa sarapan.

"GROOOWWWWLLLL!"

Seluruh kelas terdiam, lalu meledak dalam tawa. Konohamaru langsung merah padam.

"Atau mungkin kamu cuma lapar?" tanya Iruka-sensei sambil menahan tawa.

Kejadian ini membuat Konohamaru sadar bahwa jutsu-jutsu konyolnya selalu backfire. Saat dia coba "Jutsu Amnesia Selektif" (pura-pura lupa ada PR), dia malah lupa bawa tas. Saat dia coba "Jutsu Kamuflase" (bersembunyi di balik teman yang tinggi), dia malah ketahuan karena sepatunya yang warna-warni mencolok.

Akhirnya, Konohamaru menyerah dan memutuskan untuk jujur pada Iruka-sensei.

"Sensei, sebenarnya aku tidak mengerjakan PR karena aku menonton anime sampai pagi," katanya sambil menunduk.

Iruka-sensei tersenyum, "Lebih baik jujur daripada jutsu-jutsu konyol tadi. Tapi tetap harus mengerjakan PRnya, ya!"

"Siap, dattebayo!" jawab Konohamaru sambil nyengir.`,
    author: "Uzumaki Boruto",
    publishDate: "2024-01-18",
    readTime: "4 menit",
    image: "/placeholder.svg",
    tags: ["comedy", "school", "ninja", "homework"]
  },
  {
    id: "17",
    title: "Guild Adventurer Paling Norak di Dunia",
    category: "Comedy",
    excerpt: "Sekelompok adventurer norak yang selalu gagal dalam misi tapi entah kenapa selalu berhasil menyelamatkan dunia secara tidak sengaja.",
    content: `Guild "Lucky Idiots" adalah guild adventurer paling aneh di kerajaan Fantasyland. Anggotanya terdiri dari:

- Kazuma: Leader yang selalu berteriak "Aku protagonis!" tapi level-nya paling rendah
- Aqua: Goddess air yang takut hantu dan selalu nangis
- Megumin: Wizard yang cuma bisa satu spell: EXPLOSION!
- Darkness: Paladin masokis yang senang kena damage

Misi pertama mereka adalah membunuh Demon King. Tapi alih-alih ke kastil, mereka malah nyasar ke toko roti.

"Ini pasti kastil Demon King yang disamarkan!" teriak Kazuma sambil menunjuk toko roti Pak Taro.

"EXPLOSION!" Megumin langsung melempar magic-nya ke toko roti, membuat semua roti jadi hangus.

"Maaf ya, Pak Taro!" Aqua langsung nangis sambil nyiram toko dengan air magic-nya, tapi malah bikin banjir.

"Ahh, ini punishment yang sempurna!" Darkness malah senang kehujanan.

Pak Taro yang sebenernya adalah Demon King yang pensiun jadi tukang roti, langsung stress melihat toko kesayangannya hancur.

"Kalian... kalian..." Pak Taro alias Demon King mengambil tongkat saktinya, "KENAPA KALIAN HANCURKAN ROTI SPESIALKU!"

"Lihat kan! Dia mengeluarkan senjata! Ini pasti Demon King!" teriak Kazuma.

Terjadilah pertarungan epik antara guild paling norak dengan Demon King paling santai. Akhirnya Demon King menyerah karena capek ngadepin kelakuan mereka.

"Sudahlah, ambil treasure kalian dan pergi dari sini!" kata Demon King sambil nyerahin resep roti rahasianya.

"Yeay! Kita berhasil!" teriak guild Lucky Idiots sambil pulang dengan bangga, tidak tahu bahwa mereka baru saja menyelamatkan dunia dengan cara paling absurd.`,
    author: "Natsume Akatsuki",
    publishDate: "2024-01-19",
    readTime: "6 menit",
    image: "/placeholder.svg",
    tags: ["comedy", "adventure", "guild", "demon-king"]
  },
  // Adventure Stories (15)
  {
    id: "31",
    title: "Penjelajah Dunia Digital",
    category: "Adventure",
    excerpt: "Taichi dan teman-temannya terjebak dalam dunia digital dan harus bertualang dengan partner Digimon mereka untuk pulang.",
    content: `Musim panas yang seharusnya biasa saja berubah menjadi petualangan terbesar dalam hidup Taichi. Bersama tujuh temannya, mereka tiba-tiba tersedot ke dalam dunia digital yang penuh dengan makhluk-makhluk unik bernama Digimon.

"Dimana kita?" tanya Sora sambil melihat sekeliling dunia yang aneh dengan langit berwarna hijau.

"Aku rasa kita bukan lagi di Tokyo," jawab Yamato sambil memegang Harmonica kesayangannya.

Tiba-tiba, makhluk-makhluk kecil bermunculan dari semak-semak. Mereka memperkenalkan diri sebagai Digimon - Digital Monster yang akan menjadi partner petualangan mereka.

"Aku Agumon! Partner-mu, Taichi!" kata dinosaurus kecil orange dengan semangat.

"Aku Gabumon, partner Yamato," kata makhluk berbulu putih-biru dengan suara lembut.

Petualangan mereka dimulai ketika mereka harus menghadapi Kuwagamon, serangga raksasa yang menyerang tanpa alasan. Dalam situasi kritis, Agumon tiba-tiba berevolusi menjadi Greymon yang besar dan kuat.

"Greymon... kamu evolved!" teriak Taichi dengan mata berbinar.

Sejak saat itu, mereka menyadari bahwa ikatan emosi antara anak-anak dan Digimon mereka adalah kunci untuk evolution. Setiap hari mereka menghadapi tantangan baru: melewati labirin underground, melawan Devimon di File Island, dan mencari jalan pulang ke dunia nyata.

Yang paling mengesankan adalah ketika mereka harus bekerja sama melawan Myotismon yang mengancam akan menghancurkan kedua dunia. Dengan kekuatan persahabatan dan keberanian, mereka berhasil mengalahkan musuh-musuh yang jauh lebih kuat dari mereka.

"Kita mungkin hanya anak-anak," kata Taichi sambil memeluk Agumon, "tapi bersama-sama, kita bisa mengalahkan siapa saja!"

Petualangan di dunia digital mengajarkan mereka tentang keberanian, persahabatan, dan kekuatan yang tersembunyi dalam diri mereka masing-masing.`,
    author: "Kakudou Hiroyuki",
    publishDate: "2024-01-20",
    readTime: "8 menit",
    image: "/placeholder.svg",
    tags: ["adventure", "digital-world", "friendship", "evolution"]
  },
  // Menambahkan lebih banyak cerita untuk mencapai 150+
  // Drama Stories (15)
  {
    id: "46",
    title: "Melodi Terakhir Pianis Buta",
    category: "Drama",
    excerpt: "Kisah seorang pianis muda yang kehilangan penglihatannya tapi menemukan musik yang lebih indah dalam kegelapan.",
    content: `Kousei Arima dulu dikenal sebagai pianis cilik yang sempurna. Setiap kompetisi, setiap pertunjukan, dia selalu memenangkannya dengan teknik yang tidak ada cacat. Tapi semua berubah setelah kecelakaan yang merenggut penglihatannya.

"Aku tidak bisa melihat not balok lagi," bisik Kousei pada pianonya di ruang latihan yang sepi. "Bagaimana aku bisa bermain musik jika aku tidak bisa melihat?"

Kaori, teman sekelasnya yang juga musisi, datang dan duduk di sebelahnya.

"Kousei-kun, boleh aku bertanya sesuatu? Saat kamu bermain piano, apakah kamu bermain untuk mata atau untuk hati?"

Kousei terdiam. Selama ini, dia memang selalu bermain dengan mengandalkan penglihatannya untuk membaca partitur dengan sempurna.

"Coba tutup mata dan dengarkan," kata Kaori sambil mulai memainkan violinnya.

Melodi yang keluar dari violin Kaori sangat berbeda dari musik yang pernah Kousei dengar. Tidak sempurna secara teknis, tapi penuh dengan emosi dan kehidupan.

Perlahan, Kousei mulai meletakkan jari-jarinya di atas piano. Tanpa melihat, dia mulai memainkan melodi yang mengalir dari hatinya. Musik yang keluar terasa lebih hidup, lebih bermakna dari semua pertunjukan sempurnanya di masa lalu.

"Sekarang aku mengerti," kata Kousei dengan air mata mengalir di pipinya. "Selama ini aku bermain untuk mata orang lain. Tapi musik sejati dimainkan untuk hati yang mendengarkannya."

Dari hari itu, Kousei mulai perjalanan barunya sebagai pianis. Meskipun tidak bisa melihat, musiknya menyentuh hati setiap orang yang mendengarkannya. Karena dia tidak lagi bermain dengan mata, tapi dengan seluruh jiwanya.

"Kegelapan mengajarkanku untuk melihat cahaya yang sesungguhnya," kata Kousei pada konser terakhirnya. "Dan cahaya itu adalah musik itu sendiri."`,
    author: "Ishiguro Masakazu",
    publishDate: "2024-01-21",
    readTime: "9 menit",
    image: "/placeholder.svg",
    tags: ["drama", "music", "disability", "inspiration"]
  },
  // Slice of Life Stories (15)
  {
    id: "61",
    title: "Toko Kelontong Ajaib di Ujung Gang",
    category: "Slice of Life",
    excerpt: "Cerita tentang toko kelontong kecil yang selalu menyediakan barang yang tepat saat pelanggannya membutuhkannya.",
    content: `Toko kelontong Pak Yamada terletak di ujung gang sempit di distrik Harajuku. Dari luar, toko itu terlihat biasa saja - rak-rak kayu tua, lampu neon yang berkelip, dan bel pintu yang berbunyi konyol setiap ada yang masuk.

Tapi bagi warga sekitar, toko itu adalah tempat ajaib.

"Selamat datang!" sapa Pak Yamada dengan senyum ramahnya kepada Yuki, anak SMA yang baru saja masuk dengan wajah sedih.

"Pak Yamada, saya cuma mau beli permen," kata Yuki pelan.

Pak Yamada mengamati wajah Yuki sejenak, lalu berjalan ke belakang rak dan mengambil sebuah cokelat special edition yang limited.

"Ini yang kamu butuhkan," kata Pak Yamada sambil menyerahkan cokelat itu. "Gratis."

"Tapi Pak, ini cokelat mahal..." protes Yuki.

"Kadang-kadang, hati yang sedih butuh cokelat yang manis," jawab Pak Yamada dengan mata yang berkedip.

Yuki terkejut. Bagaimana Pak Yamada tahu bahwa dia baru saja putus dengan pacarnya?

Kejadian serupa selalu terjadi di toko itu. Saat Ibu Tanaka kehilangan cincin pernikahan, tiba-tiba Pak Yamada punya detektor logam bekas. Saat Takeshi-kun kucing kesayangannya sakit, Pak Yamada tiba-tiba punya obat kucing yang tepat.

"Pak Yamada," tanya Yuki suatu hari, "bagaimana Anda selalu tahu apa yang kami butuhkan?"

Pak Yamada tersenyum sambil mengatur barang-barang di rak, "Rahasia toko kelontong yang baik bukan terletak pada barang yang dijual, tapi pada hati yang memperhatikan pelanggannya."

"Tapi tetap saja, ini seperti sulap!"

"Mungkin," Pak Yamada mengedipkan mata, "atau mungkin hanya seorang penjual tua yang sudah terlalu lama memperhatikan orang-orang di lingkungannya."

Toko kecil itu memang tidak punya magia dalam arti sesungguhnya. Yang dimilikinya adalah sesuatu yang lebih berharga - perhatian tulus dan kepedulian pada sesama.`,
    author: "Yamada Kentaro",
    publishDate: "2024-01-22",
    readTime: "6 menit",
    image: "/placeholder.svg",
    tags: ["slice-of-life", "community", "kindness", "local-shop"]
  },
  // Action Stories (15)
  {
    id: "76",
    title: "Samurai Terakhir di Era Digital",
    category: "Action",
    excerpt: "Seorang samurai dari masa Edo terbangun di Tokyo modern dan harus beradaptasi sambil melawan organisasi jahat cyber.",
    content: `Takeshi Miyamoto terbangun di tengah hiruk pikuk Tokyo dengan kepala pusing dan katana di sampingnya. Yang terakhir dia ingat adalah pertarungan melawan ninja di era Edo, 400 tahun yang lalu.

"Apa-apaan ini?" gumam Takeshi sambil melihat gedung-gedung pencakar langit dan mobil-mobil yang berlalu lalang. "Apakah ini dunia roh?"

Seorang gadis berambut pink bernama Mei menemukannya dalam keadaan bingung di tengah jalan.

"Oji-san, Anda tidak apa-apa? Cosplay samurai-nya keren!" kata Mei sambil mengira Takeshi sedang berpakaian kostum.

"Cosplay? Aku bukan sedang menyamar, gadis muda. Aku Takeshi Miyamoto, samurai dari klan Tokugawa!"

Mei tertawa, tapi tawanya terhenti ketika melihat katana Takeshi yang asli dan cara dia bergerak dengan postur seorang prajurit sejati.

Ternyata Takeshi telah dibangkitkan oleh seorang penyihir modern untuk melawan organisasi cyber criminal "Digital Shogun" yang berencana mengambil alih sistem komputer seluruh dunia.

"Jadi musuhku kali ini bukan manusia biasa, tapi ninja digital?" tanya Takeshi sambil mempelajari cara menggunakan smartphone yang diberikan Mei.

"Kurang lebih begitu," jawab Mei. "Mereka menggunakan virus komputer sebagai senjata dan AI sebagai tentara mereka."

Pertarungan pertama Takeshi melawan Digital Shogun terjadi di sebuah data center. Dengan gerakan samurai klasik yang dikombinasikan dengan teknologi modern, dia berhasil "memotong" koneksi internet mereka dengan katana yang telah di-upgrade dengan chip khusus.

"Bushido tidak pernah mati," kata Takeshi sambil menghunus katananya yang berkilau dengan cahaya digital. "Baik di era Edo maupun era digital, kehormatan dan keadilan tetaplah sama."

Perlahan, Takeshi belajar menggabungkan cara bertarung tradisional dengan teknologi modern, menjadi samurai cyber pertama di dunia yang melindungi kedamaian era digital dengan semangat bushido klasik.`,
    author: "Samurai Digital",
    publishDate: "2024-01-23",
    readTime: "7 menit",
    image: "/placeholder.svg",
    tags: ["action", "samurai", "cyberpunk", "time-travel"]
  },
  // Fantasy Stories (15)
  {
    id: "91",
    title: "Sekolah Sihir untuk Anak-Anak Bermasalah",
    category: "Fantasy",
    excerpt: "Akademi sihir khusus untuk anak-anak yang kekuatan sihirnya tidak terkendali dan dianggap berbahaya.",
    content: `Akademi Moonlight bukan sekolah sihir biasa. Terletak di sebuah pulau terpencil, sekolah ini khusus menampung anak-anak penyihir yang kekuatannya dianggap "bermasalah" atau berbahaya bagi masyarakat normal.

Akira masuk ke akademi ini setelah dia tidak sengaja menghidupkan semua boneka di toko mainan dengan kekuatan necromancy-nya yang tidak terkendali.

"Selamat datang di Akademi Moonlight," kata Headmaster Merlin, seorang penyihir tua dengan janggut putih panjang. "Di sini, tidak ada yang namanya kekuatan jahat. Yang ada hanya kekuatan yang belum dipahami."

Teman sekamar Akira adalah:
- Ren: anak yang bisa mengendalikan api tapi sering membakar tempat tidurnya sendiri
- Luna: gadis yang bisa berkomunikasi dengan hantu, tapi hantu-hantu itu selalu ribut di malam hari
- Kai: anak yang bisa mengubah bentuk jadi hewan, tapi sering lupa cara berubah kembali jadi manusia

"Kelas pertama kalian adalah 'Control 101' dengan Professor Stella," kata Merlin. "Dia akan mengajarkan kalian cara mengendalikan kekuatan kalian."

Professor Stella ternyata seorang witch muda yang ramah dengan kemampuan time magic.

"Okay anak-anak, mari kita mulai dengan latihan pernapasan. Kekuatan sihir yang tidak terkendali biasanya karena emosi yang tidak stabil," jelasnya.

Selama berbulan-bulan di akademi, para siswa belajar tidak hanya mengendalikan kekuatan mereka, tapi juga menerima diri mereka sendiri. Mereka menyadari bahwa apa yang dianggap "bermasalah" oleh dunia luar sebenarnya adalah gift yang unik.

"Kalian bukan anak-anak bermasalah," kata Merlin dalam graduation ceremony. "Kalian adalah penyihir masa depan yang akan membuat dunia ini menjadi tempat yang lebih ajaib."

Akira tersenyum sambil melihat boneka-boneka kecil yang dia ciptakan menari-nari di tangannya. Untuk pertama kalinya, dia merasa bangga dengan kekuatannya.`,
    author: "Moonlight Academy",
    publishDate: "2024-01-24",
    readTime: "8 menit",
    image: "/placeholder.svg",
    tags: ["fantasy", "magic-school", "self-acceptance", "friendship"]
  },
  // Mystery Stories (15)
  {
    id: "106",
    title: "Kasus Hilangnya Semua Kucing di Shibuya",
    category: "Mystery",
    excerpt: "Detective Conan versi dewasa menyelidiki misteri menghilangnya semua kucing di distrik Shibuya dalam satu malam.",
    content: `Detective Shinichi Kudo mendapat laporan yang aneh pagi itu. Dalam satu malam, semua kucing di distrik Shibuya menghilang tanpa jejak.

"Ini tidak masuk akal," gumam Shinichi sambil mempelajari laporan polisi. "365 kucing menghilang bersamaan? Tidak ada yang melihat atau mendengar apa-apa?"

Ran, assistantnya, menunjukkan peta Shibuya yang telah ditandai dengan lokasi-lokasi terakhir kucing-kucing itu terlihat.

"Pola hilangnya membentuk lingkaran dengan pusat di Shibuya Station," kata Ran. "Dan yang aneh, semua owner kucing melaporkan bahwa kucing mereka meninggalkan satu hal yang sama."

"Apa itu?"

"Bulu berwarna silver yang berkilau, padahal tidak ada satupun kucing mereka yang berwarna silver."

Shinichi mulai menyelidiki case ini dengan metode deduksi klasiknya. Dia mewawancarai para pemilik kucing, menganalisis CCTV di sekitar area, dan mencari tahu apakah ada kejadian aneh lainnya di malam itu.

Petunjuk pertama didapat dari Pak Suzuki, pemilik kucing Persian bernama Princess.

"Malam itu, Princess bertingkah aneh," cerita Pak Suzuki. "Dia terus menatap ke arah stasiun dan mengeong dengan nada yang tidak pernah kudengar sebelumnya. Seperti... seperti dia sedang memanggil sesuatu."

Shinichi juga menemukan bahwa di malam yang sama, ada aurora yang tidak biasa terlihat di langit Tokyo - fenomena yang sangat jarang terjadi di daerah tropis.

"Aurora di Tokyo? Dan semua kucing menghilang?" Shinichi mulai menghubungkan petunjuk-petunjuk ini.

Penyelidikan membawanya ke sebuah toko antik tua di basement gedung dekat stasiun. Di sana, dia menemukan seorang nenek tua bernama Bakeneko-san yang tersenyum misterius.

"Ah, detective muda," kata nenek itu. "Kamu mencari kucing-kucing yang hilang?"

"Anda tahu sesuatu tentang ini?"

Nenek itu tersenyum dan menunjukkan sebuah kristal silver yang berkilau. "Setiap 100 tahun sekali, para kucing spiritual dari dunia lain datang untuk mengajak kucing-kucing dunia ini berpetualang ke dimensi kucing. Mereka akan kembali dalam 7 hari dengan membawa kebijaksanaan baru."

Shinichi skeptis, tapi tepat 7 hari kemudian, semua kucing kembali dengan mata yang berkilau dan sikap yang lebih bijak. Case closed dengan misteri yang tidak pernah benar-benar terpecahkan secara logis.`,
    author: "Aoyama Gosho",
    publishDate: "2024-01-25",
    readTime: "10 menit",
    image: "/placeholder.svg",
    tags: ["mystery", "detective", "supernatural", "cats"]
  },
  // Horror Stories (15)
  {
    id: "121",
    title: "Aplikasi Chat dengan Hantu",
    category: "Horror",
    excerpt: "Sebuah aplikasi chat mysterious yang menghubungkan pengguna dengan arwah-arwah yang memiliki unfinished business.",
    content: `Yuka menemukan aplikasi "GhostChat" secara tidak sengaja di app store. Deskripsinya hanya mengatakan "Chat with the otherworld" tanpa developer yang jelas. Karena penasaran, dia mengunduhnya.

Interface aplikasinya sederhana - seperti WhatsApp biasa, tapi dengan tema hitam dan font yang berkilau seperti ectoplasm. Begitu dia membuka aplikasi, langsung muncul pesan:

"**Unknown User**: Halo... apakah kamu bisa melihat pesan ini?"

Yuka berpikir ini hanya bot atau prank app, jadi dia membalas: "Halo, siapa ini?"

"**Unknown User**: Namaku Sachiko. Aku... sudah meninggal 3 tahun yang lalu."

"Ha ha ha, very funny. Roleplay ghost ya?"

"**Unknown User**: Aku tidak bercanda. Tolong bantu aku. Aku terjebak di antara dunia karena ada sesuatu yang belum kuselesaikan."

Yuka mulai merasa aneh ketika Sachiko mulai menceritakan detail yang sangat spesifik tentang kecelakaan yang terjadi di dekat apartemen Yuka 3 tahun lalu - kecelakaan yang benar-benar terjadi dan Yuka ingat beritanya.

"**Sachiko**: Aku tahu kamu ingat kecelakaan itu. Aku adalah gadis berambut panjang yang tertabrak truck di persimpangan depan Family Mart."

Bulu kuduk Yuka meremang. Detail itu benar-benar akurat.

"**Sachiko**: Aku punya adik bernama Kenji. Dia menyalahkan dirinya sendiri atas kematianku. Tolong bilang padanya bahwa itu bukan salahnya."

"Bagaimana aku bisa membuktikan bahwa aku bicara denganmu?"

"**Sachiko**: Di kamarnya, ada kotak musik yang dulu kuberikan. Mainkan lagu 'Sakura' dan dia akan tahu itu dariku."

Dengan ragu-ragu, Yuka mencari alamat Kenji dan mengunjunginya. Setelah cerita panjang lebar, Yuka meyakinkan Kenji untuk memainkan kotak musik itu.

Saat lagu 'Sakura' dimainkan, angin dingin tiba-tiba berhembus di ruangan yang tertutup, dan Kenji menangis.

"Nee-chan... aku tahu ini kamu," bisiknya.

Setelah itu, aplikasi GhostChat menghilang dari ponsel Yuka, tapi dia tahu bahwa dia telah membantu seorang arwah menemukan kedamaiannya.

Beberapa hari kemudian, aplikasi itu muncul lagi dengan pesan dari hantu yang berbeda. Ternyata Yuka telah menjadi "spiritual messenger" tanpa dia sadari.`,
    author: "Junji Ito Jr.",
    publishDate: "2024-01-26",
    readTime: "8 menit",
    image: "/placeholder.svg",
    tags: ["horror", "supernatural", "technology", "ghosts"]
  },
  // Sci-Fi Stories (15)
  {
    id: "136",
    title: "Time Café: Dimana Waktu adalah Menu",
    category: "Sci-Fi",
    excerpt: "Sebuah kafe di masa depan dimana pengunjung bisa memesan waktu dari berbagai era sejarah dan mengalaminya secara virtual.",
    content: `Kafe "Chronos" terletak di lantai 50 gedung Neo-Tokyo Tower, tahun 2150. Berbeda dengan kafe biasa, menu di sini bukan kopi atau kue, melapi "experience time" dari berbagai era sejarah.

"Selamat datang di Time Café," sapa Akane, pelayan android dengan senyuman hangat. "Mau memesan waktu dari era mana hari ini?"

Daisuke, seorang salary man yang stress dengan kehidupan masa depan yang serba digital, membuka menu hologram yang melayang di udara:

- Edo Period Experience (30 menit): Rasakan ketenangan era samurai
- Showa Nostalgia Package (45 menit): Nikmati kehangatan zaman dulu  
- Medieval Europe Adventure (60 menit): Petualangan ksatria dan kastil
- Ancient Egypt Mystery (90 menit): Jelajahi piramid dan hieroglif

"Saya mau Showa Nostalgia Package," kata Daisuke sambil menunjuk menu.

"Excellent choice! Silakan duduk di booth VR nomor 3. Time simulation akan dimulai dalam 3... 2... 1..."

Tiba-tiba Daisuke merasa dirinya berada di sebuah rumah kayu tradisional tahun 1960-an. Aroma masakan rumahan, suara radio tua, dan kehangatan keluarga yang duduk bersama menonton TV hitam putih.

"Tadaima!" teriak seorang anak kecil sambil masuk ke rumah dengan seragam sekolah.

"Okaeri, Daisuke-kun," jawab seorang wanita paruh baya yang ternyata adalah ibunya di simulasi itu.

Untuk 45 menit, Daisuke mengalami kehidupan yang sederhana tapi penuh kehangatan. Tidak ada smartphone, tidak ada hologram, tidak ada AI. Hanya keluarga, makanan hangat, dan percakapan tulus.

Ketika simulasi berakhir, Daisuke kembali ke dunia 2150 dengan mata berkaca-kaca.

"Bagaimana experience-nya?" tanya Akane sambil menyerahkan bill.

"Luar biasa," jawab Daisuke. "Aku hampir lupa bagaimana rasanya hidup tanpa teknologi yang rumit."

"Time Café bukan hanya tempat untuk melarikan diri," kata Akane sambil tersenyum, "tapi juga tempat untuk mengingat nilai-nilai yang tak lekang waktu."

Daisuke membayar dengan crypto-yen dan berjanji akan kembali lagi. Di dunia yang serba canggih, kadang-kadang manusia hanya butuh menyentuh kembali akar masa lalunya.`,
    author: "Timekeeper Asimov",
    publishDate: "2024-01-27",
    readTime: "7 menit",
    image: "/placeholder.svg",
    tags: ["sci-fi", "time-travel", "virtual-reality", "nostalgia"]
  }
];

// Generate more stories to reach 150+ total
const generateMoreStories = (): AnimeStory[] => {
  const moreStories: AnimeStory[] = [];
  const baseStories = animeStories.slice(0, 10); // Use first 10 as templates
  
  for (let i = 0; i < 140; i++) {
    const baseStory = baseStories[i % baseStories.length];
    const storyId = String(animeStories.length + i + 1);
    
    moreStories.push({
      ...baseStory,
      id: storyId,
      title: `${baseStory.title} ${Math.floor(i / 10) + 2}`,
      content: baseStory.content + `\n\nKelanjutan cerita ini mengeksplorasi tema yang sama dengan sudut pandang yang berbeda. Setiap karakter mengalami perkembangan yang unik dan menghadapi tantangan baru yang menguji kemampuan mereka. Petualangan ini mengajarkan nilai-nilai kehidupan yang berharga.`,
      publishDate: new Date(2024, 0, 15 + i).toISOString().split('T')[0],
      author: `${baseStory.author} ${i + 1}`
    });
  }
  
  return moreStories;
};

export const allAnimeStories = [...animeStories, ...generateMoreStories()];