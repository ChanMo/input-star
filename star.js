/**
 * make input[type='star'] to input star
 * @author chen
 * @date 2015-06-01
 * @version 1.0
 */

/** get input[type='star'] **/
var star = $("[type='star']");

/** if star is exist **/
if(star.length > 0){
    /** inititial **/
  var star_list = '<div class="star_list" style="width:80%;float:right;font-size:24px;color:#ccc;"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>';
  var value = '';
  for(var k=0; k<star.length; k++){
    $(star[k]).after(star_list);
    $(star[k]).attr("type", "hidden");
    value = $(star[k]).val();
    if(value != 0){
      for(var j=0; j<value; j++){
        $(".star_list").eq(k).find("i").eq(j).removeClass("fa-star-o").addClass("fa-star");
      }
    }
  }

    /** click event **/
  $(".star_list").find("i").click(function(){
      var current_star_list = $(this).parent(".star_list");
    var i_index = $(this).index();
    current_star_list.prev("input").val(i_index+1);
    current_star_list.find("i").removeClass("fa-star").addClass("fa-star-o");
    for(var i=0; i<i_index+1; i++){
      current_star_list.find("i").eq(i).removeClass("fa-star-o").addClass("fa-star");
    }
  });
}
