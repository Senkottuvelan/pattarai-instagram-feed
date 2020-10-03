$(document).ready(function(){
  if (screen.width <= 699) {
document.location = "/feed/mobile/";
}
  $.ajax({
    url:'https://elevate-be-staging.azurewebsites.net/instafeed.php',
    type:"POST",
    dataType:'json',
    success:function(data){
      $("#pattarai-icon").append("<a target=\"_blank\" href=\"https://instagram.com/"+data.graphql.user.username+"\"><img class=\"rounded-circle\" src="+data.graphql.user.profile_pic_url+" class=\"rounded img-responsive\"></a>");
    for(var i=0;i<data.graphql.user.edge_owner_to_timeline_media.edges.length;i++){
    var time="";
      postdateobj = new Date(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.taken_at_timestamp * 1000);
      			posted_date = postdateobj.toUTCString();

      			time = posted_date.slice(0, 16);
    var caption="";
    if (data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text.length > 90) {
        caption=data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text.substring(0, 88) + "...";
    }
    else {
        caption=data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text;
    }

      if(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.__typename!='GraphVideo'){
      $("div.row").append("<div class=\"col-sm-5 p-2\"><div class=\"image\"><a target=\"_blank\" href=\"https://instagram.com/p/"+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.shortcode+"\"><img src="+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url+" class=\"border border-dark image__img rounded img-thumbnail img-responsive\"><div class=\"image__overlay image__overlay--blur\"><div class=\"image__title\">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class=\"fa fa-heart\"></i>&nbsp By &nbsp"+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_liked_by.count+"<p style=\"text-align:center\": class=\"image__description\">"+caption+"</p><p id=\"post_date\" style=\"text-align:center;\">"+time+"</p></div></div></a></div></div>");
      //<img src="cinqueterre.jpg" class="rounded-circle" alt="Cinque Terre">
    //alert(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url);
    }
  }
    }
});
});
