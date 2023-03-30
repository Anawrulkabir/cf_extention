document.getElementById("submit").addEventListener("click", function() {
  var handle = document.getElementById("handle").value;
  var password = document.getElementById("password").value;
  var code = document.getElementById("code").value;

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var tab = tabs[0];
    if (tab.url.startsWith("http://codeforces.com/problemset/problem/")) {
      var problemId = tab.url.split("/")[5];
      var submitUrl = "http://codeforces.com/problemset/submit";
      var form = document.createElement("form");
      form.method = "post";
      form.action = submitUrl;
      form.target = "_blank";
      var inputHandle = document.createElement("input");
      inputHandle.type = "hidden";
      inputHandle.name = "handle";
      inputHandle.value = handle;
      form.appendChild(inputHandle);
      var inputPassword = document.createElement("input");
      inputPassword.type = "hidden";
      inputPassword.name = "password
