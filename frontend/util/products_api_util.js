

export const showCategoryProducts = (category) => (
    $.ajax({
        method: 'GET',
        url: `/api/products/`,
        data: { category }
    })
)