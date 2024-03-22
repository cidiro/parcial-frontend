import { FunctionComponent } from "preact";

type MenuProps = {
    selected: "Client" | "Server";
};

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
    return (
        <div class="menu">
            <a href="/wordcsr" class={selected === "Client" ? "selected" : "" }>
                Client Side
            </a>
            <a href="/wordssr" class={selected === "Server" ? "selected" : ""}>
                Server Side
            </a>
        </div>
    )
};

export default Menu;