import React from "react";
import './Avatar.css';
import { SlEnvolope } from "react-icons/sl";
import {AiOutlinePhone, AiOutlineGlobal, AiOutlineHeart, AiOutlineEdit, AiFillDelete} from "react-icons/ai";

const AvatarGroups = (props) => {
  const data = props.data;
  if (data) {
    return (
      <div className="avatarContainer">
        {data &&
          data.map((i) => {
            return (
              <div className="avatarTile">
                <img
                  src={i.src}
                  alt="new"
                  width={'100px'}
                  height={'100px'}
                  className='imgs'
                />
                <div className="name">{i.name}</div>
                <div className="details">
                    <p><span className="icons"><SlEnvolope/></span>{i.email}</p>
                    <p><span className="icons"><AiOutlinePhone/></span>{i.phone}</p>
                    <p><span className="icons"><AiOutlineGlobal/></span>{i.website}</p>
                </div>
                <div className="bottomTile">
                    <div><AiOutlineHeart color="red" size={'24px'}/></div>
                    <div><AiOutlineEdit color="gray" size={'24px'}/></div>
                    <div><AiFillDelete color="gray" size={'24px'}/></div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
};

export default AvatarGroups;
