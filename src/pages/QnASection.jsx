import  { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const categories = [
    {
        title: "1. Umum tentang LaporPak",
        questions: [
            { 
                question: "Apa itu LaporPak?", 
                answer: "LaporPak adalah platform digital yang memungkinkan masyarakat untuk melaporkan masalah lingkungan dan sosial di sekitar mereka. Setiap laporan akan ditindaklanjuti oleh pihak terkait, sehingga masalah bisa diselesaikan dengan cepat dan efisien."
            },
            { 
                question: "Bagaimana cara membuat laporan di LaporPak?", 
                answer: "Anda dapat membuat laporan dengan mudah. Cukup klik tombol 'Mulai Laporkan' di halaman utama, isi informasi yang diperlukan, tambahkan foto (jika ada), dan kirimkan laporan Anda. Tim kami akan segera menindaklanjuti."
            },
            { 
                question: "Apa saja kategori laporan yang bisa saya buat di LaporPak?", 
                answer: "LaporPak menerima berbagai jenis laporan seperti masalah infrastruktur, kebersihan lingkungan, kerusakan fasilitas umum, dan masalah sosial lainnya yang perlu penanganan."
            },
            { 
                question: "Apakah laporan saya dijamin ditindaklanjuti?", 
                answer: "Ya, setiap laporan yang valid akan segera ditindaklanjuti oleh tim terkait. Kami bekerja sama dengan berbagai pihak untuk memastikan masalah ditangani dengan baik."
            },
        ]
    },
    {
        title: "2. Rewards dan Poin",
        questions: [
            { 
                question: "Apa itu SOLP di LaporPak?", 
                answer: "SOLP atau Sign of LaporPak adalah poin yang diberikan sebagai tanda bahwa Anda telah berkontribusi dengan melaporkan masalah. Setiap laporan yang Anda buat akan menghasilkan poin yang bisa ditukar dengan rewards menarik."
            },
            { 
                question: "Bagaimana cara mendapatkan poin di LaporPak?", 
                answer: "Anda akan mendapatkan poin berdasarkan kategori laporan. Misalnya, laporan kategori Lingkungan mendapatkan 5 poin, Fasilitas Publik 10 poin, Sosial Masyarakat 15 poin, dan Lainnya 20 poin. Poin ini nantinya dapat Anda tukarkan dengan rewards."
            },
            { 
                question: "Apa saja reward yang bisa saya dapatkan dengan poin di LaporPak?", 
                answer: "Anda bisa menukar poin dengan berbagai rewards dari mitra kami. Misalnya, dengan 20-30 poin, Anda bisa mendapatkan voucher Rp30.000 di Alfamart, atau voucher diskon produk ramah lingkungan dari mitra seperti Pijakbumi atau Greater Good."
            },
        ]
    },
    {
        title: "3. Profil dan Lencana",
        questions: [
            { 
                question: "Bagaimana sistem level atau lencana bekerja di LaporPak?", 
                answer: "Di LaporPak, Anda bisa mendapatkan lencana sesuai jumlah laporan yang Anda buat. Contohnya, setelah 3 laporan, Anda akan mendapatkan lencana Dasar, lalu Menengah setelah 5 laporan, Mahir setelah 10 laporan, dan Bintang untuk lebih dari 10 laporan. Lencana ini menandakan kontribusi Anda dalam membantu lingkungan sekitar."
            },
            { 
                question: "Apakah saya bisa melacak poin dan rewards yang telah saya kumpulkan?", 
                answer: "Tentu! Anda dapat melihat jumlah poin, level, dan reward yang tersedia di profil Anda. Di sana, Anda bisa memantau perkembangan kontribusi Anda di LaporPak."
            },
            { 
                question: "Bagaimana LaporPak menjaga privasi data saya?", 
                answer: "Kami sangat menghargai privasi Anda. Semua data pribadi yang Anda berikan akan dijaga kerahasiaannya dan hanya digunakan untuk proses verifikasi laporan."
            },
        ]
    }
];

const QnASection = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="relative">
                <img src="/src/assets/bannerQNA.png" alt="QnA" className="w-full h-auto object-cover rounded-t-lg" />
                <div className="absolute inset-0 flex flex-col items-start justify-center">
                    <h2 className="text-2xl font-bold text-blue-800">QNA LaporPak</h2>
                    <p className="text-blue-800 mt-2 text-center">
                        QNA yang sering diajukan di platform LaporPak
                    </p>
                </div>
            </div>
            <div className="mt-6 space-y-4">
                {categories.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3 className="font-bold text-lg text-blue-800">{category.title}</h3>
                        {category.questions.map((item, questionIndex) => (
                            <div key={questionIndex} className="border-b pb-4">
                                <button
                                    className="flex justify-between w-full text-left text-lg font-medium text-blue-600"
                                    onClick={() => toggleQuestion(questionIndex)}
                                >
                                    Q: {item.question}
                                    <ChevronDownIcon
                                        className={`w-5 h-5 transition-transform ${openQuestion === questionIndex ? 'transform rotate-180' : ''}`}
                                    />
                                </button>
                                {openQuestion === questionIndex && (
                                    <p className="mt-2 text-gray-600">A: {item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QnASection;
