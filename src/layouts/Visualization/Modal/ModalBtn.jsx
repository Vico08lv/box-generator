import { useState } from "react"
import { createPortal } from "react-dom"
import ModalResult from "./ModalResult"


export default function ModalBtn() {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setShowModal(!showModal)}
                className="relative z-0 mx-auto mt-2 mb-2 px-3 py-1 text-sm rounded cursor-pointer bg-green-500 text-white hover:bg-green-700">
                Get the code
            </button>
            {showModal && createPortal(
                <ModalResult closeModal={() => setShowModal(!showModal)} />,
                document.body
            )}
        </>
    )
}