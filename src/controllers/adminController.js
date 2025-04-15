const getDashboardPage = (req, res) => {
    return res.render('admin/dashboard.ejs');
};

// Student account management
const getStudentsPage = (req, res) => {
    return res.render('admin/students.ejs');
};

const getCreateStudentPage = (req, res) => {
    return res.render('admin/create-student.ejs');
};

const getEditStudentPage = (req, res) => {
    return res.render('admin/edit-student.ejs');
};

// Faculty management
const getFacultyPage = (req, res) => {
    return res.render('admin/faculty.ejs');
};

// News management
const getNewsPage = (req, res) => {
    return res.render('admin/news.ejs');
};

const getCreateNewsPage = (req, res) => {
    return res.render('admin/create-news.ejs');
};

const getEditNewsPage = (req, res) => {
    const newsId = req.params.id;
    // In a real application, you would fetch the news data from a database
    return res.render('admin/edit-news.ejs', { newsId });
};

const getNewsDetailPage = (req, res) => {
    const newsId = req.params.id;
    // In a real application, you would fetch the news data from a database
    return res.render('admin/news-detail.ejs', { newsId });
};

// Enhanced Grades management
const getGradesPage = (req, res) => {
    return res.render('admin/grades.ejs');
};

const getImportGradesPage = (req, res) => {
    return res.render('admin/import-grades.ejs');
};

const getCreateGradePage = (req, res) => {
    return res.render('admin/create-grade.ejs');
};

const getEditGradePage = (req, res) => {
    const studentId = req.params.id;
    // In a real application, you would fetch the student's grade data from a database
    return res.render('admin/edit-grade.ejs', { studentId });
};

const getGradesDetailPage = (req, res) => {
    const studentId = req.params.id;
    // In a real application, you would fetch student grade data from a database
    return res.render('admin/grades-detail.ejs', { studentId });
};

// Curriculum management
const getCurriculumPage = (req, res) => {
    return res.render('admin/curriculum.ejs');
};

const getCreateCurriculumPage = (req, res) => {
    return res.render('admin/create-curriculum.ejs');
};

const getEditCurriculumPage = (req, res) => {
    return res.render('admin/edit-curriculum.ejs');
};

// Course management
const getCoursesPage = (req, res) => {
    return res.render('admin/courses.ejs');
};

const getCreateCoursePage = (req, res) => {
    return res.render('admin/create-course.ejs');
};

const getEditCoursePage = (req, res) => {
    return res.render('admin/edit-course.ejs');
};

// Class management
const getClassesPage = (req, res) => {
    return res.render('admin/classes.ejs');
};

const getCreateClassPage = (req, res) => {
    return res.render('admin/create-class.ejs');
};

const getEditClassPage = (req, res) => {
    return res.render('admin/edit-class.ejs');
};

// Schedule management
const getSchedulePage = (req, res) => {
    return res.render('admin/schedule.ejs');
};

const getExamSchedulePage = (req, res) => {
    // In a real application, you would load exam schedule data
    return res.render('admin/exam-schedule.ejs');
};

const getAddSchedulePage = (req, res) => {
    return res.render('admin/add-schedule.ejs');
};

// Payment management
const getPaymentsPage = (req, res) => {
    return res.render('admin/payments.ejs');
};

const getPaymentSettingsPage = (req, res) => {
    return res.render('admin/payment-settings.ejs');
};

const getPaymentReportsPage = (req, res) => {
    return res.render('admin/payment-reports.ejs');
};

// System settings and logs
const getSettingsPage = (req, res) => {
    return res.render('admin/settings.ejs');
};

const getLogsPage = (req, res) => {
    return res.render('admin/logs.ejs');
};

const getAnnouncementsPage = (req, res) => {
    return res.render('admin/announcements.ejs');
};

const getProfilePage = (req, res) => {
    return res.render('admin/profile.ejs');
};

module.exports = {
    getDashboardPage,
    // Student management
    getStudentsPage,
    getCreateStudentPage,
    getEditStudentPage,
    // Faculty management
    getFacultyPage,
    // News management
    getNewsPage,
    getCreateNewsPage,
    getEditNewsPage,
    getNewsDetailPage,
    // Enhanced Grades management
    getGradesPage,
    getImportGradesPage,
    getCreateGradePage,
    getEditGradePage,
    getGradesDetailPage,
    // Curriculum management
    getCurriculumPage,
    getCreateCurriculumPage,
    getEditCurriculumPage,
    // Course management
    getCoursesPage,
    getCreateCoursePage,
    getEditCoursePage,
    // Class management
    getClassesPage,
    getCreateClassPage,
    getEditClassPage,
    // Schedule management
    getSchedulePage,
    getExamSchedulePage,
    getAddSchedulePage,
    // Payment management
    getPaymentsPage,
    getPaymentSettingsPage,
    getPaymentReportsPage,
    // System settings
    getSettingsPage,
    getLogsPage,
    getAnnouncementsPage,
    getProfilePage
};
