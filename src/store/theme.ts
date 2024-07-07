import {create } from 'zustand';

export const themeStore = create((set)=>({
    theme:"light",
    updateTheme: (new_theme: String)=> set({theme: new_theme})
     
}))