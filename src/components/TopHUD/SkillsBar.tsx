import charismaIcon from "../../assets/icons/charisma.png"
import athleticismIcon from "../../assets/icons/athleticism.png"
import cookingIcon from "../../assets/icons/cooking.png"
import caretakingIcon from "../../assets/icons/caretaking.png"
import practicalityIcon from "../../assets/icons/practicality.png"
import intelligenceIcon from "../../assets/icons/intelligence.png"
import creativityIcon from "../../assets/icons/creativity.png"
import { useSelector } from "react-redux"
import { selectSkills } from "../../redux"

export default function SkillsBar() {
    const {
        charisma, athleticism, creativity, caretaking,
        intelligence, practicality, cooking
    } = useSelector(selectSkills)

    const divClassName = "flex gap-1 items-center font-bold bg-gray-400 rounded-full p-2"
    return (
        <div className="flex flex-col justify-around me-3 py-2 text-xl gap-1 ">
            <div className={divClassName}><img src={charismaIcon} className="w-8" />{charisma}</div>
            <div className={divClassName}><img src={athleticismIcon} className="w-8" />{athleticism}</div>
            <div className={divClassName}><img src={creativityIcon} className="w-8" />{creativity}</div>
            <div className={divClassName}><img src={caretakingIcon} className="w-8" />{caretaking}</div>
            <div className={divClassName}><img src={intelligenceIcon} className="w-8" />{intelligence}</div>
            <div className={divClassName}><img src={practicalityIcon} className="w-8" />{practicality}</div>
            <div className={divClassName}><img src={cookingIcon} className="w-8" />{cooking}</div>
        </div>
    )
}