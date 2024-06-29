import '../styles/index.scss'
import React, { Suspense } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPagesLazy } from "../pages/AboutPages/AboutPages.Lazy";
import { MainPagesLazy } from "../pages/MainPages/MainPages.Lazy";
import { useTheme } from "../theme/useTheme";
import { classNames } from "../helpers/classNames/classNames";


const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPagesLazy/>}/>
          <Route path='/' element={<MainPagesLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;