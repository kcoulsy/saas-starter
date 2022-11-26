const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // setting path to fix getServerSideProps calls on vercel
    localePath: path.resolve('./src/locales'),
  },
};
