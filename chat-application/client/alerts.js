import swal from 'sweetalert2';

let swalDefaults = swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
        popup: 'save-page-popup',
        header: 'save-page-header-default',
        title: 'title-class',
        // content: 'save-page-content',
        actions: 'save-page-actions',
    }
})

export const alert = (o) => swalDefaults.fire(o)

export default {
    system: {
        isOffline: () => ({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timerProgressBar: true,
            icon: 'warning',
            title: 'No internet connection found. App is running in offline mode.',
            timer: 3000
        }),
        requestFailed: (message, text) => ({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            customClass: {
                title: 'custom-error-class'
            },
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', swal.stopTimer)
                toast.addEventListener('mouseleave', swal.resumeTimer)
            },
            icon: 'error',
            title: message,
            text: text
        }),
        requestSuccess: (message) => ({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
            title: message || 'Saved successfully',
        }),
        requestSuccessCenter: (message, text, showConfirmButton, timer) => ({
            position: 'center',
            showConfirmButton: showConfirmButton || false,
            timer: timer || 3000,
            icon: 'success',
            title: message || 'Saved successfully',
            text: text
        }),
        info: (infoMessage) => ({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            icon: 'info',
            title: infoMessage,
        }),
        askForDelete: (msg) => ({
            title: 'Are you sure ?' || msg,
            icon: 'warning',
            showConfirmButton: true,
            showCancelButton: true,
            reverseButtons: true,

        }),
        startLoading: (msg) => ({
            title: msg || 'loading',
            showConfirmButton: false,
            showCancelButton: false
        }),
        askForModalClose: (msg) => ({
            title: msg,
            icon: 'warning',
            showConfirmButton: true,
            showCancelButton: true
        }),
    },
    tracker: {
        stop: () => ({
            title: 'Are you sure',
            showConfirmButton: true,
            showCancelButton: true
        })
    },
    builder: {
        askBeforeClose: (msg) => ({
            title: 'Do you really want to leave? you have unsaved changes!',
            icon: 'warning',
            showConfirmButton: true,
            showCancelButton: true
        })
    }
}
