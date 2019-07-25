var config = {
    apiKey: "enter your own info",
    authDomain: "enter your own info",
    databaseURL: "enter your own info",
    projectId: "enter your own info",
    storageBucket: "enter your own info",
    messagingSenderId: "enter your own info"
};

firebase.initializeApp(config);

var getQRCodeInfo = firebase.database().ref("getQRCodeInfo");

var submitQRcodeInfo = function () {
  var qrcode = $("#qrcodeInfo").val();
  getQRCodeInfo.push({
    "qrcode": qrcode
  });
};

//allows us to read the most recent
getQRCodeInfo.limitToLast(1).on('child_added', function(childSnapshot) {
  readBackInfo = childSnapshot.val();
  $("#qrcode").html(readBackInfo.qrcode)
});

$(window).load(function () {

  $("#qrcodeInfoForm").submit(submitQRcodeInfo);

});