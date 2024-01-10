import Navigation from "./Navigation";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>[ INTFJ ] Park Jeonghwan's HistoryBook</h1>
      <Navigation />
    </div>
  );
}
export default Header;
