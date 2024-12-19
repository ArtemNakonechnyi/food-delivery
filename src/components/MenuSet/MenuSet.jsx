import "./MenuSet.css";
import { menu_list } from "../../assets/assets";

function MenuSet({ category, setCategory }) {
  return (
    <div className="menu-set" id="menu-set">
      <h1>Savor Every Bite</h1>
      <p className="menu-set-text">
        Chili & Mint – Experience a fusion of bold flavors from chili and
        refreshing mint in our vibrant dishes. Enjoy a unique blend of tastes in
        a cozy, inviting atmosphere.
      </p>
      <div className="menu-set-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="menu-set-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="menu image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default MenuSet;
