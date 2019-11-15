$(function() {
function buildHTML(message){  
    var　img = message.image ? `<img src="${message.image}">` : "" ;
    var html =
     `<div class="message" data-message-id="${message.id}">
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.date}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
       ${img}
      </div>`
     
    return html;
  };
  
  
  $('.new_message').on('submit', function(e){
e.preventDefault();
var formData = new FormData(this);
var url = $(this).attr('action')
$.ajax({
  url: url,
  type: "POST",
  data: formData,
  dataType: "json",
  processData: false,
  contentType: false
})
.done(function(data){
   var html = buildHTML(data);
   $('.messages').append(html);
   $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
   $('form')[0].reset();
   $('.form__submit').prop('disabled', false);
  })
  .fail(function(){
    alert('error');
    // console.log('error');
    return false;
  });
  
});


var reloadMessages = function() {
  if (window.location.href.match(/\/groups\/\d+\/messages/)){
  //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
  var last_message_id =　$('.message:last').data("message-id");
  
  $.ajax({
    //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
    url: "api/messages",
    //ルーティングで設定した通りhttpメソッドをgetに指定
    type: 'GET',
    dataType: 'json',
    //dataオプションでリクエストに値を含める
    data: {id: last_message_id}
  })
  .done(function(messages) {
    var insertHTML = '';
    messages.forEach(function (message) {

      //htmlを作り出して、それを変数に代入(作り出す処理は非同期の時に作った)
      insertHTML = buildHTML(message); 
      
      //変数に代入されたhtmlをmessagesクラスにぶち込む
      $('.messages').append(insertHTML);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
  })

  .fail(function() {
    console.log('error');
  });
};
}
setInterval(reloadMessages, 5000);
})
