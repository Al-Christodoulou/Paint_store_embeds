
const createProductsPage = (page_title) => {
	content = `
		<h1 class="system-ui-font blue-blurry-shadow" style="color: white; text-align: center;">${page_title}</h1>
		<div style="text-align: center;">
			<input type="text" class="ridge-border system-ui-font" style="font-size: small; padding: 7px;" id="searchInput" placeholder="Τι ψάχνετε; 🔎">
			<div style="min-height: 50px;"></div>
		</div>
		`;
	content += createPaginationDiv(false);
	content += `
		<div id="products" class="horz-flex-container">
			<div id="product-filters" class="product-filters hidden"></div>
			<div id="product-listing" class="product-listing"></div>
			<button class="product-filters-togglemenu product-filters-circlebtn mobile-only"><i>«</i></button>
		</div>
	`;
	content += createPaginationDiv(true);
	content += `<div style="height: 80px;"></div>`;

	return content;
}

const createPaginationDiv = (paddingAtBegin) => {
	const padding = `<div style="height: 10px;"></div>`;
	const divContent = `
		<button class="prevPage page-buttons system-ui-font">Προηγούμενο</button>
		<span class="system-ui-font blue-blurry-shadow pageNumber" style="color: white;">1</span>
		<button class="nextPage page-buttons system-ui-font">Επόμενο</button>
	`;

	paginationDiv = `<div class="pagination">`;
	paddingAtBegin ?
		paginationDiv += padding + divContent :
		paginationDiv += divContent + padding;
	paginationDiv += `</div>`
	return paginationDiv;
}

// Now create the page
document.body.insertAdjacentHTML('beforeend', createProductsPage(document.currentScript.getAttribute('title')));