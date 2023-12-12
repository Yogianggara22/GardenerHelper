export const colors = {
  COLOR_PRIMARY: '#B3C890',
  COLOR_LIGHT: '#FFFF',
  COLOR_DARK: '#000',
  COLOR_DARK_ALT: '#262626',
  blue: () => '#0000FF',
};

//  Data for categories filter

export const categories = [
  {
    id: 1,
    categoryName: 'Tanaman Hias',
  },
  {
    id: 2,
    categoryName: 'Tanaman pangan',
  },
  {
    id: 3,
    categoryName: 'Tanaman Obat-obatan',
  },
  {
    id: 4,
    categoryName: 'Tanaman Buah',
  },
];

export const plantlist = [
  {
    id: 1,
    name: 'Bayam',
    image:
      'https://i.pinimg.com/736x/cb/ad/9f/cbad9f81cfc03a23061abf1934167c9a.jpg',
    categoryName: 'Tanaman pangan',
    content:
      'Bayam adalah tanaman yang sering ditanam untuk dikonsumsi daunnya yang kaya akan nutrisi. Tanaman ini memiliki daun hijau dengan berbagai bentuk, seperti bulat, lonjong, dan berbentuk hati, serta batang berwarna merah atau ungu pada beberapa varietas. Bayam termasuk dalam keluarga Amaranthaceae dan dapat tumbuh baik di daerah dengan iklim sedang hingga tropis. Untuk menanam bayam, pilih lokasi yang terkena sinar matahari sebagian atau naungan sebagian pada daerah beriklim panas. Pastikan tanah gembur, kaya bahan organik, dan memiliki drainase yang baik dengan pH sekitar 6,0 hingga 7,0. Anda dapat menanam bayam dari biji dengan jarak tanam 5-10 cm dan kedalaman sekitar 1 cm. Perawatan yang diperlukan mencakup penyiraman teratur, pemupukan dengan kandungan nitrogen yang cukup, serta perlindungan dari hama dan penyakit. Bayam dapat dipanen dalam 4-6 minggu setelah penanaman, dan daunnya dapat digunakan dalam berbagai hidangan seperti salad, sup, atau tumis.',
    lahan: [
      'Pilih lokasi yang mendapatkan sinar matahari penuh atau setidaknya sinar matahari parsial (minimal 4-6 jam sehari).',
      'Pastikan tanah Anda memiliki drainase yang baik. Bayam tidak suka tanah yang terlalu lembab atau tergenang air.',
      'Tes pH tanah dan pastikan pH-nya sekitar 6.0 hingga 7.0, yang merupakan kondisi optimal untuk pertumbuhan bayam.',
      'Gemburkan tanah dengan menggunakan cangkul atau garu untuk mempersiapkannya.',
    ],
    penanaman: [
      'Benih bayam dapat ditanam langsung di tanah atau dalam pot. Jika Anda ingin menanam langsung di tanah, sebarkan benih bayam dengan jarak sekitar 10-15 cm antara satu benih dan benih lainnya.',
      'Benih bayam sebaiknya ditanam dangkal, cukup ditaburkan di permukaan tanah dan ditutupi dengan lapisan tipis tanah. Tekan ringan tanah di sekitar benih.',
      'Airi tanah setelah menabur benih untuk menjaga kelembaban.',
    ],
    perawatan: [
      'Pastikan tanah selalu lembab, tetapi hindari genangan air. Airi tanaman secara teratur',
      'Berikan pupuk organik atau pupuk kandang untuk mendukung pertumbuhan tanaman bayam.',
      'Jika tanaman terlalu padat, thinning (mengurangi jumlah tanaman) agar tanaman bayam memiliki cukup ruang untuk tumbuh dengan baik.',
    ],
    penyiraman: [
      'Jaga kelembaban tanah dengan penyiraman teratur. Bayam menyukai tanah yang lembap.',
      'Hindari penyiraman pada malam hari untuk mencegah penyakit jamur. Lebih baik menyiram di pagi atau sore hari.',
    ],
    pemeliharaan: [
      'Periksa tanaman secara teratur untuk tanda-tanda hama dan penyakit. Jika ada masalah, tindaklanjuti dengan langkah-langkah pengendalian yang sesuai.',
      'Jika Anda ingin memanen bayam baby, Anda dapat melakukannya sekitar 3-4 minggu setelah tanam. Jika Anda ingin memanen bayam yang lebih besar, Anda bisa menunggu hingga daun bayam mencapai ukuran yang diinginkan.',
    ],
  },
  {
    id: 2,
    name: 'Kaktus',
    image:
      'https://i.pinimg.com/736x/b4/47/b0/b447b0af00693bf545d2a862ead4244e.jpg',
    categoryName: 'Tanaman Hias',
    content:
      'Kaktus adalah tumbuhan yang unik dan menarik dengan adaptasi khusus untuk tumbuh di lingkungan yang kering dan panas. Tanaman kaktus memiliki berbagai bentuk, ukuran, dan warna yang mengagumkan, mulai dari yang kecil seperti kaktus bulat hingga yang besar seperti kaktus saguaro yang ikonik. Mereka umumnya ditemukan di daerah gurun, padang pasir, dan daerah dengan curah hujan yang rendah. Kaktus memiliki batang tebal yang berfungsi sebagai tempat penyimpanan air, sehingga mereka dapat bertahan dalam kondisi kekeringan yang parah. Duri-duri yang ada pada kaktus adalah modifikasi daun yang membantu melindungi tanaman dari pemakan tanaman dan mengurangi penguapan air. Beberapa jenis kaktus menghasilkan bunga yang cantik, meskipun ini terjadi cukup jarang. Kaktus adalah pilihan yang populer dalam dekorasi rumah dan taman, karena mereka memerlukan perawatan yang minimal dan memberikan sentuhan estetika yang unik.',
    lahan: [
      'Pilih pot atau wadah yang sesuai untuk menanam kaktus. Pastikan pot memiliki lubang drainase untuk menghindari akumulasi air.',
      'Siapkan media tanam yang cocok, seperti campuran tanah kaktus yang memiliki drainase baik. Anda juga bisa menambahkan kerikil atau pasir untuk meningkatkan drainase.',
      'Pilih lokasi yang mendapatkan cahaya matahari yang cukup. Kaktus biasanya membutuhkan sinar matahari langsung, tetapi beberapa jenis lebih toleran terhadap cahaya redup.',
    ],
    penanaman: [
      'Pindahkan kaktus ke pot baru dengan hati-hati. Gunakan sarung tangan karet untuk melindungi tangan dari duri kaktus',
      'Letakkan kaktus di tengah pot dan isi sekitarnya dengan media tanam. Tekan perlahan media tanam untuk mengamankan kaktus.',
      'Airi kaktus secukupnya setelah penanaman dan biarkan selama beberapa hari untuk memberikan waktu akar beradaptasi.',
    ],
    perawatan: [
      'Potong bunga kering atau daun yang mati secara teratur untuk menjaga tampilan kaktus yang bersih.',
      'Pemupukan jarang diperlukan, biasanya sekitar sekali setahun selama musim pertumbuhan. Gunakan pupuk khusus untuk kaktus.',
    ],
    penyiraman: [
      'Kaktus lebih suka disiram dengan sedikit air tetapi lebih sering. Biarkan media tanam kering sepenuhnya antara penyiraman.',
      'Pastikan pot memiliki lubang drainase sehingga air berlebih dapat mengalir keluar. Jangan biarkan kaktus terendam dalam air.',
    ],
    pemeliharaan: [
      'Perhatikan tanda-tanda hama atau penyakit. Jika ada masalah, segera lakukan tindakan untuk mengatasinya.',
      'Perluasan kaktus tergantung pada jenisnya. Beberapa tumbuh perlahan, sementara yang lain bisa tumbuh dengan cepat. Sesuaikan ukuran pot atau wadah jika diperlukan.',
    ],
  },
  {
    id: 3,
    name: 'Lidah Buaya',
    image:
      'https://i.pinimg.com/736x/0b/1d/26/0b1d26ffd691704dd1a480e56542f73c.jpg',
    categoryName: 'Tanaman Obat-obatan',
    content:
      'Lidah buaya, atau Aloe vera, adalah tanaman yang terkenal dengan manfaat kesehatannya dan penampilannya yang menarik. Tanaman ini memiliki daun berdaging yang tebal dan bergerigi yang mengandung gel transparan yang digunakan dalam berbagai produk perawatan kulit dan kesehatan. Lidah buaya berasal dari daerah tropis dan semiarid, dan biasanya tumbuh subur di tanah yang gembur dan berdrainase baik. Mereka dapat ditempatkan di dalam ruangan atau di luar ruangan, asalkan mendapatkan cahaya matahari yang cukup. Selain manfaatnya dalam merawat luka bakar dan masalah kulit lainnya, lidah buaya juga memiliki daya tarik dekoratif yang khas dengan daunnya yang panjang dan berwarna hijau. Tanaman ini sangat tahan terhadap kondisi lingkungan yang keras dan memerlukan sedikit perawatan, menjadikannya pilihan populer untuk tanaman hias dalam rumah dan taman.',
    lahan: [
      'Pilih lokasi yang mendapatkan sinar matahari cukup. Lidah buaya biasanya membutuhkan sinar matahari penuh atau setengah hari.',
      'Pastikan tanah Anda memiliki drainase yang baik untuk menghindari genangan air yang berlebihan.',
      'Persiapkan tanah dengan baik dengan mencampurkan pasir atau kerikil ke dalam tanah untuk meningkatkan drainase.',
    ],
    penanaman: [
      'Beli bibit lidah buaya atau dapat juga menggunakan potongan daun yang telah matang.',
      'Tanam bibit atau potongan daun dalam lubang yang sudah digali. Lubang sebaiknya sedalam dua hingga tiga kali ukuran bibit atau potongan daun.',
      'Jaga jarak antara tanaman, biasanya sekitar 1-2 kaki (30-60 cm) antara satu tanaman dan lainnya.',
    ],
    perawatan: [
      'Beri pupuk cair yang mengandung nutrisi penting setiap 4-6 minggu sekali selama musim tumbuh.',
      'Potong daun-daun yang mati atau rusak untuk menjaga penampilan tanaman yang rapi.',
      'Lindungi tanaman dari hama dan penyakit. Anda bisa menggunakan insektisida dan fungisida alami jika diperlukan.',
    ],
    penyiraman: [
      'Airi tanaman lidah buaya secara teratur, tetapi hindari penggenangan air. Lidah buaya lebih suka tanah yang sedikit kering daripada terlalu basah.',
      'Seiring pertumbuhan, kurangi frekuensi penyiraman, terutama saat tanaman sudah dewasa.',
    ],
    pemeliharaan: [
      'Perhatikan pertumbuhan tanaman dan pastikan untuk memberikan dukungan jika diperlukan. Lidah buaya yang besar dapat menjadi agak berat dan perlu penyangga.',
      'Jika tanaman tumbuh dalam pot, pertimbangkan untuk mengganti pot yang lebih besar saat akarnya mulai memenuhi pot yang lama.',
    ],
  },
];

