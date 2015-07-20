function simulateFilter() {
        var trs = document.getElementById("theTable").getElementsByTagName("tbody")[0].rows;
        for(var i = 0, tr; tr = trs[i]; i++) {
                if(Math.floor(Math.random()*3) > 1) {
                        if(tr.className.search("invisibleRow") == -1) {
                                tr.className += (tr.className ? " " : "") + "invisibleRow";
                        };
                };
        };
        // Recall the paginater's init method to redraw the correct pagination list by passing in the table's ID...
        // If no ID is passed, all pagination lists for all tables are recalculated.
        tablePaginater.init("theTable");
};

function resetTable() {
        var trs = document.getElementById("theTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
        for(var i = 0, tr; tr = trs[i]; i++) {
                tr.className = tr.className.replace("invisibleRow", "");
        };
        // Recall the paginater's init method to redraw the correct pagination list by passing in the table's ID...
        // If no ID is passed, all pagination lists for all tables are recalculated.
        tablePaginater.init("theTable");
};
/*
        The following JavaScript Object is used to test the callback functionality for both
        the tableSort & pagination scripts. It calculates the average rating for the rows
        "currently visible" on screen and updates the appropriate table cell with the new value.
        
        Additionally, the method "displayTextInfo" is used by the pagination script to display
        the current page number etc.
*/
var callbackTest = {
        calculateTotalRating:function(opts) {
                var trs  = document.getElementById("theTable").getElementsByTagName("tbody")[0].rows,
                    tot  = 0,
                    cnt  = 0,
                    cell = document.getElementById("visibleTotal");
                    
                for(var i = 0, tr; tr = trs[i]; i++) {
                        // If the row is visible i.e. has not display:none or the className "invisibleRow" (used by the fake filter)
                        if(tr.style.display != "none" && tr.className.search(/(^|\s)invisibleRow($|\s)/) == -1) {
                                tot += Number(fdTableSort.getInnerText(tr.cells[6]));
                                cnt++;
                        };
                };
                
                while(cell.firstChild) {
                        cell.removeChild(cell.firstChild);
                };
                
                cell.appendChild(document.createTextNode(Number(tot / cnt).toFixed(2)));
        },
        displayTextInfo:function(opts) {
                if(!("currentPage" in opts)) { return; }
                
                var p = document.createElement('p'),
                    t = document.getElementById('theTable-fdtablePaginaterWrapTop'),
                    b = document.getElementById('theTable-fdtablePaginaterWrapBottom');
                
                p.className = "paginationText";    
                p.appendChild(document.createTextNode("Showing page " + opts.currentPage + " of " + Math.ceil(opts.totalRows / opts.rowsPerPage)));
                
                t.insertBefore(p.cloneNode(true), t.firstChild);
                b.appendChild(p);
        }
};