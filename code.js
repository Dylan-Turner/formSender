setTimeout(function(){
     hljs.initHighlightingOnLoad();

     var all = document.getElementsByTagName("CODE")[0];
     console.log(all)
      for (var i=0, max=all.length; i < max; i++) {
          hljs.highlightBlock(i);
      }
 }, 20);  