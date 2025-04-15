const express = require('express');
const homeController = require('../controllers/homeController');
const adminRouter = require('./adminRouter');

const router = express.Router();

// Main routes
router.get('/', homeController.getHomePage);
router.get('/trangchu', homeController.getHomePage);
router.get('/sample', homeController.getSamplePage);
router.get('/hoctap', homeController.getHocTapPage);
router.get('/tracuudiem', homeController.getTraCuuDiemPage);
router.get('/chuongtrinhhoc', homeController.getChuongTrinhHocPage);
router.get('/dangky', homeController.getDangKyPage);
router.get('/ketquadangky', homeController.getKetQuaDangKyPage);
router.get('/lichhoc', homeController.getLichHocPage);
router.get('/lichthi', homeController.getLichThiPage);
router.get('/hocphi', homeController.getHocPhiPage);
router.get('/thanhtoan', homeController.getThanhToanPage);
router.get('/thongtinsinhvien', homeController.getThongTinSinhVienPage);

// Authentication routes
router.get('/login', homeController.getLoginPage);
router.get('/reset-password', homeController.getResetPasswordPage);
router.get('/forgot-password', homeController.getForgotPasswordPage);

// Use the admin router for /admin routes
router.use('/admin', adminRouter);

module.exports = router;
