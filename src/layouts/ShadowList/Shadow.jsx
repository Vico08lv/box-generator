import { useState, useEffect } from "react"
import chevron from "../../assets/chevron.svg"
import ShadowColorPicker from "./ShadowColorPicker"
import ShadowRange from "./ShadowRange"
import ShadowCheckbox from "./ShadowCheckbox"
import { useDispatch } from "react-redux"
import { removeShadow } from "../../features/shadows"

export default function Shadows({ panelNumber, shadow }) {

    const [toggleShadow, setToggleShadow] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if(panelNumber === 1){
            setToggleShadow(true)
        }
    }, [])

    const shadowInputs = shadow.inputs.map((input,index) => {
        if(input.type === "range"){
          return <ShadowRange 
          key={index} 
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
           />
        }
        else if(input.type === "color"){
          return <ShadowColorPicker 
          key={index} 
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
           />
        }
      })

    return (
        <li className="bg-gray-50 border-b border-gray-300">
            <button
            className=" w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"
                onClick={() => setToggleShadow(!toggleShadow)}>
                <span>Shadow {panelNumber}</span>
                <img
                    style={{
                        transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg "}`
                    }}
                    className="font-bold w-5"
                    src={chevron} alt="" />
            </button>
            {toggleShadow && <>
                <div className="flex items-end px-6 pt-4">
                    <ShadowCheckbox name={"active"} shadowID={shadow.id}/>
                    <ShadowCheckbox name={"inset"} shadowID={shadow.id}/>
                    <button className="ml-auto text-sm text-white bg-red-500 hover:bg-red-700 py-1 px-3 rounded"
                    onClick={() => dispatch(removeShadow(shadow.id))}

                    >Remove</button>
                </div>
                <div className="px-6 py-4">
                    {shadowInputs}
                </div>
            </>}
        </li>
    )
}