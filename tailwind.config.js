module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "popo": ['Poppins', 'sans-serif']
       },
       backgroundImage: theme => ({
        // 'back-pattern': "url(../images/back1.jpg)",
        "lock": "url(../images/padlock.svg)",
        "email_back": "url(../images/email.svg)"
       }),
       backgroundSize: {
         "16": "1.5rem"
       },
       screens : {
        'sm-sm': {'min': '326px', 'max': '600px'}
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
