import React, {useState} from "react";
import Card from "./CardSkills";
import { skillsSoftware } from "../constants/credential";
import { AiOutlineDown } from 'react-icons/ai'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import {red} from '@mui/material/colors'

function Skills(){
    const [type, setType] = useState("fullstack")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className="p-6 skills">
            <div className="title px-10 flex flex-1 justify-between w-full p-4 border-b-2 border-gray-700">
                <h2 className="text-3xl text-blue-100 font-semibold">{type == "fullstack" ? "Full Stack" : type == "programming" ? "Programming lenguages" : null}</h2>
                <div className="flex flex-col relative z-[100]"> 
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="flex items-center p-4"
                    color={"primary"}
                    variant="contained"
                    size="medium"
                >
                    Select <AiOutlineDown className="w-[15px]"/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={()=>{setType("programming"), handleClose()}}>programming languages</MenuItem>
                    <MenuItem onClick={()=>{setType("fullstack"), handleClose()}}>Full Stack Developer</MenuItem>
                </Menu>
                </div>
            </div>
            <div className="px-32 mt-8 d-grid col-span-3">
                {
                    skillsSoftware.map(e=>(e.type == type ? <Card name={e.name} progress={e.progress} cover={e.cover} key={e.name} /> : null))
                }
            </div>
        </div>
    )
}

export default Skills;