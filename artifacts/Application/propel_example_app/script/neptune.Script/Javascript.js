// Custom Init - Happens only once when mounting the component
sap.ui.getCore().attachInit(function (startParams) {

    sap.ui.core.BusyIndicator.show(0);
    var options = {
        parameters: {
            system: "CLD", // Optional
        },
    };

    apiRestAPI(options);
});
