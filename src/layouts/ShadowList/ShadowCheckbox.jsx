import { useSelector, useDispatch } from "react-redux"
import { updateCheckbox } from "../../features/shadows"

export default function ShadowCheckbox({name, shadowID}) {

    const checkboxShadow = useSelector(state => state.shadows.find(shadow => shadow.id === shadowID))

    const dispatch = useDispatch()

    return (
    <>
    <input
    onChange={() => dispatch(updateCheckbox({shadowID, name}))}
    // checked en fonction de la valeur du name (qui est boolean !)
    checked={checkboxShadow[name]}
    id={`checkbox-${name}-${shadowID}`}
    type="checkbox"
    className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"/>
    <label 
    className="leading-4 mr-5"
    htmlFor={`checkbox-${name}-${shadowID}`}>
        {/* mettre la première lettre en majuscule */}
        {name.charAt(0).toUpperCase() + name.slice(1)}
    </label>
    </>
  )
}