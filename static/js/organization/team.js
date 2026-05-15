$(() => {
    var emailInput = $('#member-email')
    var successMessage = $('#success-message')
    var errorMessage = $('#error-message')

    $('.invite').click(function () {
        if (!emailInput.val()) {
            emailInput.addClass('is-invalid')
        } else {
            emailInput.removeClass('is-invalid')
            peermetrics.post(peermetrics.urls.organizationTeam(peermetrics.organizationId), {
                email: emailInput.val()
            }).then(function () {
                emailInput.val('')
                successMessage.show()

                setTimeout(() => {
                    successMessage.hide()
                }, 3000)
            }).catch(function (err) {
                emailInput.addClass('is-invalid')
                errorMessage.show()
                setTimeout(() => {
                    errorMessage.hide()
                }, 5000)
            })
        }
    })
})