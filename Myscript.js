$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


var triggerTabList = [].slice.call(document.querySelectorAll('#myPill a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})