
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
				<input class="no-click-events" type="checkbox" id="filter${i}" name="filter${i}" value="${category}">
				<label class="system-ui-font no-click-events" style="color: white;" for="filter${i}">${category}</label><br>
			</div>
		`

		product_filters.innerHTML += buttonsHTML
		i++
	});
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
		<div class="horz-flex-container ridge-border product-padding product-card"
		 onclick="openModal('${product.image}', '${product.name}', '${product.description}', '${product.amount}')">
			<div class="vert-flex-container" style="margin-left: auto; margin-right: auto;">
				<div class="product-image-div">
					<img class="product-image product-border" src="${product.image}" alt="${product.name}" />
				</div>
				<h2 class="system-ui-font h2-centered blue-blurry-shadow product-name">${product.name}</h2>
			</div>
		</div>
		`;

		// Append the generated HTML to the 'products' div
		productList.innerHTML += productsHTML;
	});

	// Dynamic font scaling
	const titles = document.querySelectorAll('.product-name');

	titles.forEach(title => {
		// Get computed styles
		const computedStyle = getComputedStyle(title);
		let lineHeight = parseFloat(computedStyle.lineHeight);
	
		// Fallback if lineHeight is not numeric
		if (isNaN(lineHeight)) {
			lineHeight = parseFloat(computedStyle.fontSize); // Assuming 1.2 multiplier
		}
	
		const titleHeight = title.scrollHeight; // Get the content height
		const lines = Math.round(titleHeight / lineHeight); // Calculate number of lines
	
		// Adjust styles based on line count
		if (lines > 2) {
			//title.style.fontSize = 'large'; // Reduce font size for multi-line titles
			title.classList.add('product-name-fontsize-smaller');
		} else {
			//title.style.fontSize = 'x-large'; // Default font size
			title.classList.add('product-name-fontsize-default');
		}
	
		console.log(`Title: ${title.textContent}, Lines: ${lines}`);
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

	currentPage = 1; // Reset to first page after filter
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
	button.parentElement.addEventListener('click', () => {
		const category = button.getAttribute('value');

		if (selectedFilters.includes(category) ?
			selectedFilters = selectedFilters.filter(s => s !== category) :
			selectedFilters.push(category)
		);
		// this only changes the ticked/unticked box
		button.checked = !button.checked;

		filterProducts();
	});
});

// Add functionality for the mobile open/close navbar button
document.querySelectorAll('.product-filters-togglemenu').forEach(button => {
	button.addEventListener('click', () => {
		button.classList.toggle('openmenu');
		product_filters = document.getElementById('product-filters');
		// Set the css variable
		document.documentElement.style.setProperty('--product-filters-width', `${product_filters.offsetWidth - 10}px`);
		product_filters.classList.toggle('hidden');
	});
});


// Modal window functionality
document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('productModal');

	const modal_image = document.getElementById('productcont-image');
	const modal_name = document.getElementById('productcont-name');
	const modal_desc = document.getElementById('productcont-desc');
	const modal_amt = document.getElementById('productcont-amt');

	function openModal(image, name, description, amount) {
		modal.style.display = 'flex'; // Ensure modal is visible
		setTimeout(() => modal.classList.add('show'), 10); // Add the class after a short delay to trigger animation
		document.body.classList.add('modal-open'); // Disable scrolling

		// Update the information in the modal window
		modal_image.setAttribute('src', image);
		modal_name.innerHTML = name;
		modal_desc.innerHTML = description;
		modal_amt.innerHTML = amount.length > 0 ? `Ποσότητες: ${amount}` : '';
	}

	function closeModal() {
		modal.classList.remove('show'); // Remove fade-in class
		setTimeout(() => {
			modal.style.display = 'none'; // Fully hide modal after fade-out animation
		}, 300); // Match the CSS transition duration (0.3s)
		document.body.classList.remove('modal-open'); // Enable scrolling
	}

	window.openModal = openModal; // Attach to global scope
	window.closeModal = closeModal;

	window.onclick = function (event) {
		if (event.target === modal) {
			closeModal();
		}
	};
});