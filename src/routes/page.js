export const load = async ({ parent, data }) => {
    await parent()
    let { page_server_data } = data
    return {
        page_server_data,
        page_data: { message: 'hello world' },
    }
}