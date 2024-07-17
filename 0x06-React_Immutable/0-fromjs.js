import { fromJS } from "./node_modules/immutable/dist/immutable"

const getImmutatableObject = (object) => {
    return fromJS(object)
}