module.exports = {
  extends: ['pagarme-react'],
  env: {
    jest: true,
    browser: true
  },
  rules: {
    "import/no-extraneous-dependencies": "off"
  }
}
