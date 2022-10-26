/* disabled by sven
$(".select-plan-group-item-button").on("click", function (e) {  
  e.stopImmediatePropagation();
  e.preventDefault(); 
  const selectedPlan = parseInt($(this).data("plan"));
  localStorage.setItem("plan", selectedPlan);
  var _learnq = window._learnq || [];
  _learnq.push(['track', 'Selected Plan', {
    'Plan': selectedPlan + " Meals",
  }]);
  if (window.location.pathname.indexOf("/plans-2") > -1) {
    window.location.href = $(this).attr("href");
  }
});
*/
//added by andy: runs on plans-2 and menus pages - see theme.liquid
//sessionStorage.setItem('planPageLanding','plans-2');

