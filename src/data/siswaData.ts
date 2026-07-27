import { RombelClass } from '../types';

export interface SiswaMaster {
  id: string;
  nama: string;
  nisn: string;
  rombel: RombelClass;
  noAbsen?: number;
}

export const masterSiswaList: Record<RombelClass, SiswaMaster[]> = {
  '7A': [
    { id: '7a-1', nama: 'Aufar Farid Atallah', nisn: '0089599001', rombel: '7A', noAbsen: 1 },
    { id: '7a-2', nama: 'Dea Shakila Az Zahra', nisn: '0089610002', rombel: '7A', noAbsen: 2 },
    { id: '7a-3', nama: 'Devandra Alvaro Himawan', nisn: '0089613003', rombel: '7A', noAbsen: 3 },
    { id: '7a-4', nama: 'Dzakira Nabila Aftani', nisn: '0089621004', rombel: '7A', noAbsen: 4 },
    { id: '7a-5', nama: 'Fahmi Aziz', nisn: '0089628005', rombel: '7A', noAbsen: 5 },
    { id: '7a-6', nama: 'Muhammad Bayu Pratama', nisn: '0081234561', rombel: '7A', noAbsen: 6 },
    { id: '7a-7', nama: 'Nayla Putri Salsabila', nisn: '0089635007', rombel: '7A', noAbsen: 7 },
    { id: '7a-8', nama: 'Rafi Ahmad Ramadhan', nisn: '0089642008', rombel: '7A', noAbsen: 8 },
    { id: '7a-9', nama: 'Syafiq Al Farisi', nisn: '0089650009', rombel: '7A', noAbsen: 9 },
    { id: '7a-10', nama: 'Zahra Aulia Nisa', nisn: '0089658010', rombel: '7A', noAbsen: 10 }
  ],
  '7B': [
    { id: '7b-1', nama: 'Siti Nur Aini', nisn: '0081234562', rombel: '7B', noAbsen: 1 },
    { id: '7b-2', nama: 'Ahmad Bagus Prasetya', nisn: '0089671002', rombel: '7B', noAbsen: 2 },
    { id: '7b-3', nama: 'Anisa Fitri Khairunnisa', nisn: '0089678003', rombel: '7B', noAbsen: 3 },
    { id: '7b-4', nama: 'Bima Sakti Putra', nisn: '0089685004', rombel: '7B', noAbsen: 4 },
    { id: '7b-5', nama: 'Citra Dewi Maharani', nisn: '0089692005', rombel: '7B', noAbsen: 5 },
    { id: '7b-6', nama: 'Dimas Prayoga Utama', nisn: '0089700006', rombel: '7B', noAbsen: 6 },
    { id: '7b-7', nama: 'Farah Amalia', nisn: '0089707007', rombel: '7B', noAbsen: 7 },
    { id: '7b-8', nama: 'Galih Perkasa', nisn: '0089714008', rombel: '7B', noAbsen: 8 },
    { id: '7b-9', nama: 'Intan Ayu Ningrum', nisn: '0089721009', rombel: '7B', noAbsen: 9 },
    { id: '7b-10', nama: 'Lutfi Zaidan', nisn: '0089728010', rombel: '7B', noAbsen: 10 }
  ],
  '7C': [
    { id: '7c-1', nama: 'Ahmad Rian Hidayat', nisn: '0081234563', rombel: '7C', noAbsen: 1 },
    { id: '7c-2', nama: 'Cantika Putri Wardani', nisn: '0089741002', rombel: '7C', noAbsen: 2 },
    { id: '7c-3', nama: 'Deni Kurniawan', nisn: '0089748003', rombel: '7C', noAbsen: 3 },
    { id: '7c-4', nama: 'Elvira Maharani', nisn: '0089755004', rombel: '7C', noAbsen: 4 },
    { id: '7c-5', nama: 'Fajar Nugraha', nisn: '0089762005', rombel: '7C', noAbsen: 5 },
    { id: '7c-6', nama: 'Grace Febrina', nisn: '0089769006', rombel: '7C', noAbsen: 6 },
    { id: '7c-7', nama: 'Haikal Azhar', nisn: '0089776007', rombel: '7C', noAbsen: 7 },
    { id: '7c-8', nama: 'Irma Melati', nisn: '0089783008', rombel: '7C', noAbsen: 8 },
    { id: '7c-9', nama: 'Jovan Ardiansyah', nisn: '0089790009', rombel: '7C', noAbsen: 9 },
    { id: '7c-10', nama: 'Kaila Nur Safitri', nisn: '0089797010', rombel: '7C', noAbsen: 10 }
  ],
  '7D': [
    { id: '7d-1', nama: 'Dina Kusuma Putri', nisn: '0081234564', rombel: '7D', noAbsen: 1 },
    { id: '7d-2', nama: 'Farhan Alfarizi', nisn: '0089811002', rombel: '7D', noAbsen: 2 },
    { id: '7d-3', nama: 'Gita Savitri', nisn: '0089818003', rombel: '7D', noAbsen: 3 },
    { id: '7d-4', nama: 'Hadi Wijaya', nisn: '0089825004', rombel: '7D', noAbsen: 4 },
    { id: '7d-5', nama: 'Indah Permata Sari', nisn: '0089832005', rombel: '7D', noAbsen: 5 },
    { id: '7d-6', nama: 'Johan Saputra', nisn: '0089839006', rombel: '7D', noAbsen: 6 },
    { id: '7d-7', nama: 'Kiki Amalia', nisn: '0089846007', rombel: '7D', noAbsen: 7 },
    { id: '7d-8', nama: 'Lukman Hakim', nisn: '0089853008', rombel: '7D', noAbsen: 8 },
    { id: '7d-9', nama: 'Mutiara Nabila', nisn: '0089860009', rombel: '7D', noAbsen: 9 },
    { id: '7d-10', nama: 'Naufal Rizky', nisn: '0089867010', rombel: '7D', noAbsen: 10 }
  ],
  '7E': [
    { id: '7e-1', nama: 'Eko Prasetyo', nisn: '0081234565', rombel: '7E', noAbsen: 1 },
    { id: '7e-2', nama: 'Kevin Pratama', nisn: '0089881002', rombel: '7E', noAbsen: 2 },
    { id: '7e-3', nama: 'Laila Nur Azizah', nisn: '0089888003', rombel: '7E', noAbsen: 3 },
    { id: '7e-4', nama: 'M. Rizky Ramadhan', nisn: '0089895004', rombel: '7E', noAbsen: 4 },
    { id: '7e-5', nama: 'Nadia Safira', nisn: '0089902005', rombel: '7E', noAbsen: 5 },
    { id: '7e-6', nama: 'Oscar Perdana', nisn: '0089909006', rombel: '7E', noAbsen: 6 },
    { id: '7e-7', nama: 'Putri Amalia', nisn: '0089916007', rombel: '7E', noAbsen: 7 },
    { id: '7e-8', nama: 'Qori Ramadhani', nisn: '0089923008', rombel: '7E', noAbsen: 8 },
    { id: '7e-9', nama: 'Rian Hidayat', nisn: '0089930009', rombel: '7E', noAbsen: 9 },
    { id: '7e-10', nama: 'Sinta Bella', nisn: '0089937010', rombel: '7E', noAbsen: 10 },
    { id: '7e-11', nama: 'Tio Ardiansyah', nisn: '0089944011', rombel: '7E', noAbsen: 11 },
    { id: '7e-12', nama: 'Utami Rahmawati', nisn: '0089951012', rombel: '7E', noAbsen: 12 }
  ],
  '7F': [
    { id: '7f-1', nama: 'Fani Indah Lestari', nisn: '0081234566', rombel: '7F', noAbsen: 1 },
    { id: '7f-2', nama: 'Umar Faruq', nisn: '0089965002', rombel: '7F', noAbsen: 2 },
    { id: '7f-3', nama: 'Vina Melati', nisn: '0089972003', rombel: '7F', noAbsen: 3 },
    { id: '7f-4', nama: 'Wahyu Hidayat', nisn: '0089979004', rombel: '7F', noAbsen: 4 },
    { id: '7f-5', nama: 'Yoga Pratama', nisn: '0089986005', rombel: '7F', noAbsen: 5 },
    { id: '7f-6', nama: 'Zahra Amelia', nisn: '0089993006', rombel: '7F', noAbsen: 6 },
    { id: '7f-7', nama: 'Aldo Febrian', nisn: '0089999007', rombel: '7F', noAbsen: 7 },
    { id: '7f-8', nama: 'Bunga Citra', nisn: '0089001008', rombel: '7F', noAbsen: 8 },
    { id: '7f-9', nama: 'Cakra Buana', nisn: '0089008009', rombel: '7F', noAbsen: 9 },
    { id: '7f-10', nama: 'Della Puspita', nisn: '0089015010', rombel: '7F', noAbsen: 10 }
  ],
  '7G': [
    { id: '7g-1', nama: 'Gilang Ramadhan', nisn: '0081234567', rombel: '7G', noAbsen: 1 },
    { id: '7g-2', nama: 'Adelia Putri', nisn: '0089029002', rombel: '7G', noAbsen: 2 },
    { id: '7g-3', nama: 'Bintang Samudra', nisn: '0089036003', rombel: '7G', noAbsen: 3 },
    { id: '7g-4', nama: 'Chika Aurelia', nisn: '0089043004', rombel: '7G', noAbsen: 4 },
    { id: '7g-5', nama: 'Diki Candra', nisn: '0089050005', rombel: '7G', noAbsen: 5 },
    { id: '7g-6', nama: 'Eka Kurnia', nisn: '0089057006', rombel: '7G', noAbsen: 6 },
    { id: '7g-7', nama: 'Fitri Handayani', nisn: '0089064007', rombel: '7G', noAbsen: 7 },
    { id: '7g-8', nama: 'Ghani Muhammad', nisn: '0089071008', rombel: '7G', noAbsen: 8 },
    { id: '7g-9', nama: 'Hani Susanti', nisn: '0089078009', rombel: '7G', noAbsen: 9 },
    { id: '7g-10', nama: 'Irfan Syahputra', nisn: '0089085010', rombel: '7G', noAbsen: 10 }
  ],
  '7H': [
    { id: '7h-1', nama: 'Hani Sofia', nisn: '0081234568', rombel: '7H', noAbsen: 1 },
    { id: '7h-2', nama: 'Faisal Basri', nisn: '0089099002', rombel: '7H', noAbsen: 3 },
    { id: '7h-3', nama: 'Grace Natalia', nisn: '0089106003', rombel: '7H', noAbsen: 3 },
    { id: '7h-4', nama: 'Hendra Kusuma', nisn: '0089113004', rombel: '7H', noAbsen: 4 },
    { id: '7h-5', nama: 'Intan Nuraini', nisn: '0089120005', rombel: '7H', noAbsen: 5 },
    { id: '7h-6', nama: 'Joko Susilo', nisn: '0089127006', rombel: '7H', noAbsen: 6 },
    { id: '7h-7', nama: 'Kartika Sari', nisn: '0089134007', rombel: '7H', noAbsen: 7 },
    { id: '7h-8', nama: 'Lia Anggraini', nisn: '0089141008', rombel: '7H', noAbsen: 8 },
    { id: '7h-9', nama: 'M. Fariz', nisn: '0089148009', rombel: '7H', noAbsen: 9 },
    { id: '7h-10', nama: 'Nia Kurniawati', nisn: '0089155010', rombel: '7H', noAbsen: 10 }
  ]
};