export const itemsschedules = [
  {
    id: 1,
    img: 'https://i.pinimg.com/736x/cb/ad/9f/cbad9f81cfc03a23061abf1934167c9a.jpg',
    name: 'Bayam',
    categoryName: 'Tanaman pangan',
    penyiraman: [
      'Tetapkan jadwal penyiraman yang teratur untuk menjaga kelembaban tanah.',
      'Pilih waktu penyiraman pada pagi atau sore hari untuk menghindari kelembaban berlebih.',
      'Sesuaikan intensitas penyiraman dengan kondisi cuaca.',
      'Gunakan air pada suhu ruangan atau sedikit hangat untuk menghindari stres pada tanaman.',
      'Hindari tergenangnya air di tanah, pastikan ada sistem drainase yang baik.',
      'Gunakan irigasi tetes atau penyiraman langsung pada akar untuk efisiensi penggunaan air.',
      'Perhatikan kelembaban udara di sekitar tanaman dan tambahkan kelembaban jika perlu.',
      'Cek kelembaban tanah dengan menyentuh tanah menggunakan jari.',
      'Gunakan peralatan penyiraman yang sesuai seperti selang atau alat penyiraman.',
      'Pantau respons tanaman terhadap penyiraman dan sesuaikan jika diperlukan.',
    ],
    pemangkasan: [
      'Pemangkaslah daun-daun yang sudah tua, mati, atau rusak untuk mencegah penyebaran penyakit.',
      'Gunakan alat pemangkasan yang tajam untuk menghindari luka yang tidak perlu pada tanaman.',
      'Jika tanaman terlalu padat, pertimbangkan untuk memangkas daun-daun yang bersaing untuk memberikan ruang bagi tanaman yang lebih sehat.',
      'Fokus pada pemangkasan daun bagian luar untuk meningkatkan sirkulasi udara dan cahaya.',
      'Pastikan jarak yang cukup antara tanaman untuk mencegah kelembaban berlebih dan penyakit.',
      'Lakukan pemangkasan secara teratur, terutama saat tanaman aktif tumbuh.',
      'Hindari pemangkasan berlebihan yang dapat melemahkan tanaman.',
      'Setelah panen, lakukan pemangkasan lebih agresif untuk membersihkan tanaman dan mempersiapkannya untuk pertumbuhan berikutnya.',
    ],
    pemupukan: [
      'Gunakan pupuk yang sesuai, seperti pupuk sayuran atau pupuk khusus untuk bayam.',
      'Atur jadwal pemupukan berdasarkan fase pertumbuhan tanaman, memberikan pemupukan lebih sering pada fase pertumbuhan aktif.',
      'Pupuklah tanah dengan pupuk organik atau pupuk yang mengandung nutrisi seimbang saat menanam bibit bayam atau ketika tanaman masih muda.',
      'Pertimbangkan penggunaan pupuk NPK dengan kandungan nitrogen, fosfor, dan kalium yang seimbang untuk mendukung pertumbuhan daun, akar, dan buah.',
      'Gunakan pupuk organik seperti kompos atau pupuk kandang untuk meningkatkan kandungan bahan organik dalam tanah.',
      'Pastikan untuk mengikuti petunjuk dosis pemupukan yang tercantum pada kemasan pupuk.',
      'Pantau respons tanaman terhadap pemupukan dan sesuaikan dosis atau jadwal pemupukan sesuai kebutuhan tanaman.',
      'Hindari pemupukan berlebihan yang dapat menyebabkan masalah ekologis dan pertumbuhan yang tidak seimbang pada tanaman.',
    ],
  },
];

export const ProfileData = {
  profilebackground:
    'https://png.pngtree.com/thumb_back/fh260/background/20210605/pngtree-white-lotus-flower-for-dekstop-background-image_725111.jpg',
  profilePict:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4EtvvDaeNopVUxCAqMOjksGegfXyRs9_Lw&usqp=CAU',
  name: 'Yogi Anggara',
  bio: 'Salam Berkebun !!!',
  no: ' +62881-9718-733',
  alamat: 'Mojokerto',
  email: 'Yogianggara0022@gmail.com',
};
