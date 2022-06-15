import React, { useState } from 'react'
import "./SearchBar.scss"
import clear from "../../assets/clear.svg";

import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../features/Routes';

import { useAppDispatch } from '../../store/store';
import { setSearch } from '../../store/dataSlice';

export default function SearchBar() {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const [text, setText] = useState("");

   const go = () => {
      if (text !== "") {
         dispatch(setSearch({ text }));
         navigate(AppRoutes.Search);
      }
   }

   const enterGo = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") go()
   }

   const setInputText = (event: React.FormEvent<HTMLInputElement>) => {
      setText(event.currentTarget.value);
   }

   const clearText = () => {
      setText("");
      dispatch(setSearch({ text }));
   }

   return (
      <div className='search'>
         <input type="text" name="" placeholder='...' onChange={setInputText} value={text} onKeyDown={enterGo} />
         <button onClick={clearText}>
            <img src={clear} alt="" />
         </button>
         <input type="button" value="Поиск" onClick={go} />
      </div>
   );
}