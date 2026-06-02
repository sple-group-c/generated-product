-- ============================================================
-- Seed Data: ProjectMeetScheduler
-- DB: schedulingmanagementsystem_product_projectmeetscheduler
--
-- How to run:
--   ./gradlew runWinVMJ        (runs createTable + loadSql + app)
--   OR manually:
--     psql -U postgres -d schedulingmanagementsystem_product_projectmeetscheduler \
--          -f sql/seed.sql
--
-- Active VMs in this product:
--   - LabelVM.label.core                              → label table
--   - ProjectVM.project.core                          → project table
--   - MeetingManagementVM.meetingmanagement.core      → meetingmanagement table
--   - MeetingManagementVM.meetingmanagement.projectmeetingdelta → adds idproject FK
--   - TaskManagementVM.taskmanagement.core            → taskmanagement table
--
-- INSERT ORDER: project → meetingmanagement (FK to project)
-- ============================================================


-- ============================================================
-- 1. LABEL  (5 rows)
--    Columns: idlabel, name, description
-- ============================================================
INSERT INTO label (idlabel, name, description) VALUES
  (1, 'High Priority', 'Critical tasks that require immediate attention'),
  (2, 'Low Priority',  'Tasks that can be deferred to later sprints'),
  (3, 'In Review',     'Items currently undergoing peer or stakeholder review'),
  (4, 'Blocked',       'Tasks blocked by an external dependency or issue'),
  (5, 'Completed',     'Tasks that have been finished and verified')
ON CONFLICT (idlabel) DO NOTHING;


-- ============================================================
-- 2. PROJECT  (5 rows)
--    Columns: idproject, name, description
-- ============================================================
INSERT INTO project (idproject, name, description) VALUES
  (101, 'Website Redesign',
        'Complete overhaul of the company public-facing website and branding'),
  (102, 'Mobile App Development',
        'Build a cross-platform mobile application for Android and iOS'),
  (103, 'ERP Integration',
        'Integrate the new ERP system with existing internal tools and databases'),
  (104, 'Data Migration',
        'Migrate all legacy data to the new cloud-based infrastructure'),
  (105, 'Security Audit',
        'Conduct a full penetration test and security compliance review')
ON CONFLICT (idproject) DO NOTHING;


-- ============================================================
-- 3. MEETING MANAGEMENT  (5 rows)
--    Columns: idmeetingmanagement, name, startdate, enddate, location, idproject
--    idproject references project.idproject
-- ============================================================
INSERT INTO meetingmanagement (idmeetingmanagement, name, startdate, enddate, location, idproject) VALUES
  (201, 'Kickoff Meeting - Website Redesign',
        '2026-06-10', '2026-06-10', 'Meeting Room A',   101),
  (202, 'Sprint Planning - Mobile App',
        '2026-06-12', '2026-06-12', 'Meeting Room B',   102),
  (203, 'ERP Integration Design Review',
        '2026-06-15', '2026-06-15', 'Conference Hall',  103),
  (204, 'Data Migration Sync & Alignment',
        '2026-06-17', '2026-06-17', 'Zoom (Online)',    104),
  (205, 'Security Audit Kickoff & Scoping',
        '2026-06-20', '2026-06-20', 'Meeting Room A',   105)
ON CONFLICT (idmeetingmanagement) DO NOTHING;


-- ============================================================
-- 4. TASK MANAGEMENT  (5 rows)
--    Columns: idtask, title, description, status
-- ============================================================
INSERT INTO taskmanagement (idtask, title, description, status) VALUES
  (301, 'Create UI wireframes',
        'Design low-fidelity wireframes for all screens and user flows',
        'TODO'),
  (302, 'Set up development environment',
        'Configure local tools, Docker, and dependencies for the team',
        'DONE'),
  (303, 'Write REST API documentation',
        'Document all endpoints with request/response examples using OpenAPI',
        'IN_PROGRESS'),
  (304, 'Backend unit and integration testing',
        'Write and execute unit tests for all service and repository layers',
        'TODO'),
  (305, 'Production deployment v1.0',
        'Release the first production version through the CI/CD pipeline',
        'TODO')
ON CONFLICT (idtask) DO NOTHING;


-- ============================================================
-- Advance hibernate_sequence past all manually inserted IDs
-- so the app does not generate conflicting IDs at runtime.
-- ============================================================
SELECT setval('hibernate_sequence', 1000, true);
