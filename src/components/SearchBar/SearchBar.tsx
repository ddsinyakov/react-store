import React, { useState } from 'react'
import "./SearchBar.scss"
import clear from "../../assets/clear.svg";

import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../features/Routes';

import { useAppDispatch } from '../../store/store';
import { clearSearch, setSearch } from '../../store/dataSlice';

export default function SearchBar() {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const [text, setText] = useState("");

   const go = () => {
      dispatch(setSearch({ text }));
      navigate(AppRoutes.Search);
   }

   const setInputText = (event: React.FormEvent<HTMLInputElement>) => {
      setText(event.currentTarget.value);
   }

   const clearText = () => {
      dispatch(clearSearch());
      setText("");
   }

   return (
      <div className='search'>
         <input type="text" name="" placeholder='...' onChange={setInputText} value={text} />
         <button onClick={clearText}>
            <img src={clear} alt="" />
         </button>
         <input type="button" value="Поиск" onClick={go} />
      </div>
   );
}