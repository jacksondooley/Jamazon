

export const showAllProducts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/products/'
    })
)