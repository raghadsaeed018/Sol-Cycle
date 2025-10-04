/* static/script.js
   Handles charts, smooth scrolling, and fade-up animation
*/

// Smooth scroll helper
function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Fade-up on scroll using IntersectionObserver */
document.addEventListener('DOMContentLoaded', () => {
  const obsOptions = { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.12 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, obsOptions);

  document.querySelectorAll('.fade-up').forEach(node => observer.observe(node));
});

/* Chart: Resource Conversion (bar) */
document.addEventListener('DOMContentLoaded', () => {
  // Resource Chart
  const rCtx = document.getElementById('resourceChart');
  if(rCtx){
    new Chart(rCtx, {
      type: 'bar',
      data: {
        labels: ['Inorganic Waste', 'Collected Ice', 'Output Material'],
        datasets: [{
          label: 'Mass (kg)',
          data: [12600, 120000, 180000],
          backgroundColor: ['#ea5c34', '#e88d74', '#ecc29c'],
          borderRadius: 6
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                return ctx.dataset.label + ': ' + ctx.parsed.y.toLocaleString() + ' kg';
              }
            }
          },
          title: { display: true, text: 'Mass Flow: Waste → Ice → Output', color: '#efece7' }
        },
        scales: {
          x: { ticks:{ color:'#efece7' }, grid:{ display:false } },
          y: { ticks:{ color:'#efece7' }, grid:{ color:'rgba(255,255,255,0.04)' } }
        },
        responsive:true,
        maintainAspectRatio:false,
        layout:{padding:{top:6,bottom:6}}
      }
    });
  }

  // Finance Chart (doughnut) to visualize Start-Up vs Savings (high level)
  const fCtx = document.getElementById('financeChart');
  if(fCtx){
    new Chart(fCtx, {
      type: 'doughnut',
      data: {
        labels: ['Start-Up Cost', 'Launch Cost', 'Launch Cost Saved'],
        datasets: [{
          data: [50420000, 2200000, 119700000],
          backgroundColor: ['#756454', '#423833', '#ea5c34'],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          legend: { position: 'bottom', labels:{color:'#efece7'} },
          tooltip: {
            callbacks: {
              label: function(ctx){
                const label = ctx.label || '';
                const val = ctx.raw;
                // human readable
                const formatted = val >= 1e6 ? '$' + (val/1e6).toFixed(2)+'M' : '$' + val.toLocaleString();
                return label + ': ' + formatted;
              }
            }
          },
          title: { display:true, text: 'High-level Finance Snapshot', color:'#efece7' }
        },
        responsive:true,
        maintainAspectRatio:false,
      }
    });
  }
});

/* small helper to add 'in-view' style (we add CSS via class) */
(function addInViewStyles(){
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-up{opacity:0;transform:translateY(18px);transition:opacity 560ms ease, transform 560ms cubic-bezier(.2,.9,.25,1)}
    .fade-up.in-view{opacity:1;transform:none}
  `;
  document.head.appendChild(style);
})();
