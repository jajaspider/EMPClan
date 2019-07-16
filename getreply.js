var iframe = document.getElementById("cafe_main");
var iframeDocument = iframe.contentDocument;

var cmt = iframeDocument.getElementById("cmt_list");
var cmtclass = cmt.getElementsByClassName('m-tcol-c _rosRestrict _nickUI');

for(var i=0;cmtclass.length;i+=1){
  console.log(cmtclass[i].innerText);
}
