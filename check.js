window.onload=function(){
  $('#car').carousel({
    interval:2000
  });
  $('#reg').validate({
    rules:{
      tet:{
        required:true,
        rangelength:[3,8]
      },
      pass:{
        required:true,
        rangelength:[5,12]
      },
      notpass:{
        required:true,
        equalTo:'#pass'
      }
    },
    messages:{
      tet:{
        required:'不得为空!',
        rangelength:'长度在{0}-{1}之间!'
      },
      pass:{
        required:'不得为空!',
        rangelength:'长度在{0}-{1}之间!'
      },
      notpass:{
        required:'不得为空!',
        equalTo:'与密码不一致!'
      }
    },
    errorClass:'error',
    errorElement:'label',
    submitHandler:function(form){
      alert('验证成功，准备ajax提交')
    }
  })
  $('#hot li:eq(0)').css('background','rgb(150, 171, 22)')
  $('#hot li:eq(1)').css('background','rgb(56, 167, 154)')
  $('#hot li:eq(2)').css('background','rgb(67, 199, 88)')
  $('#hot li:eq(3)').css('background','rgb(198, 67, 95)')
  
}
