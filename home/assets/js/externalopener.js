window.shell = require('electron').shell;
document.getElementById("twitterclick").addEventListener("click", function (e) {
  e.preventDefault();
  var remoteLink = this.getAttribute('href');
  shell.openExternal( remoteLink );
});
document.getElementById("twitterclick").addEventListener("auxclick", function (e) {
  e.preventDefault();
  var remoteLink = this.getAttribute('href');
  shell.openExternal( remoteLink );
});
document.getElementById("r6tabclick").addEventListener("click", function (e) {
  e.preventDefault();
  var remoteLink = this.getAttribute('href');
  shell.openExternal( remoteLink );
});
document.getElementById("r6tabclick").addEventListener("auxclick", function (e) {
  e.preventDefault();
  var remoteLink = this.getAttribute('href');
  shell.openExternal( remoteLink );
});
document.getElementById("discordclick").addEventListener("click", function (e) {
  e.preventDefault();
  var remoteLink = this.getAttribute('href');
  shell.openExternal( remoteLink );
});
document.getElementById("discordclick").addEventListener("auxclick", function (e) {
  e.preventDefault();
  var remoteLink = this.getAttribute('href');
  shell.openExternal( remoteLink );
});
document.getElementById("githubclick").addEventListener("click", function (e) {
  e.preventDefault();
  var remoteLink = this.getAttribute('href');
  shell.openExternal( remoteLink );
});
document.getElementById("githubclick").addEventListener("auxclick", function (e) {
  e.preventDefault();
  var remoteLink = this.getAttribute('href');
  shell.openExternal( remoteLink );
});
