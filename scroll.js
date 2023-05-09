window.addEventListener('scroll', function() {
    var content = document.getElementById('content');
    var blocks = document.querySelectorAll('.block');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    content.style.transform = 'translateY(' + scrollTop + 'px)';
  
    blocks.forEach(function(block) {
      var blockTop = block.getBoundingClientRect().top + scrollTop;
      var blockBottom = block.getBoundingClientRect().bottom + scrollTop;
      var blockHeight = blockBottom - blockTop;
  
      if (blockTop < window.innerHeight && blockBottom > 0) {
        var progress = (scrollTop - blockTop) / blockHeight;
        block.style.opacity = 1 - progress;
      }
    });
  });