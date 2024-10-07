const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
                const itemsPerPage = 10;
                let currentPage = 3;

                function paginate(items, page, itemsPerPage) {
                  const startIndex = (page - 1) * itemsPerPage;
                  return items.slice(startIndex, startIndex + itemsPerPage);
                }

                function displayPage(page) {
                  const paginatedItems = paginate(items, page, itemsPerPage);
                  console.log(`Displaying page ${page}:`, paginatedItems);
                }

                displayPage(currentPage); 