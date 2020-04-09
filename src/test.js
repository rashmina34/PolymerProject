class MyLogin extends PolymerElement {
    static get template() {
        return html`
        <h1>Hello World..!!</h1>
        <iron-form id="loginUserForm"  on-iron-form-response="handlePositiveResponse" on-iron-form-error="handleNegativeResponse">
                <form id="innerLoginUserForm" content-type="application/json" method="post">
                    <paper-input id="email" name="email"  label="E-Mail Address"></paper-input>
                    <paper-input id="password" name="password" label="Password" type="password"></paper-input>
                    <paper-button disabled="{{activeRequest}}" raised id="loginButton" on-tap="submitLogin">Sign In</paper-button>
                </form>
        </iron-form>
        `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged'
            },
            routeData: Object,
            subroute: Object
        };
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)'
        ];
    }

    _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
        if (!page) {
            this.page = 'login';
        } else if (['view1', 'view2', 'view3'].indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'view404';
        }

        // Close a non-persistent drawer when the page & route are changed.
        // if (!this.$.drawer.persistent) {
        //   this.$.drawer.close();
        // }
    }

    _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {
            case 'view1':
                import('./page1.js');
                break;
            case 'view2':
                import('./page2.js');
                break;
            case 'view3':
                import('./page3.js');
                break;
        }
    }

    submitLogin(e) {
        var form = this.shadowRoot.querySelector('#loginUserForm');
        this.shadowRoot.querySelector('#innerLoginUserForm').action = 'http://localhost:8080/Polymer NodeBackend/rest/login'
        form.submit();
    }

    handlePositiveResponse(response) {
        this.set('route.path', '/page1')
        console.log(response);
    }

    handleNegativeResponse(error) {
        console.log(error);
    }
}