import { HeaderComponent } from "./HeaderComponent.jsx";
import { MainSection } from "./MainSection.jsx";

export function App(props) {
  return (
    <div>
      <HeaderComponent />
      <MainSection />
      <footer>
        &copy; INFO 340
      </footer>
    </div>
  )
}
