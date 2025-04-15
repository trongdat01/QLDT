const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Dashboard
router.get('/dashboard', adminController.getDashboardPage);
router.get('/', (req, res) => {
    res.redirect('/admin/dashboard');
});

// Student account management
router.get('/students', adminController.getStudentsPage);
router.get('/students/create', adminController.getCreateStudentPage);
router.get('/students/edit/:id', adminController.getEditStudentPage);

// Faculty management
router.get('/faculty', adminController.getFacultyPage);

// News management
router.get('/news', adminController.getNewsPage);
router.get('/news/create', adminController.getCreateNewsPage);
router.get('/news/edit/:id', adminController.getEditNewsPage);
router.get('/news/detail/:id', adminController.getNewsDetailPage);

// Grades management
router.get('/grades', adminController.getGradesPage);
router.get('/grades/import', adminController.getImportGradesPage);
router.get('/grades/create', adminController.getCreateGradePage);
router.get('/grades/edit/:id', adminController.getEditGradePage);
router.get('/grades/detail/:id', adminController.getGradesDetailPage);

// Curriculum management
router.get('/curriculum', adminController.getCurriculumPage);
router.get('/curriculum/create', adminController.getCreateCurriculumPage);
router.get('/curriculum/edit/:id', adminController.getEditCurriculumPage);

// Course management
router.get('/courses', adminController.getCoursesPage);
router.get('/courses/create', adminController.getCreateCoursePage);
router.get('/courses/edit/:id', adminController.getEditCoursePage);

// Class management
router.get('/classes', adminController.getClassesPage);
router.get('/classes/create', adminController.getCreateClassPage);
router.get('/classes/edit/:id', adminController.getEditClassPage);

// Schedule management
router.get('/schedule', adminController.getSchedulePage);
router.get('/schedule/add', adminController.getAddSchedulePage);
router.get('/exam-schedule', adminController.getExamSchedulePage);

// Payment management
router.get('/payments', adminController.getPaymentsPage);
router.get('/payment-settings', adminController.getPaymentSettingsPage);
router.get('/payment-reports', adminController.getPaymentReportsPage);

// System settings and information
router.get('/settings', adminController.getSettingsPage);
router.get('/logs', adminController.getLogsPage);
router.get('/announcements', adminController.getAnnouncementsPage);
router.get('/profile', adminController.getProfilePage);

module.exports = router;
