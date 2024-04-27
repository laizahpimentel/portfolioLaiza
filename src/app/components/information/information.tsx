import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          {/* MUDAR PARA SOFTSKILLS */}
          <span>🇺🇸 EN </span>
          <span>🇧🇷 PT-BR</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Analysis Systems Development - UNINTER</span>
        </div>
      </div>
    )
}