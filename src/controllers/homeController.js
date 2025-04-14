const getHomePage = (req, res) => {
    return res.render('home.ejs');
    // or if you're not using a view engine:
    // return res.send('Home Page');
};

const getABC = (req, res) => {
    return res.render('sample.ejs');
    // or if you're not using a view engine:
    // return res.send('ABC Page');
};

// New controller methods for learning corner pages
const getSamplePage = (req, res) => {
    return res.render('sample.ejs');
};

const getHocTapPage = (req, res) => {
    return res.render('hoctap.ejs');
};

const getTraCuuDiemPage = (req, res) => {
    return res.render('tracuudiem.ejs');
};

const getChuongTrinhHocPage = (req, res) => {
    return res.render('chuongtrinhhoc.ejs');
};

// New controller methods for registration pages
const getDangKyPage = (req, res) => {
    return res.render('dangky.ejs');
};

const getKetQuaDangKyPage = (req, res) => {
    return res.render('ketquadangky.ejs');
};

// Controller methods for schedule pages
const getLichHocPage = (req, res) => {
    return res.render('lichhoc.ejs');
};

const getLichThiPage = (req, res) => {
    return res.render('lichthi.ejs');
};

// Controller methods for financial pages
const getHocPhiPage = (req, res) => {
    return res.render('hocphi.ejs');
};

const getThanhToanPage = (req, res) => {
    return res.render('thanhtoan.ejs');
};

// Controller methods for authentication
const getLoginPage = (req, res) => {
    return res.render('login.ejs');
};

const getResetPasswordPage = (req, res) => {
    return res.render('reset-password.ejs');
};

const getForgotPasswordPage = (req, res) => {
    return res.render('forgot-password.ejs');
};

// Controller method for student information page
const getThongTinSinhVienPage = (req, res) => {
    return res.render('thongtinsinhvien.ejs');
};

module.exports = {
    getHomePage,
    getABC,
    getSamplePage,
    getHocTapPage,
    getTraCuuDiemPage,
    getChuongTrinhHocPage,
    getDangKyPage,
    getKetQuaDangKyPage,
    getLichHocPage,
    getLichThiPage,
    getHocPhiPage,
    getThanhToanPage,
    getLoginPage,
    getResetPasswordPage,
    getForgotPasswordPage,
    getThongTinSinhVienPage
};