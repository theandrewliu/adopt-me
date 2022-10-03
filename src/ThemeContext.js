import { createContext} from "react";

// const [theme, setTheme] = useState('darkblue');

const ThemeContext = createContext(["yellow", () => {}]);

export default ThemeContext