import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function Header({ setGameType }) {
  const handleChange = (e) => {
    setGameType(e.target.checked ? "Infinite" : "Standard");
    setDisplayType(e.target.checked ? "Infinite" : "Standard");
  };
  const [displayType, setDisplayType] = useState("Infinite");
  return (
    <div className="header">
      <AppBar style={{ background: "#282c34" }}>
        <div className="logo-name">
          <div className="logo-anya"></div>Let's Play In or Out
        </div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch defaultChecked color="success" onChange={handleChange} />
            }
            label={displayType}
          />
        </FormGroup>
      </AppBar>
    </div>
  );
}

export default Header;
