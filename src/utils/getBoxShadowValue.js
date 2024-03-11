export default function getBoxShadowValue(shadows) {

    let finalString = ""


    shadows.forEach(shadow => {

        //si la shadow est active
        if (shadow.active) {
            shadow.inputs.forEach(input => {
                if (input.type === "range") {
                    finalString += `${input.value}px `
                }
                else if (input.type === "color") {
                    finalString += `${input.value}`
                }
            })

            //gerer si on est en inset ou pas
            if (shadow.inset) {
                finalString += " inset"
            }

            //si on a plusieurs ombres
            if (shadows.indexOf(shadow) === shadows.length - 1) {
                finalString += ";"
            }
            else finalString += ","
        }
    })

    return finalString
}