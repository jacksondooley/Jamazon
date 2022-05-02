

export const indexCategoryProducts = (category) => (
    $.ajax({
        method: 'GET',
        url: `/api/products/`,
        data: { category }
    })
)

export const showProduct = (productId) => (
    $.ajax({
        method: 'GET',
        url: `/api/products/${productId}`
    })
)