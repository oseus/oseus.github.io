
function ShowDiv() {
    document.getElementById("myDIV").style.display = "";
    document.getElementById("BB").style.display='none';
}

window.onload = function() {
  document.getElementById('btn').onclick = function()
  {
    window.location.href = "https://www.google.fr/#q="+document.getElementById("url").value
  };
}

setTimeout(function(){ alert(" Hey Baby, I think I wanna marry you ! ;) (ps: cliques bien sur Recherche google et non Enter^^)"); }, 10000);
