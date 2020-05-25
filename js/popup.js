((window, document, undefined) => {

        var URL_DEFAULT_APP = 'http://codigofacilito.com';
        var URL_APP_DEFAULT_COURSES = URL_DEFAULT_APP + "/courses";

        document.addEventListener("DOMContentLoaded", function(event) {
            console.log('set version init')
            init()
        });

        function init() {
            setVersion();
            addEventHandlers();
            validateWebsite();
        }

        function setVersion() {
            // alert('set version')
            let version = chrome.app.getDetails().version_name;
            let div_version = document.getElementById('version');
            div_version.innerHTML = "Extensión <br> v" + version
        }

        function addEventHandlers() {
            let logoEl = document.getElementById('logo-item');
            logoEl.addEventListener('click', function () {
                window.open(URL_DEFAULT_APP, "_blank")
            });

            let linkEl = document.getElementById('goto-courses');
            linkEl.addEventListener('click', function () {
                window.open(URL_APP_DEFAULT_COURSES, "_blank")
            });
        }

        function validateWebsite() {
            let errorDiv = document.getElementById('error-div');
            let webEl = document.getElementById('current-website');

            chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
                let url = tabs[0].url;
                if (url == URL_APP_DEFAULT_COURSES) {
                    errorDiv.className = 'd-none';
                } else {
                    errorDiv.className = '';
                }
                webEl.innerHTML = url;
            });
        }

       
    })(window, document);