-- ============================================================
-- Seed Data: AnnouncementExtra
-- DB: fullproduct (Docker) /
--     schedulingmanagementsystem_product_fullproduct (local)
--
-- How to run:
--   ./gradlew runWinVMJ        (runs createTable + loadSql + app)
--   OR manually: psql -U postgres -d fullproduct -f sql/seed.sql
--
-- Active VMs in this product:
--   - BeritaBoardVM.beritaboard.core       → beritaboard table
--   - BeritaBoardVM.beritaboard.subscription → subscription table
--   - TaskManagementVM.taskmanagement.core  → taskmanagement table
-- ============================================================


-- ============================================================
-- 1. BERITA BOARD / ANNOUNCEMENTS  (5 rows)
--    Columns: beritaid, content
-- ============================================================
INSERT INTO beritaboard (beritaid, content) VALUES
  (1, 'Selamat datang di portal pengumuman perusahaan! Pastikan selalu memantau halaman ini untuk informasi terbaru.'),
  (2, 'Sprint Review Kuartal 2 akan dilaksanakan pada 10 Juni 2026 pukul 14.00 WIB di Ruang Rapat Utama.'),
  (3, 'Pembaruan sistem dijadwalkan pada 15 Juni 2026 pukul 00.00–02.00 WIB. Layanan akan tidak tersedia sementara.'),
  (4, 'Rekrutmen magang batch 2 telah resmi dibuka. Kirimkan lamaran sebelum 30 Juni 2026 ke hr@company.com.'),
  (5, 'Kebijakan cuti tahunan yang baru mulai berlaku per 1 Juli 2026. Silakan baca panduan lengkapnya di portal HR.')
ON CONFLICT (beritaid) DO NOTHING;


-- ============================================================
-- 2. TASK MANAGEMENT  (5 rows)
--    Columns: idtask, title, description, status
-- ============================================================
INSERT INTO taskmanagement (idtask, title, description, status) VALUES
  (101, 'Buat desain mockup homepage',
        'Rancang tampilan awal dan komponen UI untuk halaman utama',
        'TODO'),
  (102, 'Integrasi API pembayaran',
        'Hubungkan payment gateway ke sistem backend menggunakan REST API',
        'IN_PROGRESS'),
  (103, 'Pengujian fitur login dan registrasi',
        'Uji semua skenario autentikasi termasuk edge case dan validasi input',
        'DONE'),
  (104, 'Deploy aplikasi ke server staging',
        'Siapkan environment staging dan jalankan pipeline deployment otomatis',
        'TODO'),
  (105, 'Review dan perbarui dokumentasi API',
        'Periksa kelengkapan dan keakuratan seluruh dokumentasi endpoint REST',
        'IN_PROGRESS')
ON CONFLICT (idtask) DO NOTHING;


-- ============================================================
-- Advance hibernate_sequence past all manually inserted IDs
-- so the app does not generate conflicting IDs at runtime.
-- ============================================================
SELECT setval('hibernate_sequence', 1000, true);
