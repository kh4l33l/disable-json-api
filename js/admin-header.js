function dra_namespace_click(namespace, id) {
    const namespaceInput = document.getElementById('dra_namespace_' + id);
    if (!namespaceInput) {
        return;
    }

    const routeInputs = Array.from(document.querySelectorAll('#route-container input[data-namespace]')).filter((routeInput) => {
        return routeInput.dataset.namespace === namespace;
    });

    if (namespaceInput.checked) {
        routeInputs.forEach((routeInput) => {
            routeInput.checked = true;
        });
    } else {
        routeInputs.forEach((routeInput) => {
            routeInput.checked = false;
        });
    }
}
