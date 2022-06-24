import { $authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data

}

export const createItem = async (cloth) => {
    const {data} = await $authHost.post('api/device', cloth)
    return data
}

export const fetchItems = async (typeId, page, limit) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, page, limit
    }})
    return data

}

export const fetchItem = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data

}