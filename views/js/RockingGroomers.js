// This function is in case the prodcut can be delivered
// items (depending on the value of bShowDel)
function highlightDelivery(idTable, bShowDel) {
    // if bShowDel is true, then we're show delivery, if not nothing to show
    var i = 0;
    var oTable = document.getElementById(idTable);
    var oTBODY = oTable.getElementsByTagName('TBODY')[0];
    var aTRs = oTBODY.getElementsByTagName('TR');
    // going to all of the rows to check in case the delivery attribute is there 
    for (i = 0; i < aTRs.length; i++) {
        if (aTRs[i].getAttribute('delivery') && aTRs[i].getAttribute('delivery') == "true") {
            if (bShowDel) {
                aTRs[i].style.backgroundColor = "lightGreen";
            } else {
                aTRs[i].style.backgroundColor = "";
            };
        };
    };
};
// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};
window.addEventListener("load", function () {
    document.querySelector("#showDelivery").addEventListener("click", function () {
        highlightDelivery('menuTable', this.checked);
    });
});