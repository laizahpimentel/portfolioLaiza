import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Analysis Systems Development - UNINTER</span>
      </div>
      <SectionTitle text="Experience" />
      <div>
        <div className="experienceWork-info">
          <span> 
          ◦ Desenvolvimento FrontEnd, Backend<br></br>
          ◦ Testes automatizados e2e <br></br>
          ◦ Javascript com Vuejs e estilização de componentes.<br></br>
          ◦ Prototipação de layouts<br></br>
            </span>
        </div>
      </div>
    </div>

  )
}