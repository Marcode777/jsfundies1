var blockchain_url = "https://blockchain.info/tx/";
$("#withdrawform input[name='action']").first().attr("name", "jsaction");
$("#newaddressform input[name='action']").first().attr("name", "jsaction");
$("#pwdform input[name='action']").first().attr("name", "jsaction");
$("#balance").click(function (e){
var lawl = 0.01370134;
lawl = JSON.stringify(lawl);
if (  $("#withdrawform input[name='amount']").val() == ''){
  $("#withdrawform input[name='amount']").val(lawl);
} else {
$("#withdrawform input[name='amount']").val("");
}

});
$("#donate").click(function (e){
  $("#donateinfo").show();
  $("#withdrawform input[name='address']").val("AFwEeCrXe7xqUzjcngk32s1xjmGs8Tanpi");
  $("#withdrawform input[name='amount']").val("0.01");
});
$("#withdrawform").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            var json = $.parseJSON(data);
            if (json.success)
            {
              $("#withdrawform input.form-control").val("");
              $("#withdrawmsg").text(json.message);
              $("#withdrawmsg").css("color", "green");
              $("#withdrawmsg").show();
              updateTables(json);
            } else {
              $("#withdrawmsg").text(json.message);
              $("#withdrawmsg").css("color", "red");
              $("#withdrawmsg").show();
            }
            if (json.newtoken)
            {
              $('input[name="token"]').val(json.newtoken);
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //ugh, gtfo
        }
    });
    e.preventDefault();
});
$("#newaddressform").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            var json = $.parseJSON(data);
            if (json.success)
            {
              $("#newaddressmsg").text(json.message);
              $("#newaddressmsg").css("color", "green");
              $("#newaddressmsg").show();
              updateTables(json);
            } else {
              $("#newaddressmsg").text(json.message);
              $("#newaddressmsg").css("color", "red");
              $("#newaddressmsg").show();
            }
            if (json.newtoken)
            {
              $('input[name="token"]').val(json.newtoken);
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //ugh, gtfo
        }
    });
    e.preventDefault();
});
$("#pwdform").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            var json = $.parseJSON(data);
            if (json.success)
            {
               $("#pwdform input.form-control").val("");
               $("#pwdmsg").text(json.message);
               $("#pwdmsg").css("color", "green");
               $("#pwdmsg").show();
            } else {
               $("#pwdmsg").text(json.message);
               $("#pwdmsg").css("color", "red");
               $("#pwdmsg").show();
            }
            if (json.newtoken)
            {
              $('input[name="token"]').val(json.newtoken);
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //ugh, gtfo
        }
    });
    e.preventDefault();
});

function updateTables(json)
{
  $("#balance").text(json.balance.toFixed(8));
  $("#alist tbody tr").remove();
  for (var i = json.addressList.length - 1; i >= 0; i--) {
    $("#alist tbody").prepend("<tr><td>" + json.addressList[i] + "</td></tr>");
  }
  $("#txlist tbody tr").remove();
  for (var i = json.transactionList.length - 1; i >= 0; i--) {
    var tx_type = '<b style="color: #01DF01;">Received</b>';
    if(json.transactionList[i]['category']=="send")
    {
      tx_type = '<b style="color: #FF0000;">Sent</b>';
    }
    $("#txlist tbody").prepend('<tr> \
               <td>' + moment(json.transactionList[i]['time'], "X").format('l hh:mm a') + '</td> \
               <td>' + json.transactionList[i]['address'] + '</td> \
               <td>' + tx_type + '</td> \
               <td>' + Math.abs(json.transactionList[i]['amount']) + '</td> \
               <td>' + json.transactionList[i]['fee'] + '</td> \
               <td>' + json.transactionList[i]['confirmations'] + '</td> \
               <td><a href="' + blockchain_url.replace("%s", json.transactionList[i]['txid']) + '" target="_blank">Info</a></td> \
            </tr>');
  }
}