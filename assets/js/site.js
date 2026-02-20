(function(){
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('is-revealed');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});

  els.forEach(el=>{
    el.classList.add('reveal');
    io.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = `
    .reveal{opacity:0; transform: translateY(10px); transition: opacity .5s ease, transform .5s ease;}
    .is-revealed{opacity:1; transform: translateY(0);}
  `;
  document.head.appendChild(style);
})();
