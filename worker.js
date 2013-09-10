// Hoodie E-Mail worker.
// pickes up new emails, sends them via the
// `hoodie.sendEmail` API, and writes status
// back to email tasks
module.exports = function(hoodie, doneCallback) {

  hoodie.task.on('add:email', handleNewEmail)
  hoodie.task.on('change', function() {
    console.log('task!')
    console.log(arguments)
  });

  function handleNewEmail(dbName, email) {
    hoodie.sendEmail(email, function(error) {
      if(error) {
        hoodie.task.error(dbName, email, error);
        return;
      }

      hoodie.task.success(dbName, email);
    })
  }

  doneCallback();
};
