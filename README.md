# Hoodie E-Mail Plugin
[![Build Status](https://travis-ci.org/hoodiehq/hoodie-plugin-email.svg)](https://travis-ci.org/hoodiehq/hoodie-plugin-email)
[![Dependency Status](https://david-dm.org/hoodiehq/hoodie-plugin-email.svg)](https://david-dm.org/hoodiehq/hoodie-plugin-email)
[![devDependency Status](https://david-dm.org/hoodiehq/hoodie-plugin-email/dev-status.svg)](https://david-dm.org/hoodiehq/hoodie-plugin-email#info=devDependencies)


Allow your users to send multipart emails, right from
the browser.

Frontend API:

```js
hoodie.email.send({
  to: 'joe@example.com',
  subject: 'Hey ho!',
  text: 'This is the text version',
  html: 'I can do <b>HTML</b>, <i>too</i>!'
})
```

Before sending email can be used, you need to configure an email service in the Admin Dashboard.
