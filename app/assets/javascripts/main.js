$(document).ready(function() {

	$('#show-add-form').on('click', function(){
		$('#form-add-todos').toggle();
	});

  $('#reset_button').on('click', function(){
    $('#form-add-todos').toggle();
    $('form').reset();
    event.preventDefault();
  });

	$('.todo-list input').on('ifCreated ifClicked ifChanged ifChecked ifUnchecked ifDisabled ifEnabled ifDestroyed', 
		function(event){
      if (event.type == 'ifChecked'){

        var url = '/update/'+$(this).data("id")
        $.ajax({
            url : url,
            type : 'PATCH',
             beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            contentType : 'application/json',
            xhr: function() {
                return window.XMLHttpRequest == null || new window.XMLHttpRequest().addEventListener == null 
                    ? new window.ActiveXObject("Microsoft.XMLHTTP")
                    : $.ajaxSettings.xhr();
            }
        }); 

      	$("label[for='"+$(this).attr("id")+"']").addClass('crossOfList');

      }else if (event.type == 'ifUnchecked'){

        var url = '/update/'+$(this).data("id")
        $.ajax({
            url : url,
            type : 'PATCH',
             beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            contentType : 'application/json',
            xhr: function() {
                return window.XMLHttpRequest == null || new window.XMLHttpRequest().addEventListener == null 
                    ? new window.ActiveXObject("Microsoft.XMLHTTP")
                    : $.ajaxSettings.xhr();
            }
        }); 
        
        	$("label[for='"+$(this).attr("id")+"']").removeClass('crossOfList');
        }
        }).iCheck({
          checkboxClass: 'icheckbox_square-blue',
          increaseArea: '20%'
        });

  var $disabledResults = $(".js-example-disabled-results");
  $disabledResults.select2({
      minimumResultsForSearch: -1
  });
});