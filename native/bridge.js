import {Capacitor} from '@capacitor/core';
import {Share} from '@capacitor/share';
window.exportResearchResults=async text=>{
  if(!Capacitor.isNativePlatform()) return false;
  try{await Share.share({title:'rGBM DoseCalc — research results',text,dialogTitle:'Share research comparison'});}
  catch(error){if(!String(error).toLowerCase().includes('cancel'))window.alert('Sharing could not be completed. No results were sent.');}
  return true;
};
if(Capacitor.isNativePlatform()){
  const button=document.getElementById('export');
  if(button)button.textContent='Share results';
}
