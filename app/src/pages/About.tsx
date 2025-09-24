import HeaderModeToogle from "@/components/header-mode-toogle"
import PagesNavigation from "@/components/pages-navigation"

function About() {

  return (
    <div>
        <HeaderModeToogle />
        About

        <PagesNavigation activePage="about" />
    </div>
  )
}

export default About
