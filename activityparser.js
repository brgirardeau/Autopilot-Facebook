// Parses facebook.com/<user>/allactivity page for people and content for comments or likes
var outobj = {};
outobj.comments = [];
outobj.people=[];

function processlist(first, second) {
 $.each(first, function(i, first_i) {
   var a = first_i.innerHTML;
   var b = a.substring(0, a.lastIndexOf('</a>\'s'));
   console.log( b);
   outobj.people.push(b.substring(b.lastIndexOf('>') + 1));
   if(second[i] !== undefined) {
    outobj.comments.push(second[i].innerHTML);
   }
 });
}

$.each($('.fbTimelineSection'),function(i, item) { 
 var first = $(item).find('._42ef');
 var second = $(item).find('.fsm');
  processlist(first, second);
});
