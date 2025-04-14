const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Root route now points to login page
if (homeController.getLoginPage) {
    router.get('/', homeController.getLoginPage)
}

// Home page moved to /trangchu
if (homeController.getHomePage) {
    router.get('/trangchu', homeController.getHomePage)
}

// Other authentication routes
if (homeController.getResetPasswordPage) {
    router.get('/reset-password', homeController.getResetPasswordPage)
}

if (homeController.getForgotPasswordPage) {
    router.get('/forgot-password', homeController.getForgotPasswordPage)
}

// Learning corner routes
if (homeController.getHocTapPage) {
    router.get('/hoctap', homeController.getHocTapPage)
}

if (homeController.getTraCuuDiemPage) {
    router.get('/tracuudiem', homeController.getTraCuuDiemPage)
}

if (homeController.getChuongTrinhHocPage) {
    router.get('/chuongtrinhhoc', homeController.getChuongTrinhHocPage)
}

// Registration routes
if (homeController.getDangKyPage) {
    router.get('/dangky', homeController.getDangKyPage)
}

if (homeController.getKetQuaDangKyPage) {
    router.get('/ketquadangky', homeController.getKetQuaDangKyPage)
}

// Schedule routes
if (homeController.getLichHocPage) {
    router.get('/lichhoc', homeController.getLichHocPage)
}

if (homeController.getLichThiPage) {
    router.get('/lichthi', homeController.getLichThiPage)
}

// Financial routes
if (homeController.getHocPhiPage) {
    router.get('/hocphi', homeController.getHocPhiPage)
}

if (homeController.getThanhToanPage) {
    router.get('/thanhtoan', homeController.getThanhToanPage)
}

// Student information route
if (homeController.getThongTinSinhVienPage) {
    router.get('/thongtinsinhvien', homeController.getThongTinSinhVienPage)
}

// Sample/News route
if (homeController.getSamplePage) {
    router.get('/sample', homeController.getSamplePage)
}

module.exports = router;