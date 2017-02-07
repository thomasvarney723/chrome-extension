function urlSortOrder(url) {
    const last2URLChars = url(-2);
    if(last2URLChars === "=1")
        return 1;
    else if(last2URLChars === "-1")
        return -1;
    else
        console.log("error branch!!!");
}

var statsHTML =
'<li class="" id="stats"> \
  <a href="chrome-extension://obimnpegdkedbnankaghlkbblffejlph/stats.html">STATS</a> \
</li>';
document.querySelector("#partnersNav li:nth-child(4)")
  .insertAdjacentHTML('afterend', statsHTML);

var sortLabelHTML =
  '<label for="sortDD" class="control-label">Sort order:</label>';
  
var sortSelectHTML =
  '<select id="sortDD" class="form-control" onchange="javascript:submitItemsPerPageDropdown(\'invoiceSearch.html\', \'20\', \'1\', \'INVOICE_NUM_SORT\', this.value);"> \
			<option value="1" >Ascending</option> \
			<option value="-1">Descending</option> \
		</select>';
		
document.querySelector("#resultsPerPage select")
  .insertAdjacentHTML('afterend', sortLabelHTML + sortSelectHTML);
  
// invoice URL:
// https://partners.menard-inc.com/partners/prepareHaulerInvoice.html