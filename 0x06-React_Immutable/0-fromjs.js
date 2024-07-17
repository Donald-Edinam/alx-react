import { fromJS } from "./node_modules/immutable/dist/immutable"

export default function getImmutatableObject (object){
    return fromJS(object)
}