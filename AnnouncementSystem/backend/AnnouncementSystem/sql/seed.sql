BEGIN;

-- 1. CLEAN OLD DATA
TRUNCATE 
    beritaboard_impl, beritaboard_comp, 
    meetingmanagement_impl, meetingmanagement_comp, 
    taskmanagement_impl, taskmanagement_comp 
RESTART IDENTITY CASCADE;

-- ==========================================
-- 2. SEEDING: BERITA BOARD
-- ==========================================
INSERT INTO beritaboard_comp (beritaid, content, objectname, modulesequence) VALUES
(1, 'Kebijakan Keamanan Data Terbaru 2026', 'News_Security', 'BB-001'),
(2, 'Jadwal Cuti Bersama Idul Fitri', 'News_Holiday', 'BB-002'),
(3, 'Workshop AI untuk Produktivitas', 'News_Tech', 'BB-003'),
(4, 'Update Sistem Penggajian (Payroll)', 'News_Finance', 'BB-004'),
(5, 'Pemenang Inovasi Produk Bulan Ini', 'News_Award', 'BB-005'),
(6, 'Pemeliharaan Jaringan Internet Kantor', 'News_IT', 'BB-006'),
(7, 'Program Kesehatan Mental Karyawan', 'News_Health', 'BB-007'),
(8, 'Sosialisasi SOP Parkir Kendaraan', 'News_General', 'BB-008'),
(9, 'Renovasi Ruang Kolaborasi Lantai 3', 'News_Facility', 'BB-009'),
(10, 'Laporan Tahunan Perusahaan 2025', 'News_Corporate', 'BB-010'),
(11, 'Tips Menghindari Phishing Email', 'News_Security', 'BB-011'),
(12, 'Pembukaan Lowongan Internal Senior Dev', 'News_HR', 'BB-012'),
(13, 'Penyesuaian Jam Operasional Gym', 'News_Facility', 'BB-013'),
(14, 'Event Family Gathering Juni 2026', 'News_Social', 'BB-014'),
(15, 'Peluncuran Aplikasi Mobile Versi 3.0', 'News_Product', 'BB-015');

INSERT INTO beritaboard_impl (beritaid) SELECT beritaid FROM beritaboard_comp;

-- ==========================================
-- 3. SEEDING: MEETING MANAGEMENT
-- ==========================================
INSERT INTO meetingmanagement_comp (idmeeting, name, location, startdate, enddate, objectname, modulesequence) VALUES
(101, 'Quarterly Business Review', 'Board Room', '2026-06-01 09:00', '2026-06-01 12:00', 'Meet_QBR', 'MM-101'),
(102, 'Scrum Master Sync', 'Online - Zoom', '2026-06-01 14:00', '2026-06-01 15:00', 'Meet_Scrum', 'MM-102'),
(103, 'Kick-off Project Orion', 'Meeting Room A', '2026-06-02 10:00', '2026-06-02 11:30', 'Meet_Project', 'MM-103'),
(104, 'Monthly Marketing Strategy', 'Creative Hub', '2026-06-02 13:00', '2026-06-02 15:00', 'Meet_Mkt', 'MM-104'),
(105, 'Technical Interview Candidate #9', 'Google Meet', '2026-06-03 09:00', '2026-06-03 10:00', 'Meet_HR', 'MM-105'),
(106, 'DevOps Pipeline Optimization', 'Tech Room', '2026-06-03 11:00', '2026-06-03 12:00', 'Meet_DevOps', 'MM-106'),
(107, 'Townhall Meeting All Staff', 'Main Ballroom', '2026-06-04 15:00', '2026-06-04 17:00', 'Meet_Townhall', 'MM-107'),
(108, 'Weekly Budget Review', 'Finance Office', '2026-06-05 08:30', '2026-06-05 09:30', 'Meet_Finance', 'MM-108'),
(109, 'Product Design Critiques', 'Figma Voice', '2026-06-05 13:00', '2026-06-05 14:00', 'Meet_Design', 'MM-109'),
(110, 'Security Audit Briefing', 'War Room', '2026-06-08 10:00', '2026-06-08 11:00', 'Meet_Audit', 'MM-110'),
(111, 'Partnership Discussion with Google', 'Executive Suite', '2026-06-08 14:00', '2026-06-08 15:30', 'Meet_Partner', 'MM-111'),
(112, 'Backlog Grooming Session', 'Online - Discord', '2026-06-09 10:00', '2026-06-09 12:00', 'Meet_Agile', 'MM-112'),
(113, 'Change Request Board', 'Room 202', '2026-06-09 15:00', '2026-06-09 16:00', 'Meet_Change', 'MM-113'),
(114, 'Customer Support Sync', 'Support Room', '2026-06-10 09:00', '2026-06-10 10:00', 'Meet_CS', 'MM-114'),
(115, 'Fri-yay Coffee Chat', 'Canteen Area', '2026-06-12 16:00', '2026-06-12 17:00', 'Meet_Social', 'MM-115');

INSERT INTO meetingmanagement_impl (idmeeting) SELECT idmeeting FROM meetingmanagement_comp;

-- ==========================================
-- 4. SEEDING: TASK MANAGEMENT
-- ==========================================
INSERT INTO taskmanagement_comp (idtask, title, description, status, objectname, modulesequence) VALUES
(501, 'Fix Memory Leak in Auth', 'Optimize session handling in Node.js', 'In-Progress', 'Task_Dev', 'TSK-501'),
(502, 'Draft Employee Handbook', 'Update HR policies for 2026', 'Todo', 'Task_HR', 'TSK-502'),
(503, 'Migration to AWS S3', 'Move all assets from local to cloud storage', 'Done', 'Task_DevOps', 'TSK-503'),
(504, 'Create Banner Campaign', 'Design banner for Summer Sale 2026', 'In-Progress', 'Task_Design', 'TSK-504'),
(505, 'Database Indexing', 'Add indexes to slow performing queries', 'Todo', 'Task_DBA', 'TSK-505'),
(506, 'Reconcile Bank Statements', 'Monthly financial closing task', 'Done', 'Task_Finance', 'TSK-506'),
(507, 'QA Regression Test', 'Verify bug fixes for release v3.1', 'In-Progress', 'Task_QA', 'TSK-507'),
(508, 'Renew SSL Certificate', 'Production server certificate renewal', 'Todo', 'Task_IT', 'TSK-508'),
(509, 'Interview Score Compilation', 'Aggregate scores for developer roles', 'Done', 'Task_HR', 'TSK-509'),
(510, 'Review Legal Contract', 'Legal review for Cloud Provider agreement', 'Todo', 'Task_Legal', 'TSK-510'),
(511, 'Update Landing Page CMS', 'Integrate New Strapi API to frontend', 'In-Progress', 'Task_Dev', 'TSK-511'),
(512, 'Inventory Stock Opname', 'Count IT hardware assets in warehouse', 'Done', 'Task_GA', 'TSK-512'),
(513, 'Penetration Test Report', 'Analyze security vulnerabilities found', 'Todo', 'Task_Security', 'TSK-513'),
(514, 'Customer Survey Analysis', 'Summarize NPS feedback from May', 'In-Progress', 'Task_CS', 'TSK-514'),
(515, 'Clean Up Log Files', 'Remove logs older than 30 days', 'Done', 'Task_DevOps', 'TSK-515');

INSERT INTO taskmanagement_impl (idtask) SELECT idtask FROM taskmanagement_comp;

COMMIT;