
let currentPage = 1;
const itemsPerPage = 10;
let selectedFilters = [];
let filteredProducts = [...Products];

const renderFilters = () => {
	const product_filters = document.getElementById("product-filters")
	let categories = Products.map(product => product.category);
	categories = new Set(categories);

	// Create the product filters
	let i = 0;
	categories.forEach(category => {
		// Don't make a category from an empty string
		if (category.length === 0)
			return;

		const buttonsHTML = `
			<div class="ridge-border-squared" style="padding: 2px; margin-bottom: 10px;">
				<input type="checkbox" id="filter${i}" name="filter${i}" value="${category}">
				<label class="system-ui-font" style="color: white;" for="filter${i}">${category}</label><br>
			</div>
		`

		product_filters.innerHTML += buttonsHTML
		i++
	});
	// a close button that only appears on mobile
	const closeNavBarButton = `
		<button class="product-filters-togglemenu mobile-only"><i>></i></button>
	`
	product_filters.innerHTML += closeNavBarButton
}

const renderProducts = () => {
	const start = (currentPage - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	const visibleProducts = filteredProducts.slice(start, end);

	const productList = document.getElementById('product-listing');
	productList.innerHTML = '';

	// Don't render the previous/next page buttons and the page number if
	// we don't have any items that are going to be rendered
	let paginationDivs = document.getElementsByClassName('pagination');
	if (visibleProducts.length === 0) {
		for (let i = 0; i < paginationDivs.length; i++) {
			paginationDivs[i].classList.add('hidden');
		}
		return;
	}
	else {
		for (let i = 0; i < paginationDivs.length; i++) {
			paginationDivs[i].classList.remove('hidden');
		}
	}

	visibleProducts.forEach(product => {
		// Create the HTML structure using template literals
		const productsHTML = `
		<div class="horz-flex-container ridge-border product-padding" style="position: sticky;">
			<div class="vert-flex-container">
				<img class="product-image product-border" src="${product.image}"/>
				<h2 class="system-ui-font h2-centered blue-blurry-shadow product-name">${product.name}</h2>
			</div>
			<div>
				<p class="small-leftright-padding system-ui-font blue-blurry-shadow">${product.description}</p>
				<p class="small-leftright-padding system-ui-font blue-blurry-shadow">Ποσότητες: ${product.amount}</p>
			</div>
		</div>
		`;

		// Append the generated HTML to the 'products' div
		productList.innerHTML += productsHTML;
	});

	let pageNumbers = document.getElementsByClassName('pageNumber');
	for (let i = 0; i < pageNumbers.length; i++) {
		pageNumbers[i].textContent = `${currentPage} / ${getTotalPages()}`;
	}
};

const filterProducts = () => {
	const searchInput = document.getElementById('searchInput').value.toLowerCase();

	filteredProducts = Products.filter(product => {
		const matchesCategory = selectedFilters.length === 0 || selectedFilters.includes(product.category);
		const matchesSearch = product.name.toLowerCase().includes(searchInput);
		return matchesCategory && matchesSearch;
	});

	currentPage = 1;  // Reset to first page after filter
	renderProducts();
};

const getTotalPages = () => {
	return Math.ceil(filteredProducts.length / itemsPerPage);
}

document.getElementById('searchInput').addEventListener('input', filterProducts);

const nextPageBtns = document.getElementsByClassName('nextPage');
for (let i = 0; i < nextPageBtns.length; i++) {
	nextPageBtns[i].addEventListener('click', () => {
		const totalPages = getTotalPages();
		if (currentPage < totalPages) {
			currentPage++;
			renderProducts();
			document.getElementById('searchInput').scrollIntoView();
		}
	});
}

const prevPageBtns = document.getElementsByClassName('prevPage');
for (let i = 0; i < prevPageBtns.length; i++) {
	prevPageBtns[i].addEventListener('click', () => {
		if (currentPage > 1) {
			currentPage--;
			renderProducts();
			document.getElementById('searchInput').scrollIntoView();
		}
	});
}

// Initial render
renderFilters();
renderProducts();

// Add the functionality to the product filters after the initial render
document.querySelectorAll('#product-filters input[type="checkbox"]').forEach(button => {
	button.addEventListener('change', () => {
		const category = button.getAttribute('value');

		if (selectedFilters.includes(category) ?
			selectedFilters = selectedFilters.filter(s => s !== category) :
			selectedFilters.push(category)
		);
		// this only changes the ticked/unticked box
		button.click();

		filterProducts();
	});
});

// Add functionality for the mobile open/close navbar button
document.querySelectorAll('.product-filters-togglemenu').forEach(button => {
	button.addEventListener('click', () => {
		product_filters = document.getElementById('product-filters');
		product_filters.classList.toggle('hidden');
	});
});