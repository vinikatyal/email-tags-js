$(function(){
  $('#tags input').on('focusout',function(){
    //validate for email address
    if(this.value ==='') {
      return;
    }
    var regularExp = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if(!regularExp.test(this.value)) {
      alert("Invalid Email Address");
      return;
    }
    var txt = this.value;
    if(txt) {
      $(this).before('<span class="tag">'+ txt.toLowerCase() +'</span>');
    }
    this.value="";
  }).on('keyup',function( e ){
    if(/(188|13)/.test(e.which)) $(this).focusout();

  });

  //remove tags
  $('#tags').on('click','.tag',function(){
     $(this).remove();
  });

});
