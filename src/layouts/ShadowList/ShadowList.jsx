import { useSelector, useDispatch } from "react-redux"
import { addShadow } from "../../features/shadows"
import Shadows from "./Shadow" 


export default function ShadowList() {

  const shadows = useSelector(state => state.shadows)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="font-bold text-lg ">Customize Shadows</p>
        <button className="py-1 px-3 text-sm rounded bg-green-500 text-white focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-green-700"
        onClick={() => dispatch(addShadow())}
        >Add a shadow</button>
      </div>
      <ul>
      {shadows.map((shadow, index) => (
        <Shadows
        panelNumber={index + 1}
        shadow={shadow}
        key={shadow.id}
        />
      ))}
      </ul>
    </div>
  )
}