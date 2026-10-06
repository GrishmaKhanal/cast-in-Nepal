var q = document.getElementById('q');
var items = [].slice.call(document.querySelectorAll('#list li'));
var count = document.getElementById('count');
var none = document.getElementById('none');
var text = items.map(function (li) { return li.textContent.toLowerCase(); });

function filter() {
  var term = q.value.trim().toLowerCase();
  var shown = 0;
  items.forEach(function (li, i) {
    var hit = !term || text[i].indexOf(term) !== -1;
    li.hidden = !hit;
    if (hit) shown++;
  });
  count.textContent = shown + ' of ' + items.length;
  none.hidden = shown !== 0;
  try { history.replaceState(null, '', term ? '?q=' + encodeURIComponent(q.value.trim()) : location.pathname); } catch (e) {}
}

q.value = new URLSearchParams(location.search).get('q') || '';
q.addEventListener('input', filter);
document.addEventListener('keydown', function (e) {
  if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); }
  if (e.key === 'Escape') { q.value = ''; filter(); }
});
if (q.value) filter();
