-- ============================================================
-- Seed Data: ProgrammingProjectManagement
-- DB: programmingprojectmanagement (Docker) /
--     schedulingmanagementsystem_product_programmingprojectmanagement (local)
--
-- How to run:
--   ./gradlew runWinVMJ        (runs createTable + loadSql + app)
--   OR manually: psql -U postgres -d programmingprojectmanagement -f sql/seed.sql
--
-- NOTE: Run AFTER tables are created (./gradlew createTable first).
-- NOTE: If using JOINED inheritance for programmingproject, you must also
--       insert a matching row into the `project` table with the same idproject.
-- ============================================================


-- ============================================================
-- 1. LABEL  (5 rows)
--    Columns: idlabel, name, description
-- ============================================================
INSERT INTO label (idlabel, name, description) VALUES
  (1, 'Bug',           'Issues related to bugs and unexpected errors'),
  (2, 'Feature',       'New feature requests and enhancements'),
  (3, 'Improvement',   'Enhancements to existing functionality'),
  (4, 'Documentation', 'Documentation updates and additions'),
  (5, 'Testing',       'Test coverage, test cases, and QA tasks')
ON CONFLICT (idlabel) DO NOTHING;


-- ============================================================
-- 2. PROGRAMMING PROJECT  (5 rows)
--    Columns: idproject, name, description,
--             onlinerepository, defaultbranch, repositorylink
-- ============================================================
INSERT INTO programmingproject (idproject, name, description, onlinerepository, defaultbranch, repositorylink) VALUES
  (101, 'E-Commerce Platform',
        'Online shopping system with cart, checkout, and payment',
        'GitHub', 'main',    'https://github.com/org/ecommerce'),
  (102, 'HR Management System',
        'Human resources management, payroll, and attendance tracking',
        'GitHub', 'main',    'https://github.com/org/hrms'),
  (103, 'Inventory Tracker',
        'Real-time stock and inventory management with alerts',
        'GitLab', 'develop', 'https://gitlab.com/org/inventory'),
  (104, 'Customer Portal',
        'Self-service portal for customers to manage orders and support',
        'Bitbucket', 'master', 'https://bitbucket.org/org/customer-portal'),
  (105, 'Analytics Dashboard',
        'Business intelligence reporting and data visualization tool',
        'GitHub', 'main',    'https://github.com/org/analytics')
ON CONFLICT (idproject) DO NOTHING;


-- ============================================================
-- 3. TASK MANAGEMENT  (5 rows)
--    Columns: idtask, title, description, status
-- ============================================================
INSERT INTO taskmanagement (idtask, title, description, status) VALUES
  (201, 'Setup CI/CD Pipeline',
        'Configure automated build, test, and deploy pipeline',
        'TODO'),
  (202, 'Implement User Authentication',
        'Add JWT-based login, registration, and refresh token support',
        'IN_PROGRESS'),
  (203, 'Design Database Schema',
        'Create entity relationship diagram and write migration scripts',
        'DONE'),
  (204, 'Write Unit Tests',
        'Achieve minimum 80% code coverage for all core service modules',
        'TODO'),
  (205, 'Code Review Sprint 1',
        'Review and merge all open pull requests from Sprint 1',
        'IN_PROGRESS')
ON CONFLICT (idtask) DO NOTHING;


-- ============================================================
-- 4. EMAIL REMINDER  (5 rows)
--    Columns: idreminder, hour, minute, email, remindingforid, isdisabled
--    remindingforid references taskmanagement.idtask
-- ============================================================
INSERT INTO emailreminder (idreminder, hour, minute, email, remindingforid, isdisabled) VALUES
  (301,  9,  0, 'dev1@company.com',     201, false),
  (302, 10, 30, 'dev2@company.com',     202, false),
  (303, 14,  0, 'techlead@company.com', 203, false),
  (304,  8,  0, 'qa@company.com',       204, false),
  (305, 16,  0, 'manager@company.com',  205, false)
ON CONFLICT (idreminder) DO NOTHING;


-- ============================================================
-- Advance hibernate_sequence past all manually inserted IDs
-- so the app does not generate conflicting IDs at runtime.
-- ============================================================
SELECT setval('hibernate_sequence', 1000, true);
