import Login from '../support/pageObject/login';

describe('Login', () => {
    describe('Login Test', () => {
        it('should successfully log in with valid credentials', () => {
            cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
            // Temukan input username dan password, lalu masukkan data yang valid
            cy.get('kelompok_8@gmail.com]').type('Sanbercode kelompok8');
            cy.get('Sanbercodekelompok8]').type('Sanbercode kelompok8');  // Ganti dengan selector dan password valid

            // Klik tombol login
            cy.get('button[type="Sign In"]').click();  // Ganti dengan selector tombol login Anda

            // Verifikasi apakah login berhasil (misalnya, setelah login, Anda diarahkan ke halaman beranda)
            cy.url().should('include', 'https://magento.softwaretestingboard.com/'); // Ganti '/dashboard' dengan URL setelah login berhasil

        });

        it('should show error for invalid credentials', () => {
            // Akses halaman login
            cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'); // Ganti dengan URL login aplikasi Anda

            // Masukkan kredensial yang salah
            cy.get('kelompokk_8@gmail.com').type('Kelompok 8');
            cy.get('SanberCode Kel8"]').type('SanberCode Kel8');

            // Klik tombol login
            cy.get('button[type="Sign In"]').click();

            // Verifikasi bahwa pesan kesalahan muncul
            cy.get('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible');  // Ganti dengan selector pesan error yang ditampilkan
        });
    });

})